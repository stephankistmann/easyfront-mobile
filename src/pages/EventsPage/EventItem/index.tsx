import React from "react";
import Feather from "react-native-vector-icons/Feather";
import {
  Container,
  IconBackground,
  PhotoIconBackground,
  EventContainer,
  NameContainer,
  NameText,
  DateText,
  Arrow,
  LeftContent,
  RightContent,
} from "./styles";

interface IDevice {
  id: string;
  name: string;
}

interface IEvents {
  id: string;
  direction: string;
  date: Date;
  image: string;
  device: IDevice;
}

const EventItem: React.FC<IEvents> = ({
  id,
  direction,
  date,
  image,
  device,
}) => {
  return (
    <Container>
      <EventContainer>
        <LeftContent>
          <IconBackground>
            <Arrow hasDirection={direction}>
              {direction === "in" ? (
                <Feather name="arrow-down-right" size={12} color="#82d888" />
              ) : (
                <Feather name="arrow-up-left" size={12} color="#fc6666" />
              )}
            </Arrow>
            <Feather
              name="send"
              size={20}
              color="#fff"
              style={{ position: "absolute", bottom: 10, left: 10 }}
            />
          </IconBackground>
          <NameContainer>
            <NameText>{device.name}</NameText>
            <DateText>{date}</DateText>
          </NameContainer>
        </LeftContent>
        <RightContent>
          <PhotoIconBackground onPress={() => console.log(id)}>
            <Feather name="camera" size={18} color="#0e0e2c" />
          </PhotoIconBackground>
        </RightContent>
      </EventContainer>
    </Container>
  );
};

export default EventItem;
