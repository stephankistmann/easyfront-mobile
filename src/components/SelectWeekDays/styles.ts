import styled, { css } from "styled-components/native";

interface IWeekDays {
  selected: boolean;
  allowed: boolean;
}

interface IWeekDayText {
  selected: boolean;
}

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  background: #f5fbff;
  padding: 8px;
  border-radius: 8px;
`;

export const WeekDay = styled.TouchableOpacity<IWeekDays>`
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
  margin: 0 8px;
  background: #fff;
  border-radius: 16px;
  border-width: 2px;
  border-color: white;
  ${(props) =>
    !props.allowed &&
    css`
      background: transparent;
      border-color: transparent;
    `}
  ${(props) =>
    props.selected &&
    css`
      background: #f66253;
    `}
`;

export const WeekDayText = styled.Text<IWeekDayText>`
  font-size: 12px;
  color: #000;
  ${(props) =>
    props.selected &&
    css`
      font-weight: bold;
      color: #fff;
    `}
`;
