import styled, { css } from "styled-components/native";
import Feather from "react-native-vector-icons/Feather";

interface ContainerProps {
  isSelected: boolean;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  width: 100%;
  height: 44px;
  align-items: center;
  flex-direction: row;
  padding: 16px;
  border-radius: 8px;
  margin-top: 5%;

  ${(props) =>
    props.isSelected &&
    css`
      color: #fff;
      background: #eee;
    `}
`;

export const ScreenName = styled.Text<ContainerProps>`
  color: #383850;

  ${(props) =>
    props.isSelected &&
    css`
      font-weight: bold;
    `}
`;

export const FeatherIcon = styled(Feather)<ContainerProps>`
  margin-right: 16px;
  color: #383850;

  ${(props) =>
    props.isSelected &&
    css`
      color: #f66253;
    `}
`;
