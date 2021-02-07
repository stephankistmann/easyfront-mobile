import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SideMenu from "../../components/SideMenu";
import Home from "../../pages/Home";
import InvitesStack from "./invites.routes";
import Tags from "../../pages/Tags";
import Profile from "../../pages/Profile";
import Events from "../../pages/EventsPage";
import Devices from "../../pages/Devices";

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
    <Restricted.Screen name="Profile" component={Profile} />
    <Restricted.Screen name="InvitesStack" component={InvitesStack} />
    <Restricted.Screen name="Tags" component={Tags} />
    <Restricted.Screen name="Events" component={Events} />
    <Restricted.Screen name="Devices" component={Devices} />
  </Restricted.Navigator>
);

export default RestrictedRoutes;
