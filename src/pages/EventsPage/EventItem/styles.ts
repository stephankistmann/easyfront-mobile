import styled, { css } from "styled-components/native";

interface ArrowProps {
  hasDirection: string;
}

export const Container = styled.View`
  width: 100%;
  flex-direction: column;
`;

export const EventContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const IconBackground = styled.View`
  height: 44px;
  width: 44px;
  background: #0e0e2c;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Arrow = styled.View<ArrowProps>`
  position: absolute;
  width: 12px;
  height: 12px;
  bottom: 4px;
  right: 4px;

  ${(props) =>
    props.hasDirection === "out" &&
    css`
      top: 4px;
      left: 4px;
    `}
`;

export const NameContainer = styled.View`
  margin-left: 16px;
`;

export const NameText = styled.Text`
  font-size: 14px;
  font-weight: bold;
`;

export const DateText = styled.Text`
  font-size: 12px;
  color: #aaa;
`;

export const PhotoIconBackground = styled.TouchableOpacity`
  background: #f5fbff;
  height: 40px;
  width: 40px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

export const LeftContent = styled.View`
  flex-direction: row;
`;

export const RightContent = styled.View`
  flex-direction: row;
`;

export const UsesContainer = styled.View`
  border: 1px solid #f5fbff;
  height: 40px;
  width: 40px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`;
