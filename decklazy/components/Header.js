import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import tw from "twrnc";

export default function Header({ navigation }) {
  return (
    <View style={tw`justify-end`}>
      <TouchableOpacity
        style={{
          shadowColor: "black",
          shadowOffset: { width: 2, height: 2 },
          shadowOpacity: 20,
          shadowRadius: 5,
          elevation: 0,
        }}
        onPress={() => navigation.navigate("Settings")}
      >
        <Image
          source={require("../assets/setting.png")}
          style={tw`w-8 h-8 text-white`}
        />
      </TouchableOpacity>
    </View>
  );
}
