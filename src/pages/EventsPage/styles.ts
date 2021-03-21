import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
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

export const EventList = styled.View``;

export const AddTag = styled.TouchableOpacity`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background: #f66253;
  margin: 24px;
  margin-top: 0;
  border-radius: 8px;
  height: 48px;
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
