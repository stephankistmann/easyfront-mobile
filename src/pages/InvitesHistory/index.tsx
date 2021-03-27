import React from "react";
import Header from "../../components/Header";
import Feather from "react-native-vector-icons/Feather";
import { ScrollView } from "react-native-gesture-handler";
import InviteItem from "./InviteItem";
import {
  Container,
  TitleContainer,
  TitleText,
  Main,
  MainHeader,
  Line,
  InviteList,
  AddInvite,
  AddInviteText,
  AddInvitePlusIconContainer,
} from "./styles";
import { useNavigation } from "@react-navigation/native";

const InvitesHistory: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Header hasBackButton />
      <Main>
        <MainHeader>
          <TitleContainer>
            <Feather
              name="send"
              color="#F66253"
              size={24}
              style={{ marginRight: 8 }}
            />
            <TitleText>Histórico de Convites</TitleText>
          </TitleContainer>
        </MainHeader>
        <Line />
        <ScrollView showsVerticalScrollIndicator={false}>
          <InviteList>
            <InviteItem />
          </InviteList>
        </ScrollView>
      </Main>
      <AddInvite onPress={() => navigation.navigate("InvitesAdd")}>
        <AddInviteText>Criar um novo convite</AddInviteText>
        <AddInvitePlusIconContainer>
          <Feather name="plus" size={30} color="#fff" />
        </AddInvitePlusIconContainer>
      </AddInvite>
    </Container>
  );
};

export default InvitesHistory;
