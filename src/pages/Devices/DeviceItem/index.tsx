import React, { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, Alert, Text } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { useAccess } from "../../../hooks/access";
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
  handleOpenDevice: (id: string) => void;
}

const DeviceItem: React.FC<IDevice> = ({ id, name, handleOpenDevice }) => {
  return (
    <Container>
      <DeviceContainer key={id}>
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
            <Text style={{ fontSize: 14, fontWeight: "bold" }}>{name}</Text>
          </TextContainer>
        </LeftContent>
        <RightContent>
          {/* <CameraButton>
                    <Feather name="camera" size={20} color="#0e0e2c" />
                  </CameraButton> */}
          <KeyButton onPress={() => handleOpenDevice(id)}>
            <Feather name="key" size={20} color="#fff" />
          </KeyButton>
        </RightContent>
      </DeviceContainer>
    </Container>
  );
};

export default DeviceItem;
