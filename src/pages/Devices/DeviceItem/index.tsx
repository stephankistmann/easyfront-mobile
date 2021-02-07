import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { useSuperunit } from "../../../hooks/superunit";
import api from "../../../services/api";
import {
  Container,
  DeviceIconBackground,
  DeviceContainer,
  TextContainer,
  Dot,
  LeftContent,
  RightContent,
  CameraButton,
  KeyButton,
} from "./styles";

interface IDevice {
  id: string;
  name: string;
}

const DeviceItem: React.FC = () => {
  const { selected } = useSuperunit();
  const [devices, setDevices] = useState<IDevice[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      if (selected) {
        const response = await api.get(`/superunities/${selected.id}/devices`);

        if (!response) return;

        setDevices(response.data);
      }
      setLoading(false);
    }

    getData();
  }, [selected]);

  return (
    <Container>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <>
          {devices &&
            devices.map((device) => (
              <DeviceContainer key={device.id}>
                <LeftContent>
                  <DeviceIconBackground>
                    <Dot />
                    <Feather
                      name="tablet"
                      size={20}
                      color="#fff"
                      style={{ position: "absolute", bottom: 10, left: 10 }}
                    />
                  </DeviceIconBackground>
                  <TextContainer>
                    <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                      {device.name}
                    </Text>
                  </TextContainer>
                </LeftContent>
                <RightContent>
                  <CameraButton>
                    <Feather name="camera" size={20} color="#0e0e2c" />
                  </CameraButton>
                  <KeyButton>
                    <Feather name="key" size={20} color="#fff" />
                  </KeyButton>
                </RightContent>
              </DeviceContainer>
            ))}
        </>
      )}
    </Container>
  );
};

export default DeviceItem;
