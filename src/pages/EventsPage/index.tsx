import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  NativeScrollEvent,
  NativeSyntheticEvent,
  NativeScrollSize,
  NativeScrollPoint,
  ActivityIndicator,
} from "react-native";
import Header from "../../components/Header";
import Feather from "react-native-vector-icons/Feather";
import { ScrollView } from "react-native-gesture-handler";
import EventItem from "./EventItem";
import { Container, Main, MainHeader, Line, EventList } from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import api from "../../services/api";
import { useAccess } from "../../hooks/access";

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

interface IIsCloseToBottomParams {
  layoutMeasurement: NativeScrollSize;
  contentOffset: NativeScrollPoint;
  contentSize: NativeScrollSize;
  paddingBottom: number;
}

const Events: React.FC = () => {
  const { selected } = useAccess();
  const [events, setEvents] = useState<IEvents[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handleScroll = ({
    nativeEvent,
  }: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { layoutMeasurement, contentSize, contentOffset } = nativeEvent;
    if (
      isCloseToBottom({
        layoutMeasurement,
        contentSize,
        contentOffset,
        paddingBottom: 0,
      })
    ) {
      handleNextPage();
    }
  };

  const isCloseToBottom = ({
    contentOffset,
    layoutMeasurement,
    contentSize,
    paddingBottom,
  }: IIsCloseToBottomParams) => {
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingBottom
    );
  };

  const handleNextPage = () => {
    if (totalPages > page) {
      setPage((oldPage) => oldPage + 1);
    }
  };

  useEffect(() => {
    async function getData() {
      setLoading(true);

      const response = await api.get(`/devices/events`, {
        params: { page },
      });

      if (!response) return;

      setEvents((oldEvents) => [...oldEvents, ...response.data.data]);

      setTotalPages(response.data.total_pages);
      setLoading(false);
    }

    if (selected) {
      getData();
    }
  }, [selected, page]);

  return (
    <Container>
      <Header />
      <Main>
        <MainHeader>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Feather
              name="bell"
              color="#F66253"
              size={24}
              style={{ marginRight: 8 }}
            />
            <Text style={{ fontWeight: "bold", marginRight: 8 }}>Eventos</Text>

            <TouchableOpacity>
              <Feather name="info" size={14} style={{ marginTop: 2 }} />
            </TouchableOpacity>
          </View>
        </MainHeader>
        <Line />
        <ScrollView
          showsVerticalScrollIndicator={false}
          onScroll={handleScroll}
        >
          <EventList>
            {events.map((event) => (
              <EventItem
                date={event.date}
                device={event.device}
                direction={event.direction}
                id={event.id}
                image={event.image}
                key={event.id}
              />
            ))}
          </EventList>
        </ScrollView>
        {loading && <ActivityIndicator color="#000" />}
      </Main>
    </Container>
  );
};

export default Events;
