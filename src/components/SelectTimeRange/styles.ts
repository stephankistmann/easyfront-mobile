import styled from "styled-components/native";
const THUMB_RADIUS = 10;

export const Container = styled.View`
  width: 100%;
`;

export const Thumb = styled.View`
  width: ${THUMB_RADIUS * 2}px;
  height: ${THUMB_RADIUS * 2}px;
  border-radius: ${THUMB_RADIUS}px;
  border-color: #f66253;
  background-color: #f66253;
`;
export const Rail = styled.View`
  flex: 1;
  height: 4px;
  border-radius: 2px;
  background: #cccccf;
`;

export const RailSelected = styled.View`
  height: 4px;
  background-color: #f28778;
  border-radius: 2px;
`;

export const Notch = styled.Text`
  width: 8px;
  height: 8px;
  border-left-color: transparent;
  border-right-color: transparent;
  border-top-color: #f66253;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-width: 8px;
`;
