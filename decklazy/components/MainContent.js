import React from "react";
import { View, Button, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

export default function MainContent() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.headerText}>Never Have I Ever</Text> */}

      {/* Button Row for Play, Multiplayer, How to Play */}
      <View style={styles.buttonRow}>
        <Button title="Play" onPress={() => {}} />
        <Button title="Multiplayer" onPress={() => {}} />
        <Button title="How to Play" onPress={() => {}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
    marginBottom: 30,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
    marginBottom: 30,
  },
});
