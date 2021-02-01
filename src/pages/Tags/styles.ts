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
`;

export const Line = styled.View`
  width: 100%;
  height: 1px;
  background: #ccc;
  margin-top: 5%;
  margin-bottom: 5%;
`;

export const TagList = styled.View`
  flex-direction: row;
`;

export const AddTag = styled.TouchableOpacity`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background: #f66253;
  margin: 24px;
  border-radius: 8px;
  height: 48px;
`;
