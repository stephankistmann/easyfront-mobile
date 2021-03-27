import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;

export const Button = styled.TouchableOpacity`
  width: 100px;
  height: 100px;
  background: red;
`;

export const ErrorText = styled.Text`
  align-self: center;
  font-size: 18px;
`;
