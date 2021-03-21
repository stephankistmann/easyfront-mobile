import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  NativeScrollEvent,
  NativeSyntheticEvent,
  NativeScrollPoint,
  NativeScrollSize,
} from "react-native";
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
import { useAccess } from "../../hooks/access";
import api from "../../services/api";

interface IInviteTypes {
  id: string;
  name: string;
}

interface IInvites {
  id: string;
  guest: string;
  uses: string;
  uses_limit: string;
  inviteType: IInviteTypes;
  finished: boolean;
}

interface IIsCloseToBottomParams {
  layoutMeasurement: NativeScrollSize;
  contentOffset: NativeScrollPoint;
  contentSize: NativeScrollSize;
  paddingBottom: number;
}

const Invites: React.FC = () => {
  const navigation = useNavigation();
  const { selected } = useAccess();
  const [loading, setLoading] = useState(true);
  const [invites, setInvites] = useState<IInvites[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handleScroll = ({
    nativeEvent,
  }: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { layoutMeasurement, contentSize, contentOffset } = nativeEvent;
    if (
      isCloseToBottom({
        layoutMeasurement,
        contentSize,
        contentOffset,
        paddingBottom: 0,
      })
    ) {
      handleNextPage();
    }
  };

  const isCloseToBottom = ({
    contentOffset,
    layoutMeasurement,
    contentSize,
    paddingBottom,
  }: IIsCloseToBottomParams) => {
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingBottom
    );
  };

  const handleNextPage = () => {
    if (totalPages > page) {
      setPage((oldPage) => oldPage + 1);
    }
  };

  async function handleDelete(id: string) {
    const deleteInvite = invites.find((invite) => invite.id === id);

    await api.delete(`/accesses/${selected?.id}/invites/${deleteInvite?.id}`);

    setInvites((oldInvite) => oldInvite.filter((invite) => invite.id !== id));
  }

  useEffect(() => {
    async function getData() {
      setLoading(true);
      if (selected) {
        const response = await api.get(`/accesses/${selected.id}/invites`, {
          params: { page },
        });

        if (!response) return;

        setInvites((oldInvites) => [...oldInvites, ...response.data.data]);

        setTotalPages(response.data.total_pages);
      }
      setLoading(false);
    }

    if (selected) {
      getData();
    }
  }, [selected, page]);

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
        <ScrollView
          showsVerticalScrollIndicator={false}
          onScroll={handleScroll}
        >
          <InviteList>
            {invites.map((invite) => (
              <InviteItem
                invite={invite}
                key={invite.id}
                handleDelete={() => handleDelete(invite.id)}
              />
            ))}
          </InviteList>
        </ScrollView>
        {loading && <ActivityIndicator color="#000" />}
      </Main>
      <AddTag
        onPress={() =>
          navigation.navigate("InvitesStack", {
            screen: "InvitesAdd",
          })
        }
      >
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
