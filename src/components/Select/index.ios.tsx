import React, { useCallback, useState } from "react";
import { Picker } from "@react-native-community/picker";
import { Container, Content, Modal, OkText, OkButtonContainer } from "./styles";
import Feather from "react-native-vector-icons/Feather";

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

const SelectIOS: React.FC<SelectProps> = ({ value, options, onChange }) => {
  const handleChange = useCallback((value, index) => {
    onChange(value);
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <Content onPress={() => setIsOpen(!isOpen)}>
        <Feather name="chevron-down" color="#0e0e2c" size={24} />
        <Modal
          visible={isOpen}
          animationType="slide"
          presentationStyle="overFullScreen"
        >
          <Picker
            onValueChange={handleChange}
            selectedValue={value}
            style={{ width: "100%" }}
          >
            {options &&
              options.map((option) => (
                <Picker.Item
                  key={option.id}
                  value={option.id}
                  label={
                    option.label ||
                    option.superUnit?.name + " - " + option.unit?.name
                  }
                ></Picker.Item>
              ))}
          </Picker>
          <OkButtonContainer onPress={() => setIsOpen(!isOpen)}>
            <OkText>Ok</OkText>
          </OkButtonContainer>
        </Modal>
      </Content>
    </Container>
  );
};

export default SelectIOS;
