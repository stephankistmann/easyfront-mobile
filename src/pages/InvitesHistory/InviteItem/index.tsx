import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { useAccess } from "../../../hooks/access";
import api from "../../../services/api";
import {
  Container,
  CreditCardBackground,
  TrashBackground,
  InviteContianer,
  TextContainer,
  Dot,
  LeftContent,
  RightContent,
  UsesContainer,
} from "./styles";

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

const InviteItem: React.FC = () => {
  const { selected } = useAccess();
  const [invites, setInvites] = useState<IInvites[]>([]);
  const [loading, setLoading] = useState(true);

  const superunitId = selected?.superUnit.id;

  async function handleDelete(id: string) {
    const deleteInvite = invites.find((invite) => invite.id === id);

    await api.delete(`/accesses/${selected?.id}/invites/${deleteInvite?.id}`);

    setInvites((oldInvite) => oldInvite.filter((invite) => invite.id !== id));
  }

  useEffect(() => {
    async function getData() {
      setLoading(true);
      if (selected) {
        const response = await api.get(`/accesses/${selected.id}/invites`);

        if (!response) return;

        const filteredInvites = response.data.data.filter(
          (invite: IInvites) => invite.finished === true
        );

        setInvites(filteredInvites);
      }
      setLoading(false);
    }

    getData();
  }, [selected, superunitId]);

  return (
    <Container>
      {invites.map((invite) => (
        <InviteContianer key={invite.id}>
          <LeftContent>
            <CreditCardBackground>
              <Dot />
              <Feather
                name="send"
                size={20}
                color="#fff"
                style={{ position: "absolute", bottom: 10, left: 10 }}
              />
            </CreditCardBackground>
            <TextContainer>
              <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                {invite.guest}
              </Text>
              <Text style={{ fontSize: 12, color: "#aaa" }}>
                {invite.inviteType.name}
              </Text>
            </TextContainer>
          </LeftContent>
          <RightContent>
            <UsesContainer>
              <Text style={{ fontSize: 12, color: "#aaa" }}>
                {invite.uses} / {invite.uses_limit}
              </Text>
            </UsesContainer>
            <TrashBackground onPress={() => handleDelete(invite.id)}>
              <Feather name="trash-2" size={18} color="#0e0e2c" />
            </TrashBackground>
          </RightContent>
        </InviteContianer>
      ))}
    </Container>
  );
};

export default InviteItem;
