import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex-direction: column;
`;

export const DeviceContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const DeviceIconBackground = styled.View`
  height: 44px;
  width: 44px;
  background: #0e0e2c;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Dot = styled.View`
  position: absolute;
  width: 8px;
  height: 8px;
  background: #82d888;
  border-radius: 4px;
  top: 4px;
  right: 4px;
`;

export const NameContainer = styled.View`
  margin-left: 16px;
  align-items: center;
  justify-content: center;
`;

export const NameText = styled.Text`
  font-size: 14px;
  font-weight: bold;
`;

export const LeftContent = styled.View`
  flex-direction: row;
`;

export const RightContent = styled.View`
  flex-direction: row;
`;

export const CameraButton = styled.TouchableOpacity`
  background: #ccc;
  height: 40px;
  width: 40px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`;

export const KeyButton = styled.TouchableOpacity`
  background: #f66253;
  height: 40px;
  width: 40px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;
