import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: #fff;
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

export const TagList = styled.View``;

export const AddTag = styled.TouchableOpacity`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background: #f66253;
  margin: 24px;
  border-radius: 8px;
  height: 48px;
`;

export const AddTagText = styled.Text`
  color: #fff;
  font-weight: bold;
  margin-left: 16px;
`;

export const AddTagContainer = styled.View`
  background: #f0887e;
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
  height: 48px;
  width: 48px;
  justify-content: center;
  align-items: center;
`;
