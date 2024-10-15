import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  ImageBackground,
  View,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import SettingsScreen from "./screens/SettingsScreen"; // New screen
import tw from "twrnc";
import PurchasesScreen from "./screens/PurchasesScreen";

const backgroundImage = require("./assets/bg.webp");
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Purchases"
          component={PurchasesScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={tw`flex items-end my-4 mt-10 right-8`}>
        <Header navigation={navigation} />
      </View>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.content}>
          <MainContent />
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
    flex: 1,
    resizeMode: "cover",
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 50,
  },
});
