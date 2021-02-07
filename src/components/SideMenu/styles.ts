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

export const Avatar = styled.View`
  height: 92px;
  width: 92px;
  overflow: hidden;
  border-width: 2px;
  border-color: #de8881;
  border-radius: 46px;
  align-items: center;
  justify-content: center;
`;

export const AvatarPlaceholder = styled.View`
  border-radius: 38px;
  background-color: #c4c4c4;
  height: 76px;
  width: 76px;
  align-items: center;
  justify-content: center;
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
