import React from "react";
import { convertPercentageDate } from "../helpers";

import { Container, Text } from "./styles";

interface IProps {
  value: string;
  min: string;
  max: string;
}

const Label: React.FC<IProps> = ({ value, min, max }) => {
  const text = convertPercentageDate({ text: value, min, max });
  return (
    <Container>
      <Text>{text}</Text>
    </Container>
  );
};

export default Label;
