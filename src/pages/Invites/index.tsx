import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import Header from "../../components/Header";
import Feather from "react-native-vector-icons/Feather";
import { ScrollView } from "react-native-gesture-handler";
import InviteItem from "./InviteItem";
import {
  Container,
  Main,
  MainHeader,
  Line,
  InviteList,
  AddTag,
  History,
} from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Invites: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Header />
      <Main>
        <MainHeader>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Feather
              name="send"
              color="#F66253"
              size={24}
              style={{ marginRight: 8 }}
            />
            <Text style={{ fontWeight: "bold", marginRight: 8 }}>
              Meus Convites
            </Text>

            <TouchableOpacity>
              <Feather name="info" size={14} style={{ marginTop: 2 }} />
            </TouchableOpacity>
          </View>
          <History onPress={() => navigation.navigate("InvitesHistory")}>
            <Text style={{ fontSize: 12 }}>Histórico</Text>
            <Feather name="rotate-ccw" size={10} style={{ marginTop: 2 }} />
          </History>
        </MainHeader>
        <Line />
        <ScrollView showsVerticalScrollIndicator={false}>
          <InviteList>
            <InviteItem />
          </InviteList>
        </ScrollView>
      </Main>
      <AddTag onPress={() => navigation.navigate("InvitesAdd")}>
        <Text style={{ color: "#fff", fontWeight: "bold", marginLeft: 16 }}>
          Criar um novo convite
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

export default Invites;
