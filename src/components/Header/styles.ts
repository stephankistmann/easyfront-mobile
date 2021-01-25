import styled from "styled-components/native";

export const Container = styled.View`
  height: 11%;
  width: 100%;
  background: #dedede;
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
  margin-right: 8px;
  padding: 8px;
`;

export const Profile = styled.View`
  position: relative;
  height: 50px;
  width: 50px;
  border-radius: 25px;
`;

export const GreenDot = styled.View`
  position: absolute;
  background: #82d888;
  width: 10px;
  height: 10px;
  box-shadow: 0 0 6px rgba(0, 0, 20, 0.1);
  border-radius: 6px;
  bottom: 3px;
  right: 3px;
  z-index: 5;
`;

export const Avatar = styled.TouchableOpacity`
  height: 50px;
  width: 50px;
  border-width: 2px;
  border-color: #fff;
  border-radius: 25px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
`;

export const AvatarPlaceholder = styled.View`
  border-radius: 38px;
  background-color: #c4c4c4;
  height: 50px;
  width: 50px;
  align-items: center;
  justify-content: center;
`;
