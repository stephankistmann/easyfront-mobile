import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
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

interface IRouteParams {
  code: string;
}

interface IRoute {
  params?: IRouteParams;
}

const TagsCreated: React.FC = () => {
  const navigation = useNavigation();
  const { params } = useRoute() as IRoute;

  return (
    <Container>
      <Content>
        <IconContainerOutLine>
          <IconContainer>
            <Feather
              name="credit-card"
              size={36}
              color="#fff"
              style={{ marginTop: 2, marginRight: 2 }}
            />
          </IconContainer>
        </IconContainerOutLine>
        <ContentText>Tag criado</ContentText>
        <ContentText>com sucesso!</ContentText>
        <ContentText>{params?.code}</ContentText>
      </Content>
      <TouchableOpacityContainer>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <TouchableOpacityText>Retornar</TouchableOpacityText>
        </TouchableOpacity>
      </TouchableOpacityContainer>
    </Container>
  );
};

export default TagsCreated;
