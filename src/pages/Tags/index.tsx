import React from "react";
import { View, Text } from "react-native";
import Header from "../../components/Header";
import Feather from "react-native-vector-icons/Feather";
import TagItem from "./TagItem";
import {
  Container,
  Main,
  MainHeader,
  Line,
  TagList,
  AddTag,
  AddTagText,
  AddTagContainer,
} from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Tags: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Header />
      <Main>
        <MainHeader>
          <Feather
            name="credit-card"
            color="#F66253"
            size={24}
            style={{ marginRight: 8 }}
          />
          <Text style={{ fontWeight: "bold", marginRight: 8 }}>
            Minhas Tags
          </Text>
          <TouchableOpacity>
            <Feather name="info" size={14} style={{ marginTop: 2 }} />
          </TouchableOpacity>
        </MainHeader>
        <Line />
        <TagList>
          <TagItem />
        </TagList>
      </Main>
      <AddTag onPress={() => navigation.navigate("TagsAdd")}>
        <AddTagText>Adicionar tag</AddTagText>
        <AddTagContainer>
          <Feather name="plus" size={30} color="#fff" />
        </AddTagContainer>
      </AddTag>
    </Container>
  );
};

export default Tags;
