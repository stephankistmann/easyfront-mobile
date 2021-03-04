import React, { useCallback } from "react";
import { Picker } from "@react-native-community/picker";

interface ISuperUnit {
  id: string;
  name: string;
}
interface IUnit {
  id: string;
  name: string;
}

interface IOption {
  unit?: IUnit;
  superUnit?: ISuperUnit;
  id: string;
  label?: string;
  value?: string;
}

interface SelectProps {
  value: string;
  options: IOption[];
  onChange: (data: string) => void;
}

const Select: React.FC<SelectProps> = ({ value, options, onChange }) => {
  const handleChange = useCallback((value, index) => {
    onChange(value);
  }, []);

  return (
    <Picker
      onValueChange={handleChange}
      selectedValue={value}
      style={{ width: "100%", opacity: 0 }}
    >
      {options &&
        options.map((option) => (
          <Picker.Item
            key={option.id}
            value={option.id}
            label={option.label || (option.unit.name && option.unit.name)}
          ></Picker.Item>
        ))}
    </Picker>
  );
};

export default Select;
