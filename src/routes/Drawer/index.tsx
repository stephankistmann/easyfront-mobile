import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../../pages/Home";
import Icon from "react-native-vector-icons/Feather";
import SideMenu from "../../components/SideMenu";

const DrawerNav = createDrawerNavigator();

const Drawer: React.FC = () => (
  <DrawerNav.Navigator
    sceneContainerStyle={{
      backgroundColor: "#EAEAEE",
    }}
    initialRouteName="Home"
    drawerContent={() => SideMenu}
  >
    <DrawerNav.Screen
      name="Home"
      component={Home}
      options={{
        drawerIcon: () => (
          <Icon name="home" style={{ fontSize: 22, color: "black" }} />
        ),
      }}
    />
    <DrawerNav.Screen
      name="Convites"
      component={Home}
      options={{
        drawerIcon: () => (
          <Icon name="send" style={{ fontSize: 22, color: "black" }} />
        ),
      }}
    />
    <DrawerNav.Screen
      name="Eventos"
      component={Home}
      options={{
        drawerIcon: () => (
          <Icon name="bell" style={{ fontSize: 22, color: "black" }} />
        ),
      }}
    />
  </DrawerNav.Navigator>
);

export default Drawer;
