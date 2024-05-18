import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import ListProvider from "./src/contexts/lista";

import Routes from "./src/routes";

export default function App() {
  return (
    <ListProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </SafeAreaView>
    </ListProvider>
  );
}
