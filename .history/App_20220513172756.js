import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
// In App.js in a new project

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/pages/home";

const Stack = createNativeStackNavigator();

const theme
  = {
defaultTheme ,
  colors: {
    primary: "#00a680",
    secondary: "#f5f5f5",
    tertiary: "#f5f5f5",
    quaternary: "#f5f5f5",
    quinary: "#f5f5f5",
    senary: "#f5f5f5",
    septenary: "#f5f5f5",
    octonary: "#f5f5f5",
    nonary: "#f5f5f5",
    denary: "#f5f5f5",
  }

}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
