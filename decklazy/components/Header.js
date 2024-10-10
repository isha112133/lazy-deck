import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import tw from "twrnc";

export default function Header({ navigation }) {
  return (
    <View style={tw`justify-end`}>
      <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
        <Image
          source={require("../assets/setting.png")}
          style={tw`w-8 h-8 text-white`}
        />
      </TouchableOpacity>
    </View>
  );
}
