import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.View`
  flex: 1;
`;

export const Main = styled.View`
  flex: 1;
  padding: 16px;
`;

export const TopContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const MessageContainer = styled.View`
  justify-content: space-between;
  background: #dedede;
  border-radius: 8px;
  padding: 8px;
`;

export const User = styled.Text`
  color: #383850;
  opacity: 46;
`;

export const ShortcutsContainer = styled.View`
  height: 23%;
  padding: 16px;
  justify-content: space-between;
`;

export const InvitesContainer = styled.View`
  flex-direction: row;
`;

export const Invites = styled(RectButton)`
  height: 80px;
  margin-right: 8px;
  width: 40%;
  background: #dedede;
  border-radius: 8px;
`;

export const InviteIconBg = styled.View`
  background: #383850;
  height: 32px;
  width: 32px;
  margin: 8px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;
