import {
  View,
  Text,
  SafeAreaView,
  image,
  StatusBar,
  FlatList,
} from "react-native";
import React from "react";
import { COLORS, FONTS, SHADOWS, SIZES, assets } from "../constants";

import {
  FocusedStatusBar,
  SubInfo,
  CircleButton,
  RectButton,
  DetailsBid,
  DetailsDesc,
} from "../components";

export default function Details({ route, navigation }) {
  const { data } = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor={"transparent"}
        translucent={true}
      />

      <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          justifyContent: "center",
          paddingVertical: SIZES.font,

          alignItems: "center",
          zIndex: 1,
        }}
      >
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
      </View>



      <FlatList
        data={data}
        renderItem={({ item }) => (
          <NFTCard
          
    </SafeAreaView>
  );
}
