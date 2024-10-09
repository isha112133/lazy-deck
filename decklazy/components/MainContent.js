import React from "react";
import { View, Button, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import tw from "twrnc";

export default function MainContent() {
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <View style={tw``}>
        <Text style={tw`text-4xl font-bold uppercase text-[#9dc209]`}>
          Never
        </Text>
        <Text style={tw`text-white text-4xl font-bold uppercase`}>Have I </Text>
        <View>
          <Text style={tw`text-[#F88379] text-4xl font-bold uppercase`}>
            Ever
          </Text>
          <View style={tw`h-2 bg-[#F88379] w-[100%]`}></View>
        </View>
      </View>
      <View style={tw`flex-col`}>
        <Button title="Play" onPress={() => {}} />
        <Button title="Multiplayer" onPress={() => {}} />
        <Button title="How to Play" onPress={() => {}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 24,
    marginBottom: 30,
  },
});
