import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  Alert,
  NativeSyntheticEvent,
  NativeScrollEvent,
  ActivityIndicator,
  NativeScrollSize,
  NativeScrollPoint,
} from "react-native";
import Header from "../../components/Header";
import Feather from "react-native-vector-icons/Feather";
import { ScrollView } from "react-native-gesture-handler";
import DeviceItem from "./DeviceItem";
import { Container, Main, MainHeader, Line, DeviceList } from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import api from "../../services/api";
import { useAccess } from "../../hooks/access";

interface IDevice {
  id: string;
  name: string;
}

interface IIsCloseToBottomParams {
  layoutMeasurement: NativeScrollSize;
  contentOffset: NativeScrollPoint;
  contentSize: NativeScrollSize;
  paddingBottom: number;
}

const Devices: React.FC = () => {
  const { selected } = useAccess();
  const [devices, setDevices] = useState<IDevice[]>([]);
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
      if (selected) {
        const response = await api.get(`/accesses/${selected.id}/devices`, {
          params: { page },
        });

        if (!response) return;

        setDevices((oldDevices) => [...oldDevices, ...response.data.data]);

        setTotalPages(response.data.total_pages);

        console.log(selected.id);
      }
      setLoading(false);
    }

    getData();
  }, [selected, page]);

  const handleOpenDevice = useCallback(
    async (id: string) => {
      console.log(id, selected?.superUnit_id, selected?.id);

      try {
        await api.post(
          `/superunities/${selected?.superUnit_id}/devices/${id}/open`
        );

        Alert.alert(
          "Dispositivo aberto",
          "O dispositivo foi aberto com sucesso."
        );
      } catch (err) {
        console.log(err);

        Alert.alert(
          "Erro ao abrir dispositivo",
          "Ocorreu um erro ao abrir o dispositivo, tente novamente."
        );

        return;
      }
    },
    [selected]
  );

  return (
    <Container>
      <Header />
      <Main>
        <MainHeader>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Feather
              name="tablet"
              color="#F66253"
              size={24}
              style={{ marginRight: 8 }}
            />
            <Text style={{ fontWeight: "bold", marginRight: 8 }}>
              Dispositivos
            </Text>

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
          <DeviceList>
            {devices.map((device) => (
              <DeviceItem
                handleOpenDevice={() => handleOpenDevice(device.id)}
                id={device.id}
                name={device.name}
                key={device.id + Math.floor(Math.random() * 1000)}
              />
            ))}
          </DeviceList>
        </ScrollView>
        {loading && <ActivityIndicator color="#000" />}
      </Main>
    </Container>
  );
};

export default Devices;
