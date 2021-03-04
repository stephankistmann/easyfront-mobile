import React, { useCallback, useState } from "react";
import { TextInputProps } from "react-native";
import { maskCpf, maskPhone } from "../../utils/masks";
import { Container, TextInput, Icon } from "./styles";

interface IInputProps extends TextInputProps {
  icon?: string;
  name: string;
  placeholder: string;
  mask?: "cpf" | "phone";
  inputMaskChange?: any;
  isCustom?: boolean;
}

const Input: React.FC<IInputProps> = ({
  icon,
  placeholder,
  mask,
  inputMaskChange,
  name,
  isCustom,
  ...restProps
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  function handleChange(text: string) {
    if (mask === "cpf") {
      const value = maskCpf(text);
      inputMaskChange(value);
    } else if (mask === "phone") {
      const value = maskPhone(text);
      inputMaskChange(value);
    }
  }

  return (
    <Container isFocused={isFocused} isCustom={isCustom}>
      <Icon name={icon} size={20} color={isFocused ? "#69aaf5" : "#666360"} />
      <TextInput
        isCustom={isCustom}
        onFocus={handleInputFocus}
        placeholder={placeholder}
        onChangeText={(text: string) => handleChange(text)}
        {...restProps}
      />
    </Container>
  );
};

export default Input;
