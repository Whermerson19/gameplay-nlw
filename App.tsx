import "react-native-gesture-handler";

import React from "react";
import { StatusBar } from "react-native";

import { ThemeProvider } from "styled-components";

import AppLoading from "expo-app-loading";

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from "@expo-google-fonts/inter";

import {
  Rajdhani_400Regular,
  Rajdhani_700Bold,
} from "@expo-google-fonts/rajdhani";

import { AuthProvider } from "./src/hooks/auth";

import theme from "./src/global/theme";

import { Background } from "./src/components/Background";
import { Routes } from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_400Regular,
    Rajdhani_700Bold,
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <ThemeProvider theme={theme}>
      <Background>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent={true}
        />
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </Background>
    </ThemeProvider>
  );
}
