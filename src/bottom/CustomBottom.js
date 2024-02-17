import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function CustomBottom() {
  return (
    <View style={{ backgroundColor: "blue", flex: 1, bottom: 20 }}>
      <Text>CustomBottom</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
