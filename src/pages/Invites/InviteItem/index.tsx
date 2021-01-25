import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { useSuperunit } from "../../../hooks/superunit";
import api from "../../../services/api";
import {
  Container,
  CreditCardBackground,
  TrashBackground,
  InviteContianer,
} from "./styles";

interface IInvites {
  id: string;
}

const InviteItem: React.FC = () => {
  const { selected } = useSuperunit();
  const [invites, setInvites] = useState<IInvites[]>([]);
  const [loading, setLoading] = useState(true);

  const superunitId = selected?.id;

  async function handleDelete(id: string) {
    const deleteInvite = invites.find((category) => category.id === id);

    await api.delete(
      `/superunities/${selected?.id}/invites/types/${deleteInvite?.id}`
    );

    setInvites((oldInvite) => oldInvite.filter((invite) => invite.id !== id));
  }

  useEffect(() => {
    async function getData() {
      setLoading(true);
      if (selected) {
        const response = await api.get(
          `/superunities/${superunitId}/invites/types`
        );

        if (!response) return;

        setInvites(response.data.data);
      }
      setLoading(false);
    }

    getData();
  }, [selected, superunitId]);

  return (
    <Container>
      {invites.map((invite) => (
        <InviteContianer key={invite.id}>
          <CreditCardBackground>
            <Feather name="credit-card" size={24} color="#fff" />
          </CreditCardBackground>
          <Text style={{ fontSize: 12 }}>{invite.id}</Text>
          <TrashBackground onPress={() => handleDelete(invite.id)}>
            <Feather name="trash-2" size={18} color="#0e0e2c" />
          </TrashBackground>
        </InviteContianer>
      ))}
    </Container>
  );
};

export default InviteItem;
