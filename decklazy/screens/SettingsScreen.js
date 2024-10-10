import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import { Text } from "react-native-paper";
import tw from "twrnc";

const backgroundImage = require("../assets/bg.webp");

export default function SettingsScreen() {
  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={tw`flex-col gap-4`}>
        <View
          style={tw`justify-start gap-14 bg-[#001f3f] py-3 flex-row my-4 mt-16 items-center px-12`}
        >
          <TouchableOpacity>
            <Image
              source={require("../assets/setting.png")}
              style={tw`w-8 h-8 text-white`}
            />
          </TouchableOpacity>
          <Text style={tw`text-4xl font-bold uppercase text-white`}>
            Settings
          </Text>
        </View>
        <View style={tw`flex-row mx-6 justify-between`}>
          <TouchableOpacity
            style={tw`bg-[#001f3f] p-[3%] items-center rounded-full`}
          >
            <Image
              source={require("../assets/music.png")}
              style={tw`w-7 h-7 text-white`}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`bg-[#001f3f] p-[3%] items-center rounded-full`}
          >
            <Image
              source={require("../assets/info.png")}
              style={tw`w-7 h-7 text-white`}
            />
          </TouchableOpacity>
        </View>
        <View style={tw`flex-col gap-8 top-16`}>
          <View
            style={tw`bg-[#9dc209] rounded-lg py-6 flex-row items-center justify-between px-6 mx-6`}
          >
            <Text style={tw`text-2xl font-semibold text-[#001f3f]`}>
              Languages
            </Text>
            <Text style={tw`text-lg font-semibold text-[#001f3f]`}>
              Eng(US)
            </Text>
            <Image
              source={require("../assets/arrow.png")}
              style={
                (tw`w-7 h-7 text-white`,
                { height: 24, width: 24, transform: [{ rotate: "270deg" }] })
              }
            />
          </View>
          <View
            style={tw`flex-row bg-[#F88379] items-center justify-between mx-6 rounded-lg py-6 px-5 w-4/5`}
          >
            <View style={tw`flex-row gap-4 items-center`}>
              <Image
                source={require("../assets/star-3.png")}
                style={tw`w-7 h-7 text-white`}
              />
              <Text style={tw`text-2xl font-semibold text-[#001f3f]`}>
                Kid Mode
              </Text>
            </View>
            <View style={tw`flex-row gap-4 items-center`}>
              <Text style={tw`text-lg font-semibold text-[#001f3f]`}>Off</Text>
            </View>
          </View>
          <View
            style={tw`flex-row bg-[#1cd6cd] items-center justify-between mx-6 rounded-lg py-4 px-5 w-3/4`}
          >
            <Image
              source={require("../assets/purchase.png")}
              style={tw`w-7 h-7 text-white`}
            />
            <Text style={tw`text-2xl font-semibold text-[#001f3f]`}>
              Purchases
            </Text>
            <Image
              source={require("../assets/arrow.png")}
              style={
                (tw`w-7 h-7 text-white`,
                { height: 24, width: 24, transform: [{ rotate: "270deg" }] })
              }
            />
          </View>
        </View>
        <View style={tw`flex-row gap-8 top-40`}>
          <TouchableOpacity
            style={tw`flex-row items-center gap-2 rounded-md bg-[#001f3f] border-white justify-center`}
          >
            <Image
              source={require("../assets/retro.png")}
              style={tw`w-9 h-9 text-white`}
            />
            <Text style={tw`font-light text-lg px-1 text-white`}>
              More Games
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`flex-row items-center gap-2 rounded-md bg-[#001f3f] border-white justify-center`}
          >
            <Image
              source={require("../assets/rocket.png")}
              style={tw`w-8 h-8 text-white`}
            />
            <Text style={tw`font-light text-lg px-1 text-white`}>
              Follow Us
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
});
