import React from "react";
import { View, Text } from "react-native";
import Header from "../../components/Header";
import Feather from "react-native-vector-icons/Feather";
import { ScrollView } from "react-native-gesture-handler";
import DeviceItem from "./DeviceItem";
import { Container, Main, MainHeader, Line, DeviceList } from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";

const Devices: React.FC = () => {
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
              style={{ marginRight: 8, marginLeft: 8 }}
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
        <ScrollView>
          <DeviceList>
            <DeviceItem />
          </DeviceList>
        </ScrollView>
      </Main>
    </Container>
  );
};

export default Devices;
