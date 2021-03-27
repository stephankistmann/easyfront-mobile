import React, { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { useAccess } from "../../../hooks/access";
import api from "../../../services/api";
import {
  Container,
  CreditCardBackground,
  TrashBackground,
  InviteContainer,
  InviteDescription,
  InviteGuestName,
  InviteTypeName,
  Dot,
  LeftContent,
  RightContent,
  UsesContainer,
  UsesText,
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
          params: { finished: true },
        });

        if (!response) return;

        setInvites(response.data.data);
      }
      setLoading(false);
    };

    getData();
  }, [selected, superunitId]);

  return (
    <Container>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <>
          {invites.map((invite: IInvites) => (
            <InviteContainer key={invite.id}>
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
                <InviteDescription>
                  <InviteGuestName>{invite.guest}</InviteGuestName>
                  <InviteTypeName>{invite.inviteType.name}</InviteTypeName>
                </InviteDescription>
              </LeftContent>
              <RightContent>
                <UsesContainer>
                  <UsesText>
                    {invite.uses} / {invite.uses_limit}
                  </UsesText>
                </UsesContainer>
                <TrashBackground onPress={() => handleDelete(invite.id)}>
                  <Feather name="trash-2" size={18} color="#0e0e2c" />
                </TrashBackground>
              </RightContent>
            </InviteContainer>
          ))}
        </>
      )}
    </Container>
  );
};

export default InviteItem;
