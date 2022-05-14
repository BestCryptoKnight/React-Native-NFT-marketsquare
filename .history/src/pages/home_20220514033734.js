import { View, Text, FlatList, SafeAreaView } from "react-native";
import React from "react";
import { useState } from "react";
import { COLORS, NFTData } from "../constants";
import { NFTCard, HomeHeader, FocusedStatusBar } from "../components";
const Home = () => {

  const OnSearch = () => {
    console.log("Search");
  }

  const [data, setData] = useState(NFTData);

  const handleSearch = (value) => {
    if (!value.length === 0) {
      return setData(NFTData);


    }
    else {

      const filteredData = NFTData.filter(item => {
        return item.title.toLowerCase().includes(value.toLowerCase());
      }
      );

    }
  }


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary} />

      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <FlatList
            data={NFTData}
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id}
            style={{ marginTop: 20 }}
            ListHeaderComponent={<HomeHeader />}
            showsVerticalScrollIndicator={false}
          />
        </View>

        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <View style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
