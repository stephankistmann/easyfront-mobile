import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  Content,
  ContentText,
  IconContainerOutLine,
  IconContainer,
  TouchableOpacityContainer,
  TouchableOpacity,
  TouchableOpacityText,
} from "./styles";
import Feather from "react-native-vector-icons/Feather";

const InvitesCreated: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Content>
        <IconContainerOutLine>
          <IconContainer>
            <Feather
              name="send"
              size={36}
              color="#fff"
              style={{ marginTop: 2, marginRight: 2 }}
            />
          </IconContainer>
        </IconContainerOutLine>
        <ContentText>Convite criado</ContentText>
        <ContentText>com sucesso!</ContentText>
      </Content>
      <TouchableOpacityContainer>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <TouchableOpacityText>Retornar</TouchableOpacityText>
        </TouchableOpacity>
      </TouchableOpacityContainer>
    </Container>
  );
};

export default InvitesCreated;
