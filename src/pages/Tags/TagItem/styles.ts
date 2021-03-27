import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex-direction: column;
`;

export const InviteContianer = styled.View`
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
`;

export const Serial = styled.Text`
  font-size: 12px;
`;

export const TrashBackground = styled.TouchableOpacity`
  background: #f5fbff;
  height: 32px;
  width: 32px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;
