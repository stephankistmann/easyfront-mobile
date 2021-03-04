import styled from "styled-components/native";

export const Modal = styled.Modal``;

export const Content = styled.TouchableOpacity`
  align-items: flex-end;
  justify-content: center;
  flex: 1;
  max-width: 200px;
`;

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  position: relative;
  top: 0;
`;

export const OkButtonContainer = styled.View`
  align-self: center;
  justify-content: center;
  align-items: center;
  width: 50%;
  background: #ddd;
  border-radius: 8px;
  height: 48px;
`;

export const OkText = styled.Text`
  font-size: 24px;
`;
