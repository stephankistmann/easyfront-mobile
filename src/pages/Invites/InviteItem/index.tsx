import React from "react";
import Feather from "react-native-vector-icons/Feather";
import {
  Container,
  SendIconBackground,
  TrashBackground,
  InviteDescription,
  InviteGuestText,
  InviteTypeText,
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

interface IInviteItemProps {
  invite: IInvites;
  handleDelete: (id: string) => void;
}

const InviteItem: React.FC<IInviteItemProps> = ({ invite, handleDelete }) => {
  return (
    <Container>
      <LeftContent>
        <SendIconBackground>
          <Dot hasUses={!!invite.uses} />
          <Feather
            name="send"
            size={20}
            color="#fff"
            style={{ position: "absolute", bottom: 10, left: 10 }}
          />
        </SendIconBackground>
        <InviteDescription>
          <InviteGuestText>{invite.guest}</InviteGuestText>
          <InviteTypeText>{invite.inviteType.name}</InviteTypeText>
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
    </Container>
  );
};

export default InviteItem;
