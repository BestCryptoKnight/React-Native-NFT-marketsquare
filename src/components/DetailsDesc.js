import { View, Text } from "react-native";
import React from "react";
import { useState } from "react";
import { COLORS, assets, SIZES, SHADOWS, FONTS } from "../constants";
import { NFTTitle, EthPrice } from "./SubInfo";
export default function DetailsDesc({ data }) {
  const [desc, setDesc] = useState(data.description.slice(0, 100));
  const [readMore, setreadMore] = useState(false);
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          padding: SIZES.font,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <NFTTitle
          title={data.name}
          subtitle={data.creator}
          titleSize={SIZES.extraLarge}
          subtitleSize={SIZES.font}
        />
        <EthPrice price={data.price} />
      </View>

      <View
        style={{
          marginVertical: SIZES.extraLarge * 1.5,
          padding: SIZES.font,
        }}
      >
        <Text
          style={{
            fontSize: SIZES.font,
            fontFamily: FONTS.semiBold,
            color: COLORS.primary,
          }}
        >
          Description
        </Text>

        <View
          style={{
            marginTop: SIZES.base,
          }}
        >
          <Text
            style={{
              fontSize: SIZES.small,
              fontFamily: FONTS.semiBold,
              color: COLORS.secondary,
              lineHeight: SIZES.large,
            }}
          >
            {desc}
            {!readMore && "....."}

            <Text
              style={{
                fontSize: SIZES.small,
                fontFamily: FONTS.semiBold,
                color: COLORS.primary,
              }}
              onPress={() => {
                setreadMore(!readMore);
                if (!readMore) {
                  setDesc(data.description);
                  setreadMore(true);
                } else {
                  setDesc(data.description.slice(0, 100));
                  setreadMore(false);
                }
              }}
            >
              {readMore ? "see less" : "see more"}
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
}
