import styled, { css } from "styled-components/native";

interface DotProps {
  hasUses: boolean;
}

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const CreditCardBackground = styled.View`
  height: 44px;
  width: 44px;
  background: #0e0e2c;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Dot = styled.View<DotProps>`
  position: absolute;
  width: 8px;
  height: 8px;
  background: #fc6666;
  border-radius: 4px;
  top: 4px;
  right: 4px;

  ${(props) =>
    props.hasUses &&
    css`
      background: #82d888;
    `}
`;

export const TextContainer = styled.View`
  margin-left: 16px;
`;

export const TrashBackground = styled.TouchableOpacity`
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
  border: 1px solid #dedede;
  height: 40px;
  width: 40px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`;
