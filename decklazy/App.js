import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import ButtonRow from "./components/ButtonRow";
// import { ScrollView } from "react-native-gesture-handler";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Header />

      {/* Main Content with buttons */}
      <ScrollView contentContainerStyle={styles.content}>
        <MainContent />
        <ButtonRow />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 50,
  },
});
