import styled from "styled-components/native";
import { Picker } from "@react-native-community/picker";

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 48px;
  margin-top: 16px;
`;

export const Selected = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 8px;
  background: #e5e5e9;
  height: 64px;
  border-radius: 8px;
  width: 80%;
  height: 56px;
  margin-top: 24px;
`;

export const IconBackground = styled.View`
  align-items: center;
  justify-content: center;
  height: 44px;
  width: 44px;
  margin-right: 16px;
  background: #0e0e2c;
  border-radius: 8px;
  box-shadow: 0 0 6px rgba(0, 0, 100, 0.1);
`;
export const SuperunitSelect = styled(Picker)`
  flex: 1;
  height: 50px;
`;
