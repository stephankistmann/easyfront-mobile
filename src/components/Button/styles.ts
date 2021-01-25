import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled(RectButton)`
  align-items: center;
  justify-content: center;
  background: #f66253;
  height: 56px;
  border-radius: 8px;
  max-width: 340px;
  margin-top: 8px;
`;

export const ButtonText = styled.Text`
  font-family: "Quicksand_600SemiBold";
  color: #ffffff;
  font-size: 16px;
`;
