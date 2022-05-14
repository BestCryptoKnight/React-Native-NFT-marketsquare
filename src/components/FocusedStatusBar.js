import { View, Text } from "react-native";
import React from "react";
import { StatusBar } from "react-native";
import { useIsFocused } from "@react-navigation/core";

export default function FocusedStatusBar({ background }) {
  const isFocused = useIsFocused();

 return isFocused ? <StatusBar animated={true} backgroundColor={background} /> : null;
}
