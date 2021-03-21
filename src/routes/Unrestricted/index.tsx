import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SignIn from "../../pages/SignIn";
import ForgotPassword from "../../pages/ForgotPassword";

const Unrestricted = createStackNavigator();

const UnrestrictedRoutes: React.FC = () => (
  <Unrestricted.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="SignIn"
  >
    <Unrestricted.Screen name="SignIn" component={SignIn} />
    <Unrestricted.Screen name="ForgotPassword" component={ForgotPassword} />
  </Unrestricted.Navigator>
);

export default UnrestrictedRoutes;
