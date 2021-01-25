import React from "react";
import { Text } from "react-native";
import Header from "../../components/Header";

import { Container } from "./styles";

const Teste: React.FC = () => {
  return (
    <Container>
      <Header hasBackButton />
      <Text>Teste</Text>
    </Container>
  );
};

export default Teste;
