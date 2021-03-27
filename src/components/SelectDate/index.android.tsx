import React, { useEffect, useState } from "react";
import { Platform } from "react-native";
import { Container, ShowDatePickerButton, ShowDatePickerText } from "./styles";
import DateTimePicker from "@react-native-community/datetimepicker";
import Feather from "react-native-vector-icons/Feather";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface ISelectDate {
  value: Date;
  onChange: (obj: any) => void;
}

const SelectDateAndroid: React.FC<ISelectDate> = ({ value, onChange }) => {
  const [date, setDate] = useState(value);
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

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
    <Container>
      <Container>
        <ShowDatePickerButton onPress={showDatepicker}>
          <Feather name="calendar" size={18} />
          <ShowDatePickerText>{formattedDate}</ShowDatePickerText>
        </ShowDatePickerButton>
      </Container>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          is24Hour={true}
          display="default"
          onChange={() => onChangeData}
          mode={mode}
        />
      )}
    </Container>
  );
};

export default SelectDateAndroid;
