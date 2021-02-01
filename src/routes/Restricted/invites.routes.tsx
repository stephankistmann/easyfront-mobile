import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Invites from "../../pages/Invites";
import InvitesHistory from "../../pages/InvitesHistory";

const StackNav = createStackNavigator();

const InvitesStack: React.FC = () => {
  return (
    <StackNav.Navigator
      initialRouteName="Invites"
      screenOptions={{
        headerShown: false,
      }}
    >
      <StackNav.Screen name="Invites" component={Invites} />
      <StackNav.Screen name="InvitesHistory" component={InvitesHistory} />
    </StackNav.Navigator>
  );
};

export default InvitesStack;
