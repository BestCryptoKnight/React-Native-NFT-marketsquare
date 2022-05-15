import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { COLORS, FONTS, SHADOWS, SIZES } from "../constants";

export function CircleButton({ imgUrl, handlePress, ...props }) {
  // function to determine if number is even or odd
  const isEven = (num) => num % 2 === 0;

  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        borderRadius: SIZES.extraLarge,
        backgroundColor: COLORS.white,
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.light,
        ...props,
      }}
      onPress={handlePress}
    >
      <Image
        source={imgUrl}
        resizeMethod="scale"
        style={{ width: 20, height: 20 }}
      />
    </TouchableOpacity>
  );
}

export function RectButton({ minWidth, fontSize, handlePress, ...props }) {
  return (
    <TouchableOpacity
      style={{
        borderRadius: SIZES.extraLarge,
        backgroundColor: COLORS.primary,

        minWidth: minWidth,
        padding: SIZES.small,
        ...props,
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          fontSize: fontSize,
          fontFamily: FONTS.medium,
          color: COLORS.white,
          Tex: "center",
        }}
      >
        Place a bid
      </Text>
    </TouchableOpacity>
  );
}
