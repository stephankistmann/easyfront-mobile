<<<<<<< HEAD
import React, { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, Alert, Text } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { useAccess } from "../../../hooks/access";
=======
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { useSuperunit } from "../../../hooks/superunit";
>>>>>>> e9c735a207644bb301ebf28b2c05e20b6d858b12
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
<<<<<<< HEAD
  const { selected } = useAccess();
=======
  const { selected } = useSuperunit();
>>>>>>> e9c735a207644bb301ebf28b2c05e20b6d858b12
  const [devices, setDevices] = useState<IDevice[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      if (selected) {
        const response = await api.get(`/accesses/${selected.id}/devices`);

        if (!response) return;

        setDevices(response.data.data);
      }
      setLoading(false);
    }

    getData();
  }, [selected]);

  const handleOpenDevice = useCallback(
    async (id: string) => {
      console.log(id, selected?.superUnit_id, selected?.id);

      try {
        await api.post(
          `/superunities/${selected?.superUnit_id}/devices/${id}/open`
        );

        Alert.alert(
          "Dispositivo aberto",
          "O dispositivo foi aberto com sucesso."
        );
      } catch (err) {
        console.log(err);

        Alert.alert(
          "Erro ao abrir dispositivo",
          "Ocorreu um erro ao abrir o dispositivo, tente novamente."
        );

        return;
      }
    },
    [selected]
  );

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
                  {/* <CameraButton>
                    <Feather name="camera" size={20} color="#0e0e2c" />
                  </CameraButton> */}
                  <KeyButton onPress={() => handleOpenDevice(device.id)}>
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
