import React from "react";
import { TextInputProps } from "react-native";
import { Container, TextInput } from "./styles";

interface IInputProps extends TextInputProps {
  name: string;
  placeholder: string;
}

const InputTouchableOpacity: React.FC<IInputProps> = ({
  placeholder,
  name,
  ...restProps
}) => {
  return (
    <Container>
      <TextInput placeholder={placeholder} {...restProps} />
    </Container>
  );
};

export default InputTouchableOpacity;
