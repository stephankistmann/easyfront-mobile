import styled from "styled-components/native";
import { Picker } from "@react-native-community/picker";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 48px;
  margin-top: 16px;
`;

export const Selected = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  background: #e5e5e9;
  height: 64px;
  border-radius: 8px;
  width: 80%;
  height: 56px;
  margin-top: 24px;
  position: relative;
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
export const AccessSelect = styled(Picker)`
  flex: 1;
  position: absolute;
  height: 50px;
`;

export const LoadingContainer = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: row;
`;

export const Loading = styled.ActivityIndicator``;

export const LoadingText = styled.Text`
  margin-right: 16px;
`;

export const SelectedInfo = styled.View``;

export const SuperUnitUnitTextContainer = styled.View``;

export const SuperUnitText = styled.Text`
  font-weight: bold;
`;

export const Left = styled.View`
  align-self: flex-start;
  flex-direction: row;
  align-items: center;
  width: 150px;
`;

export const Right = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 44px;
  margin-right: 16px;
  width: 100%;
  max-width: 100px;
`;

export const ChevronDown = styled(Feather)`
  position: absolute;
`;
