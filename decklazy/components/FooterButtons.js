import React from "react";
import { View, Button, StyleSheet } from "react-native";

export default function FooterButtons() {
  return (
    <View style={styles.container}>
      <Button title="Footer Button 1" onPress={() => {}} />
      <Button title="Footer Button 2" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
    marginTop: 20,
  },
});
