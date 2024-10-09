import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  ImageBackground,
} from "react-native";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import ButtonRow from "./components/ButtonRow";

// Import the background image from assets
const backgroundImage = require("./assets/bg.webp");

export default function App() {
  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <Header />

        {/* Main Content with buttons */}
        <ScrollView contentContainerStyle={styles.content}>
          <MainContent />
          <ButtonRow />
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1, // Make the background image cover the entire screen
    resizeMode: "cover", // Adjust the image to cover the screen
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 50,
  },
});
