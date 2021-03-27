import styled from "styled-components/native";
import DateTimePicker from "@react-native-community/datetimepicker";

export const DateTimePickerIOS = styled(DateTimePicker)`
  width: 100%;
  margin-left: 16px;
`;

export const Container = styled.View``;

export const ContainerIOS = styled.View`
  height: 50px;
  border-radius: 8px;
  background: #f5fbff;
  padding: 16px;
  flex-direction: row;
  align-items: center;
`;

export const ShowDatePickerButton = styled.TouchableOpacity`
  height: 50px;
  border-radius: 8px;
  background: #f5fbff;
  padding: 16px;
  flex-direction: row;
`;

export const ShowDatePickerText = styled.Text`
  margin-left: 16px;
  color: #707070;
`;
