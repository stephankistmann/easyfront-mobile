import styled from "styled-components/native";
import { Platform } from "react-native";
import { Picker } from "@react-native-community/picker";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px ${Platform.OS === "android" ? 150 : 40}px;
  position: relative;
`;

export const Title = styled.View`
  margin-top: 24px;
  flex-direction: row;
  align-items: center;
`;

export const Line = styled.View`
  width: 100%;
  height: 1px;
  background: red;
  margin-top: 5%;
  margin-bottom: 5%;
  background: #bbb;
`;

export const UserAvatarButton = styled.TouchableOpacity``;

export const UserAvatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  align-self: center;
  border: 3px solid #fff;
`;

export const AvatarPlaceholder = styled.View`
  background-color: #c4c4c4;
  border: 3px solid #fff;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`;

export const SelectGenderNature = styled(Picker)``;

export const SelectContainer = styled.View`
  background: #ffffff;
  border-width: 1px;
  border-color: #dfe9eb;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 8px;
  height: 48px;
  max-width: 340px;
  justify-content: center;
  width: 100%;
`;
