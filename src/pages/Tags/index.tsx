import React, { useEffect, useState } from "react";
import {
  NativeSyntheticEvent,
  NativeScrollEvent,
  NativeScrollSize,
  NativeScrollPoint,
  ActivityIndicator,
} from "react-native";
import Header from "../../components/Header";
import Feather from "react-native-vector-icons/Feather";
import TagItem from "./TagItem";
import {
  Container,
  Main,
  MainHeader,
  TitleText,
  Line,
  TagList,
  AddTag,
  AddTagText,
  AddTagContainer,
} from "./styles";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import api from "../../services/api";
import { useAccess } from "../../hooks/access";

interface ITags {
  id: string;
  serial: string;
  handleDelete: (id: string) => void;
}

interface IIsCloseToBottomParams {
  layoutMeasurement: NativeScrollSize;
  contentOffset: NativeScrollPoint;
  contentSize: NativeScrollSize;
  paddingBottom: number;
}

const Tags: React.FC = () => {
  const navigation = useNavigation();
  const { selected } = useAccess();
  const [tags, setTags] = useState<ITags[]>([]);
  const [loading, setLoading] = useState(true);
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

  const handleDelete = async (id: string) => {
    const deleteTag = tags.find((tag) => tag.id === id);

    await api.delete(`/tags/${deleteTag?.id}`);

    setTags((oldTag) => oldTag.filter((tag) => tag.id !== id));
  };

  useEffect(() => {
    const getData = async () => {
      setLoading(true);

      const response = await api.get(`/tags`, {
        params: { page },
      });

      if (!response) return;

      setTags((oldTags) => [...oldTags, ...response.data.data]);

      setTotalPages(response.data.total_pages);
      setLoading(false);
    };

    if (selected) {
      getData();
    }
  }, [page, selected]);

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
          <TitleText>Minhas Tags</TitleText>
          <TouchableOpacity>
            <Feather name="info" size={14} style={{ marginTop: 2 }} />
          </TouchableOpacity>
        </MainHeader>
        <Line />
        <ScrollView
          showsVerticalScrollIndicator={false}
          onScroll={handleScroll}
        >
          <TagList>
            {tags.map((tag) => (
              <TagItem
                id={tag.id}
                serial={tag.serial}
                key={tag.id}
                handleDelete={() => handleDelete(tag.id)}
              />
            ))}
          </TagList>
        </ScrollView>
        {loading && <ActivityIndicator color="#ccc" />}
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
