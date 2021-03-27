import styled, { css } from "styled-components/native";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

interface IContentProps {
  selected: boolean;
}

export const Container = styled.View`
  position: relative;
  height: 46px;
`;

export const SubContainer = styled.View`
  position: absolute;
  width: ${width}px;
  top: 0;
  left: -24px;
`;

export const Content = styled.TouchableOpacity<IContentProps>`
  background: #dedede;
  border-radius: 8px;
  height: 46px;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  padding: 16px;

  ${(props: { selected: boolean }) =>
    props.selected &&
    css`
      background: #f66253;
    `}
`;

export const ContentText = styled.Text<IContentProps>`
  font-size: 12px;
  color: #222;

  ${(props: { selected: boolean }) =>
    props.selected &&
    css`
      color: #fff;
    `}
`;
