import React, { useEffect, useState } from "react";
import { Platform } from "react-native";
import { ContainerIOS, DateTimePickerIOS } from "./styles";
import Feather from "react-native-vector-icons/Feather";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface ISelectDate {
  value: Date;
  onChange: (obj: any) => void;
}

const SelectDateIOS: React.FC<ISelectDate> = ({ value, onChange }) => {
  const [date, setDate] = useState(value);
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(true);

  const formattedDate = format(date, "'Dia' dd 'de' MMMM'", {
    locale: ptBR,
  });

  const onChangeData = (event: any, selectedDate: Date) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  useEffect(() => {
    onChange(date);
  }, [date]);

  const showMode = (currentMode: string) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  return (
    <ContainerIOS>
      <Feather name="calendar" size={18} />

      {show && (
        <DateTimePickerIOS
          testID="dateTimePicker"
          value={date}
          is24Hour={true}
          display="default"
          onChange={() => onChangeData}
          mode={mode}
        />
      )}
    </ContainerIOS>
  );
};

export default SelectDateIOS;
