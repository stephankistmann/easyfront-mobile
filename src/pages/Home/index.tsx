import React from "react";
import { Image, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useAuth } from "../../hooks/auth";
import Header from "../../components/Header";

import {
  Container,
  Main,
  TopContent,
  MessageContainer,
  ShortcutsContainer,
  InvitesContainer,
  Invites,
  InviteIconBg,
} from "./styles";
import logo from "../../assets/logo.png";

const Home: React.FC = () => {
  const { signOut, user } = useAuth();

  return (
    <Container>
      <Header name="menu" />
      <Main>
        <TopContent>
          <MessageContainer>
            <Text style={{ fontWeight: "bold" }}>Bom dia,</Text>
            <Text style={{ color: "#383850", opacity: 46 }}>{user.name}</Text>
          </MessageContainer>
          <Feather name="bell" size={24} style={{ marginRight: 16 }} />
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

        <ShortcutsContainer>
          <Text style={{ fontWeight: "bold" }}>ATALHOS</Text>
          <InvitesContainer>
            <Invites onPress={signOut}>
              <InviteIconBg>
                <Feather
                  name="send"
                  size={12}
                  style={{
                    color: "#fff",
                  }}
                />
              </InviteIconBg>
              <Text style={{ marginLeft: 8, marginBottom: 8, fontSize: 12 }}>
                CRIAR CONVITE
              </Text>
            </Invites>

            <Invites onPress={signOut}>
              <InviteIconBg>
                <Feather
                  name="send"
                  size={12}
                  style={{
                    color: "#fff",
                  }}
                />
              </InviteIconBg>
              <Text style={{ marginLeft: 8, marginBottom: 8, fontSize: 12 }}>
                CRIAR CONVITE
              </Text>
            </Invites>

            <Invites onPress={signOut}>
              <InviteIconBg>
                <Feather
                  name="send"
                  size={12}
                  style={{
                    color: "#fff",
                  }}
                />
              </InviteIconBg>
              <Text style={{ marginLeft: 8, marginBottom: 8, fontSize: 12 }}>
                CRIAR CONVITE
              </Text>
            </Invites>
          </InvitesContainer>
        </ShortcutsContainer>
      </Main>
    </Container>
  );
};

export default Home;
