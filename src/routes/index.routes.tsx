import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "../../RootNavigation";
import RestrictedRoutes from "./Restricted";
import UnrestrictedRoutes from "./Unrestricted";
import { useAuth } from "../hooks/auth";

const Routes: React.FC = () => {
  const { user } = useAuth();

  return (
    <NavigationContainer ref={navigationRef}>
      {user ? <RestrictedRoutes /> : <UnrestrictedRoutes />}
    </NavigationContainer>
  );
};

export default Routes;
