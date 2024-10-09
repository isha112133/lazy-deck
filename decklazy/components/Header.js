import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

export default function Header() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Never Have I Ever</Text> */}
      <TouchableOpacity style={styles.settingsButton}>
        {/* <Text style={styles.settingsText}>⚙️</Text>{" "} */}
        {/* Wrap emoji inside <Text> */}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#4CAF50", // Green background color
  },
  title: {
    fontSize: 24,
    color: "#fff",
  },
  settingsButton: {
    padding: 10,
  },
  settingsText: {
    fontSize: 20,
    color: "#fff",
  },
});
