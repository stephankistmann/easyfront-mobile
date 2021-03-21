import styled, { css } from "styled-components/native";
import FeatherIcon from "react-native-vector-icons/Feather";

interface IContainerProps {
  isFocused: boolean;
  isErrored: boolean;
  isCustom: boolean;
}

export const Container = styled.View<IContainerProps>`
  background: #ffffff;
  border-width: 1px;
  border-color: #f5fbff;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 8px;
  width: 100%;
  height: 54px;
  max-width: 340px;
  flex-direction: row;
  align-items: center;

  ${(props: any) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${(props: any) =>
    props.isFocused &&
    css`
      border-color: #69aaf5;
    `}

      ${(props: any) =>
    props.isCustom &&
    css`
      background: #f5fbff;
      color: #707070;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  font-family: "Quicksand_400Regular";
  color: #666360;
  font-size: 14px;

  ${(props: any) =>
    props.isCustom &&
    css`
      color: #707070;
      font-family: "Quicksand_600SemiBold";
    `}
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;
