import { View, Text, Image } from "react-native";
import React from "react";
import { COLORS, SIZES, FONTS } from "../constants";
import { EthPrice } from "./SubInfo";
export default function DetailsBid({ bid }) {
  return (
    <View
      style={{
        padding: SIZES.font,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        alignItems: "center",
        marginVertical: SIZES.base,
        paddingHorizontal: SIZES.font ,
      }}
    >
      <Image
        source={bid.image}
        style={{ width: 48, height: 48, borderRadius: 24 }}
        resizeMode="contain"
      />

      <View>
        <Text
          style={{
            fontSize: SIZES.semiBold,
            fontFamily: FONTS.small,
            color: COLORS.primary,
          }}
        >
          bid placed by {bid.name}
          {bid.title}
        </Text>
        <Text
          style={{
            fontSize: SIZES.small - 2,
            fontFamily: FONTS.regular,
            color: COLORS.secondary,
            marginTop: 3,
          }}
        >
          {bid.date}
        </Text>
      </View>
      <View>
        <EthPrice price={bid.price} />
      </View>
    </View>
  );
}
