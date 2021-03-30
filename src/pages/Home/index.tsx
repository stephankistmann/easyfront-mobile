import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useAuth } from "../../hooks/auth";
import Header from "../../components/Header";

import {
  Container,
  Main,
  TopContent,
  MessageContainer,
  MessageContainerTextBold,
  MessageContainerText,
  ShortCutsText,
  ShortCutsContainer,
  ShortCutsContainerText,
  ShortCut,
  ShortCutIconBg,
  ScrollViewContainer,
} from "./styles";
import logo from "../../assets/logo.png";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { useAccess } from "../../hooks/access";

const Home: React.FC = () => {
  const { user } = useAuth();
  const navigation = useNavigation();

  return (
    <Container>
      <Header />
      <Main>
        <TopContent>
          <MessageContainer>
            <MessageContainerTextBold>Bom dia,</MessageContainerTextBold>
            <MessageContainerText>{user.name}</MessageContainerText>
          </MessageContainer>
          <TouchableOpacity onPress={() => navigation.navigate("Events")}>
            <Feather name="bell" size={32} style={{ marginRight: 16 }} />
          </TouchableOpacity>
        </TopContent>

        <Image
          source={logo}
          style={{
            flex: 1,
            width: "50%",
            resizeMode: "contain",
            alignSelf: "center",
          }}
        />

        <Image source={{ uri: user.avatar_url }} />

        <ShortCutsText>ATALHOS</ShortCutsText>
        <ShortCutsContainer>
          <ScrollViewContainer>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <>
                <ShortCut
                  onPress={() =>
                    navigation.navigate("InvitesStack", {
                      screen: "InvitesAdd",
                    })
                  }
                >
                  <ShortCutIconBg>
                    <Feather
                      name="send"
                      size={32}
                      style={{
                        color: "#fff",
                      }}
                    />
                  </ShortCutIconBg>
                  <ShortCutsContainerText>CRIAR CONVITE</ShortCutsContainerText>
                </ShortCut>

                <ShortCut
                  onPress={() =>
                    navigation.navigate("InvitesStack", {
                      screen: "InvitesHistory",
                    })
                  }
                >
                  <ShortCutIconBg>
                    <Feather
                      name="send"
                      size={32}
                      style={{
                        color: "#fff",
                      }}
                    />
                  </ShortCutIconBg>
                  <ShortCutsContainerText>
                    HISTÓRICO DE CONVITES
                  </ShortCutsContainerText>
                </ShortCut>

                <ShortCut onPress={() => navigation.navigate("Devices")}>
                  <ShortCutIconBg>
                    <Feather
                      name="tablet"
                      size={32}
                      style={{
                        color: "#fff",
                      }}
                    />
                  </ShortCutIconBg>
                  <ShortCutsContainerText>DISPOSITIVOS</ShortCutsContainerText>
                </ShortCut>

                <ShortCut
                  onPress={() =>
                    navigation.navigate("TagsStack", {
                      screen: "Tags",
                    })
                  }
                >
                  <ShortCutIconBg>
                    <Feather
                      name="credit-card"
                      size={32}
                      style={{
                        color: "#fff",
                      }}
                    />
                  </ShortCutIconBg>
                  <ShortCutsContainerText>TAGS</ShortCutsContainerText>
                </ShortCut>
              </>
            </ScrollView>
          </ScrollViewContainer>
        </ShortCutsContainer>
      </Main>
    </Container>
  );
};

export default Home;
