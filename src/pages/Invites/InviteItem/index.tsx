import React from "react";
import { Text } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import {
  Container,
  CreditCardBackground,
  TrashBackground,
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

interface IInviteItemProps {
  invite: IInvites;
  handleDelete: (id: string) => void;
}

const InviteItem: React.FC<IInviteItemProps> = ({ invite, handleDelete }) => {
  return (
    <Container>
      <LeftContent>
        <CreditCardBackground>
          <Dot hasUses={!!invite.uses} />
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
          <Text style={{ fontSize: 12 }}>
            {invite.uses} / {invite.uses_limit}
          </Text>
        </UsesContainer>
        <TrashBackground onPress={() => handleDelete(invite.id)}>
          <Feather name="trash-2" size={18} color="#0e0e2c" />
        </TrashBackground>
      </RightContent>
    </Container>
  );
};

export default InviteItem;
