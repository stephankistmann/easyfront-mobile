import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Routes from "./src/routes/index.routes";
import AppLoading from "expo-app-loading";
import AppProvider from "./src/hooks";
import {
  Quicksand_400Regular,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
  useFonts,
} from "@expo-google-fonts/quicksand";

const App: React.FC = () => {
  let [fontsLoaded] = useFonts({
    Quicksand_400Regular,
    Quicksand_600SemiBold,
    Quicksand_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <StatusBar hidden />
        <AppProvider>
          <Routes />
        </AppProvider>
      </>
    );
  }
};

export default App;
