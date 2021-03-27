import React from "react";
import { Text } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import {
  Container,
  CreditCardBackground,
  Serial,
  TrashBackground,
  InviteContianer,
} from "./styles";

interface ITags {
  id: string;
  serial: string;
  handleDelete: (id: string) => void;
}

const TagItem: React.FC<ITags> = ({ id, serial, handleDelete }) => {
  return (
    <Container>
      <InviteContianer key={id}>
        <CreditCardBackground>
          <Feather name="credit-card" size={24} color="#fff" />
        </CreditCardBackground>
        <Serial>{serial}</Serial>
        <TrashBackground onPress={() => handleDelete(id)}>
          <Feather name="trash-2" size={18} color="#0e0e2c" />
        </TrashBackground>
      </InviteContianer>
    </Container>
  );
};

export default TagItem;
