import styled from "styled-components/native";

export const Container = styled.View`
  height: 10%;
  width: 100%;
  background: transparent;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`;

export const NavButton = styled.TouchableOpacity``;

export const UserContainer = styled.View`
  flex-direction: row;
`;

export const UnitsContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Profile = styled.View`
  position: relative;
  height: 40px;
  width: 40px;
  border-radius: 20px;
  margin-left: 16px;
`;

export const Avatar = styled.TouchableOpacity`
  height: 40px;
  width: 40px;
  border-width: 2px;
  border-color: #fff;
  border-radius: 20px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
`;

export const AvatarImage = styled.Image`
  height: 40px;
  width: 40px;
`;

export const AvatarPlaceholder = styled.View`
  border-radius: 38px;
  background-color: #c4c4c4;
  height: 50px;
  width: 50px;
  align-items: center;
  justify-content: center;
`;

export const AvatarPlaceholderText = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: #fff;
`;

export const GreenDot = styled.View`
  position: absolute;
  background: #82d888;
  width: 8px;
  height: 8px;
  box-shadow: 0 0 6px rgba(0, 0, 20, 0.1);
  border-radius: 4px;
  z-index: 5;
  bottom: 2px;
  right: 2px;
`;
