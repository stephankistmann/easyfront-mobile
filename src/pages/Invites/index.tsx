import React, { useEffect, useState } from "react";
import {
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
  TitleContainer,
  TitleText,
  Main,
  MainHeader,
  Line,
  InviteList,
  AddInvite,
  AddInviteText,
  AddInvitePlusIconContainer,
  History,
  HistoryText,
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
  const [isFocused, setIsFocused] = useState(false);

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

  const handleDelete = async (id: string) => {
    const deleteInvite = invites.find((invite) => invite.id === id);

    await api.delete(`/accesses/${selected?.id}/invites/${deleteInvite?.id}`);

    setInvites((oldInvite) => oldInvite.filter((invite) => invite.id !== id));
  };

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      if (selected) {
        const response = await api.get(`/accesses/${selected.id}/invites`, {
          params: { page },
        });

        if (!response) return;

        if (page === 1) {
          setInvites(response.data.data);
        } else {
          setInvites((oldInvites) => [...oldInvites, ...response.data.data]);
        }

        setTotalPages(response.data.total_pages);
        setLoading(false);
      }
    };

    if (selected) {
      getData();
    }
  }, [selected, page, isFocused]);

  useEffect(() => {
    const handleFocus = () => {
      setPage(1);
      setIsFocused(true);
    };

    const handleBlur = () => {
      setIsFocused(false);
    };

    navigation.addListener("focus", handleFocus);

    navigation.addListener("blur", handleBlur);
  }, [navigation]);

  return (
    <Container>
      <Header />
      <Main>
        <MainHeader>
          <TitleContainer>
            <Feather
              name="send"
              color="#F66253"
              size={24}
              style={{ marginRight: 8 }}
            />
            <TitleText>Meus Convites</TitleText>

            <TouchableOpacity>
              <Feather name="info" size={14} style={{ marginTop: 2 }} />
            </TouchableOpacity>
          </TitleContainer>
          <History onPress={() => navigation.navigate("InvitesHistory")}>
            <HistoryText>Histórico</HistoryText>
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
        {loading && <ActivityIndicator color="#ccc" />}
      </Main>
      <AddInvite
        onPress={() =>
          navigation.navigate("InvitesStack", {
            screen: "InvitesAdd",
          })
        }
      >
        <AddInviteText>Criar um novo convite</AddInviteText>
        <AddInvitePlusIconContainer>
          <Feather name="plus" size={30} color="#fff" />
        </AddInvitePlusIconContainer>
      </AddInvite>
    </Container>
  );
};

export default Invites;
