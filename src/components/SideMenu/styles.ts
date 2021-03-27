import styled from "styled-components/native";

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const Header = styled.View``;

export const Profile = styled.View`
  align-items: center;
  justify-content: center;
`;

export const ProfileText = styled.Text`
  margin-top: 20px;
`;

export const Avatar = styled.Image`
  width: 84px;
  height: 84px;
  border-radius: 42px;
  align-self: center;
  border-width: 3px;
  border-color: #fff;
`;

export const AvatarBorder = styled.View`
  border-width: 2px;
  border-style: solid;
  border-color: #d84839;
  width: 92px;
  height: 92px;
  border-radius: 46px;
  align-items: center;
  justify-content: center;
`;

export const AvatarPlaceholder = styled.View`
  background-color: #c4c4c4;
  width: 76px;
  height: 76px;
  border-radius: 38px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const AvatarPlaceholderText = styled.Text`
  font-weight: bold;
  font-size: 28px;
  color: #fff;
`;

export const Menu = styled.Text`
  font-weight: bold;
  font-size: 18px;
  margin-top: 15%;
  width: 100%;
`;

export const Line = styled.View`
  width: 100%;
  height: 1px;
  background: #eee;
  margin-top: 5%;
  margin-bottom: 5%;
`;

export const Logout = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  height: 54px;
  align-items: center;
  padding: 16px;
`;
