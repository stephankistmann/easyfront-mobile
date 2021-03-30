import React from "react";
import { NavigationContainerRef } from "@react-navigation/native";

export const navigationRef = React.createRef<NavigationContainerRef>();

export const navigate = (name: any, params: any) => {
  navigationRef.current?.navigate(name, params);
};
