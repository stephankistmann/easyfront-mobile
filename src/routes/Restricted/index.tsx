import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SideMenu from "../../components/SideMenu";
import Home from "../../pages/Home";
import Teste from "../../pages/Teste";
import Invites from "../../pages/Invites";

const Restricted = createDrawerNavigator();

const RestrictedRoutes: React.FC = () => (
  <Restricted.Navigator
    sceneContainerStyle={{
      backgroundColor: "#EAEAEE",
    }}
    initialRouteName="Home"
    drawerContent={(props) => <SideMenu {...props} />}
  >
    <Restricted.Screen name="Home" component={Home} />
    <Restricted.Screen name="Teste" component={Teste} />
    <Restricted.Screen name="Invites" component={Invites} />
  </Restricted.Navigator>
);

export default RestrictedRoutes;
