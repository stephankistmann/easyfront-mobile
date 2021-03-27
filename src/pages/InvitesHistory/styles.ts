import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TitleText = styled.Text`
  font-weight: bold;
  margin-right: 8px;
`;

export const Main = styled.View`
  flex: 1;
  margin: 24px;
`;

export const MainHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Line = styled.View`
  width: 100%;
  height: 1px;
  background: #ccc;
  margin-top: 5%;
  margin-bottom: 5%;
`;

export const InviteList = styled.View`
  flex-direction: row;
`;

export const AddInvite = styled.TouchableOpacity`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background: #f66253;
  margin: 24px;
  border-radius: 8px;
  height: 48px;
  margin-top: 0;
`;

export const AddInviteText = styled.Text`
  color: #fff;
  font-weight: bold;
  margin-left: 16px;
`;

export const AddInvitePlusIconContainer = styled.View`
  background-color: #f0887e;
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
  height: 48px;
  width: 48px;
  justify-content: center;
  align-items: center;
`;

export const History = styled.TouchableOpacity`
  align-self: flex-end;
  height: 30px;
  width: 90px;
  justify-content: space-around;
  border-radius: 8px;
  border: 1px solid #0e0e2c;
  align-items: center;
  flex-direction: row;
  padding: 8px;
`;
