import styled from "styled-components/native";
import { Picker } from "@react-native-community/picker";
import { Feather } from "@expo/vector-icons";
import SelectIOS from "../../components/Select/index.ios";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 0 24px 0 24px;
`;

export const Title = styled.View`
  margin-top: 24px;
  flex-direction: row;
  align-items: center;
`;

export const TitleText = styled.Text`
  color: #0e0e2c;
  font-weight: bold;
  margin-left: 8px;
  margin-top: 2px;
  font-size: 16px;
`;

export const Line = styled.View`
  width: 100%;
  height: 1px;
  margin-top: 5%;
  margin-bottom: 5%;
  background: #bbb;
`;

export const UserAvatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  align-self: center;
  border-width: 3px;
  border-color: #fff;
  position: relative;
`;

export const UserAvatarButton = styled.TouchableOpacity`
  position: absolute;
  z-index: 1;
  height: 32px;
  width: 32px;
  border-radius: 16px;
  top: 140px;
  left: 220px;
  background: #f66253;
  align-items: center;
  justify-content: center;
`;

export const CameraBackground = styled.View`
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;

export const AvatarPlaceholder = styled.View`
  background-color: #c4c4c4;
  border-width: 3px;
  border-color: #fff;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`;

export const AvatarPlaceholderText = styled.Text`
  font-size: 32px;
  color: #fff;
`;

export const UserName = styled.Text`
  margin-top: 16px;
  margin-bottom: 24px;
  font-weight: bold;
`;

export const SelectGenderNature = styled(Picker)``;

export const SelectContainer = styled.View`
  background: #ffffff;
  border-width: 1px;
  border-color: #dfe9eb;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 8px;
  height: 54px;
  max-width: 340px;
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const SelectText = styled.Text``;

export const ChevronDown = styled(Feather)`
  position: absolute;
  right: 20px;
`;

export const StyledSelectIOS = styled(SelectIOS)``;

export const SaveButton = styled.TouchableOpacity`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background: #f66253;
  margin: 24px;
  margin-top: 0;
  border-radius: 8px;
  height: 48px;
  width: 100%;
`;

export const SaveButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  margin-left: 16px;
`;

export const SaveButtonIconView = styled.View`
  background-color: #f0887e;
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
  height: 48px;
  width: 48px;
  justify-content: center;
  align-items: center;
`;
