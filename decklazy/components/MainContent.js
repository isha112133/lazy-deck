import React from "react";
import {
  View,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { Text } from "react-native-paper";
import tw from "twrnc";
// import Play from "../assets/play-icon.svg";

export default function MainContent() {
  return (
    <View style={tw`flex-1 gap-20 justify-center items-center`}>
      <View style={tw`flex-1 justify-center items-center`}>
        <View style={tw`flex flex-col gap-3`}>
          <View style={tw`flex flex-col items-center`}>
            <Text style={tw`text-4xl font-bold uppercase text-[#9dc209]`}>
              Never
            </Text>
            <View
              style={{
                height: 1,
                backgroundColor: "#9dc209",
                width: "110%",
                marginTop: -5,
              }}
            />
          </View>
          <View style={tw`flex flex-col items-center`}>
            <Text style={tw`text-white text-4xl font-bold uppercase`}>
              Have I
            </Text>
            <View
              style={{
                height: 1,
                backgroundColor: "white",
                width: "100%",
                marginTop: -5,
              }}
            />
          </View>
          <View style={tw`flex flex-col items-center`}>
            <Text style={tw`text-[#F88379] text-4xl font-bold uppercase`}>
              Ever
            </Text>
            <View
              style={{
                height: 1,
                backgroundColor: "#F88379",
                width: "80%",
                marginTop: -5,
              }}
            />
          </View>
        </View>
      </View>
      <View style={tw`flex-col gap-8`}>
        <TouchableOpacity
          style={tw`flex flex-row w-48 gap-6 items-center justify-start px-3 rounded-2xl bg-white`}
        >
          <Image
            source={require("../assets/play-icon.png")}
            style={tw`w-8 h-8`}
          />
          <Text style={tw`text-2xl font-bold py-[5%] text-black uppercase`}>
            Play
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex flex-row gap-3 w-48 items-center justify-center rounded-2xl bg-white`}
        >
          <Image
            source={require("../assets/multi-icon.png")}
            style={tw`w-8 h-8`}
          />
          <Text style={tw`text-lg font-bold py-4 text-black uppercase`}>
            Multiplayer
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex flex-row gap-3 w-48 items-center justify-center rounded-2xl bg-white`}
        >
          <Image
            source={require("../assets/video-icon.png")}
            style={tw`w-8 h-8`}
          />
          <Text style={tw`text-lg font-bold py-4 text-black uppercase`}>
            How to Play
          </Text>
        </TouchableOpacity>
      </View>
      <View style={tw`flex-row gap-8`}>
        <View style={tw`flex-row gap-2`}>
          <Image
            source={require("../assets/rocket.png")}
            style={tw`w-8 h-8 text-white`}
          />
          <TouchableOpacity
            style={tw`border-2 rounded-2xl bg-[#001f3f] border-white justify-center`}
          >
            <Text style={tw`uppercase font-semibold text-md px-1 text-white`}>
              Follow us
            </Text>
          </TouchableOpacity>
        </View>
        <View style={tw`flex-row gap-2`}>
          <Image
            source={require("../assets/retro.png")}
            style={tw`w-9 h-9 text-white`}
          />
          <TouchableOpacity
            style={tw`border-2 rounded-2xl bg-[#001f3f] border-white justify-center`}
          >
            <Text style={tw`uppercase font-semibold text-md px-1 text-white`}>
              Home games
            </Text>
          </TouchableOpacity>
        </View>
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
