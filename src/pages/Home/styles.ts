import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

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

export const MessageContainerTextBold = styled.Text`
  font-weight: bold;
`;

export const MessageContainerText = styled.Text`
  color: #383850;
  opacity: 46;
`;

export const User = styled.Text`
  color: #383850;
  opacity: 46;
`;

export const ShortCutsText = styled.Text`
  font-weight: bold;
  margin-bottom: 16px;
`;

export const ShortCutsContainer = styled.View`
  height: 23%;
  position: relative;
`;

export const ShortCutsContainerText = styled.Text`
  font-size: 12px;
  color: #383850;
  font-weight: bold;
`;

export const ShortCut = styled(RectButton)`
  margin-left: 8px;
  min-width: 40%;
  background: #dedede;
  border-radius: 16px;
  align-items: center;
  padding: 24px;
`;

export const ShortCutIconBg = styled.View`
  background: #fa7163;
  height: 64px;
  width: 64px;
  margin-bottom: 12px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

export const ScrollViewContainer = styled.View`
  position: absolute;
  width: ${width}px;
  top: 0;
  left: -14px;
`;
