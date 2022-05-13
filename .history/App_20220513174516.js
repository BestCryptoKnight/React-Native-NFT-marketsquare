import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
// In App.js in a new project

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/pages/home";
import DetailsScreen from "./src/pages/details";

const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
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
  },
};

export default function App() {


  const [fontsLoaded] = useFonts({
    InterBold: require('./assets/fonts/Inter-Bold.ttf'),
    InterRegular: require('./assets/fonts/Inter-Regular.ttf'),
    InterSemiBold: require('./assets/fonts/Inter-SemiBold.ttf'),
    InterLight: require('./assets/fonts/Inter-Light.ttf'),
    InterMedium: require('./assets/fonts/Inter-Medium.ttf'),

    
  });


  if (!fontsLoaded) {
    return <AppLoading />;
    
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
