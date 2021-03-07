import styled from "styled-components/native";

export const Container = styled.View`
  background: #dedede;
  border-width: 1px;
  border-color: #dedede;
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
  padding: 16px;
  margin-bottom: 8px;
  margin-top: 8px;
  width: 85%;
  height: 50px;
  max-width: 340px;
  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  font-family: "Quicksand_400Regular";
  color: #383850;
  font-size: 14px;
`;
