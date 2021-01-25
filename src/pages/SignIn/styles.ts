import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: rgb(250, 250, 254);
  color: rgb(47, 72, 88);
`;

export const Title = styled.Text`
  font-family: "Quicksand_700Bold";
  font-size: 16px;
  margin: 64px 0 24px;
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 24px;
`;

export const ForgotPasswordText = styled.Text`
  color: rgb(47, 72, 88);
  font-family: "Quicksand_400Regular";
`;
