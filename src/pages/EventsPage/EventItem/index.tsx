import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import api from "../../../services/api";
import {
  Container,
  IconBackground,
  PhotoIconBackground,
  EventContainer,
  TextContainer,
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

const EventItem: React.FC = () => {
  const [events, setEvents] = useState<IEvents[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      setLoading(true);

      const response = await api.get(`/devices/events`);

      setEvents(response.data.data);

      setLoading(false);
    }

    getData();

    console.log(events, "useEffect");
  }, []);

  return (
    <Container>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <>
          {events &&
            events.map((event) => (
              <EventContainer key={event.id}>
                <LeftContent>
                  <IconBackground>
                    <Arrow hasDirection={event.direction}>
                      {event.direction === "in" ? (
                        <Feather
                          name="arrow-down-right"
                          size={12}
                          color="#82d888"
                        />
                      ) : (
                        <Feather
                          name="arrow-up-left"
                          size={12}
                          color="#fc6666"
                        />
                      )}
                    </Arrow>
                    <Feather
                      name="send"
                      size={20}
                      color="#fff"
                      style={{ position: "absolute", bottom: 10, left: 10 }}
                    />
                  </IconBackground>
                  <TextContainer>
                    <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                      {event.device.name}
                    </Text>
                    <Text style={{ fontSize: 12, color: "#aaa" }}>
                      {event.date}
                    </Text>
                  </TextContainer>
                </LeftContent>
                <RightContent>
                  <PhotoIconBackground onPress={() => console.log(event.id)}>
                    <Feather name="camera" size={18} color="#0e0e2c" />
                  </PhotoIconBackground>
                </RightContent>
              </EventContainer>
            ))}
        </>
      )}
    </Container>
  );
};

export default EventItem;
