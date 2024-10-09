import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function Header() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Never Have I Ever</Text> */}
      <TouchableOpacity style={styles.settingsButton}>
        <Icon name="setting" size={24} color="#fff" />
        {/* Settings icon */}
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
    backgroundColor: "black", // Green background color
  },
  title: {
    fontSize: 24,
    color: "#fff",
  },
  settingsButton: {
    padding: 10,
  },
  settingsButton: {
    padding: 10,
  },
});
