import { View, Text , TextInput } from "react-native";
import React from "react";
import {  COLORS, FONTS, SHADOWS, SIZES  ,assets } from "../constants";

export default function HomeHeader() {
  return (
    <View
      style={{
   
      backgroundColor: COLORS.primary,
        padding: SIZES.font,

 
      }}
    >


      <View
      
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          
        
      >

      </View>
      <Text>HomeHeader</Text>
    </View>
  );
}
