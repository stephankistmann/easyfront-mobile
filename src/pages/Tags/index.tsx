import React from "react";
import { View, Text } from "react-native";
import Header from "../../components/Header";
import Feather from "react-native-vector-icons/Feather";
import TagItem from "./TagItem";
import { Container, Main, MainHeader, Line, TagList, AddTag } from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";

const Tags: React.FC = () => {
  return (
    <Container>
      <Header />
      <Main>
        <MainHeader>
          <Feather
            name="credit-card"
            color="#F66253"
            size={24}
            style={{ marginRight: 8, marginLeft: 8 }}
          />
          <Text style={{ fontWeight: "bold", marginRight: 8 }}>
            Meus Cartões
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
      <AddTag>
        <Text style={{ color: "#fff", fontWeight: "bold", marginLeft: 16 }}>
          Adicionar Cartão
        </Text>
        <View
          style={{
            backgroundColor: "#F0887E",
            borderBottomRightRadius: 8,
            borderTopRightRadius: 8,
            height: 48,
            width: 48,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Feather name="plus" size={30} color="#fff" />
        </View>
      </AddTag>
    </Container>
  );
};

export default Tags;
