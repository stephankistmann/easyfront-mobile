import React, { useCallback } from "react";

import { Container, WeekDay, WeekDayText } from "./styles";

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

interface IProps {
  allowedDays: boolean[];
  value: boolean[];
  onChange: (value: boolean[]) => void;
}

const SelectWeekDays: React.FC<IProps> = ({ allowedDays, onChange, value }) => {
  const handleClick = useCallback(
    (index: number) => {
      if (allowedDays[index]) {
        const newValue = [...value];
        newValue[index] = !newValue[index];
        onChange(newValue);
      }
    },
    [value]
  );

  return (
    <Container>
      {weekDays.map((weekDay, index) => (
        <WeekDay
          key={weekDay + index}
          allowed={!!allowedDays[index]}
          selected={!!value[index]}
          onPress={() => handleClick(index)}
        >
          <WeekDayText selected={!!value[index]}>{weekDay}</WeekDayText>
        </WeekDay>
      ))}
    </Container>
  );
};

export default SelectWeekDays;
