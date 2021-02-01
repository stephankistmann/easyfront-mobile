import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import api from "../../../services/api";
import {
  Container,
  CreditCardBackground,
  TrashBackground,
  InviteContianer,
} from "./styles";

interface ITags {
  id: string;
  serial: string;
}

const TagItem: React.FC = () => {
  const [tags, setTags] = useState<ITags[]>([]);
  const [loading, setLoading] = useState(true);

  async function handleDelete(id: string) {
    const deleteTag = tags.find((tag) => tag.id === id);

    await api.delete(`/tags/${deleteTag?.id}`);

    setTags((oldTag) => oldTag.filter((tag) => tag.id !== id));
  }

  useEffect(() => {
    async function getData() {
      setLoading(true);

      const response = await api.get(`/tags`);

      if (!response) return;

      setTags(response.data.data);

      setLoading(false);
    }

    getData();
  }, [tags]);

  return (
    <Container>
      {tags.map((tag) => (
        <InviteContianer key={tag.id}>
          <CreditCardBackground>
            <Feather name="credit-card" size={24} color="#fff" />
          </CreditCardBackground>
          <Text style={{ fontSize: 12 }}>{tag.serial}</Text>
          <TrashBackground onPress={() => handleDelete(tag.id)}>
            <Feather name="trash-2" size={18} color="#0e0e2c" />
          </TrashBackground>
        </InviteContianer>
      ))}
    </Container>
  );
};

export default TagItem;
