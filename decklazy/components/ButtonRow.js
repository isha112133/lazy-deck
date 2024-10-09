import React from "react";
import { View, Button, StyleSheet } from "react-native";

export default function ButtonRow() {
  return (
    <View style={styles.container}>
      <Button title="Follow Us" onPress={() => {}} />
      <Button title="Home Games" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
  },
});
