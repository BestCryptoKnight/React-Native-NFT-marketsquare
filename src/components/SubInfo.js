import { View, Text, Image } from "react-native";
import React from "react";
import { SIZES, COLORS, SHADOWS, assets, FONTS } from "../constants";

export function NFTTitle({ title, subtitle, titleSize, subtitleSize }) {
  return (
    <View style={{}}>
      <Text
        style={{
          fontSize: titleSize,
          fontFamily: FONTS.semiBold,
          color: COLORS.primary,
        }}
      >
        {title}
      </Text>

      <Text
        style={{
          fontSize: subtitleSize,
          fontFamily: FONTS.regular,
          color: COLORS.primary,
        }}
      >
        {subtitle}
      </Text>
    </View>
  );
}

export function EthPrice({ price }) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Image
        source={assets.eth}
        resizeMode="contain"
        style={{ width: 20, height: 20, marginRight: 2 }}
      />

      <Text
        style={{
          fontSize: SIZES.font,
          fontFamily: FONTS.medium,
          color: COLORS.primary,
        }}
      >
        {price}
      </Text>
    </View>
  );
}

export function ImageCmp({ index, imgUrl }) {
  return (
    <Image
      source={imgUrl}
      resizeMode="contain"
      style={{
        width: 48,
        height: 48,
        marginLeft: index === 0 ? 0 : -SIZES.font,
      }}
    ></Image>
  );
}

export function People() {
  return (
    <View
      style={{
        flexDirection: "row",
      }}
    >
      {[assets.person02, assets.person03, assets.person04].map(
        (imgUrl, index) => {
          return (
            <ImageCmp imgUrl={imgUrl} index={index} key={`People-${index}`} />
          );
        }
      )}
    </View>
  );
}

export function EndDate() {
  return (
    <View
      style={{
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.base,
        backgroundColor: COLORS.white,
        justifyContent: "center",
        alignItems: "center",
        elevation: 1,
        maxWidth: "50%",
        ...SHADOWS.light,
      }}
    >
      <Text
        style={{
          fontSize: SIZES.small,
          fontFamily: FONTS.regular,
          color: COLORS.primary,
        }}
      >
        Ending in
      </Text>

      <Text
        style={{
          fontSize: SIZES.medium,
          fontFamily: FONTS.semiBold,
          color: COLORS.primary,
        }}
      >
        12 days
      </Text>
    </View>
  );
}

export function SubInfo() {
  return (
    <View
      style={{
        width: "100%",
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <People />
      <EndDate />
    </View>
  );
}
