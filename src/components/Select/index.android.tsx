import React, { useCallback } from "react";
import { Picker } from "@react-native-community/picker";

interface IOption {
  value: string;
  label: string;
  id: string;
}

interface SelectProps {
  value: string;
  options: IOption[];
  onChange: (data: string) => void;
}

const Select: React.FC<SelectProps> = ({ value, options, onChange }) => {
  const handleChange = useCallback((value, index) => {
    console.log(value, index);
    onChange(value);
  }, []);

  return (
    <Picker onValueChange={handleChange} selectedValue={value}>
      {options.map((option) => (
        <Picker.Item
          key={option.id}
          value={value}
          label={option.label}
        ></Picker.Item>
      ))}
    </Picker>
  );
};

export default Select;
