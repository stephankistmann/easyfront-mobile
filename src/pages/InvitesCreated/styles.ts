import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 32px;
`;

export const Content = styled.View`
  align-items: center;
  justify-content: center;
`;

export const IconContainer = styled.View`
  height: 70px;
  width: 70px;
  border-radius: 35px;
  background: #383850;
  align-items: center;
  justify-content: center;
`;

export const IconContainerOutLine = styled.View`
  border-width: 2px;
  border-style: solid;
  border-color: #d84839;
  height: 86px;
  width: 86px;
  border-radius: 43px;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
`;

export const ContentText = styled.Text`
  font-size: 24px;
  color: #383850;
`;

export const TouchableOpacityContainer = styled.View`
  width: 100%;
  justify-content: flex-end;
`;

export const TouchableOpacity = styled.TouchableOpacity`
  height: 50px;
  background: #f66253;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
`;

export const TouchableOpacityText = styled.Text`
  font-size: 20px;
  color: #fff;
`;
