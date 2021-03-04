import React from "react";
import { View, Text } from "react-native";
import Header from "../../components/Header";
import Feather from "react-native-vector-icons/Feather";
import { ScrollView } from "react-native-gesture-handler";
import EventItem from "./EventItem";
import {
  Container,
  Main,
  MainHeader,
  Line,
  EventList,
  History,
} from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Events: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Header />
      <Main>
        <MainHeader>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Feather
              name="bell"
              color="#F66253"
              size={24}
              style={{ marginRight: 8 }}
            />
            <Text style={{ fontWeight: "bold", marginRight: 8 }}>Eventos</Text>

            <TouchableOpacity>
              <Feather name="info" size={14} style={{ marginTop: 2 }} />
            </TouchableOpacity>
          </View>
          {/* <History onPress={() => navigation.navigate("InvitesHistory")}>
            <Text style={{ fontSize: 12 }}>Filtrar</Text>
            <Feather name="filter" size={12} style={{ marginTop: 2 }} />
          </History> */}
        </MainHeader>
        <Line />
        <ScrollView showsVerticalScrollIndicator={false}>
          <EventList>
            <EventItem />
          </EventList>
        </ScrollView>
      </Main>
    </Container>
  );
};

export default Events;
