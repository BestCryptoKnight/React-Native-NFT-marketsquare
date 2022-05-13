import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// In App.js in a new project

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <View style={styles.container}>
      <Text>ing on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

