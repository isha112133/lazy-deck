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

export default function MainContent() {
  return (
    <View style={tw`flex-1 gap-20 justify-center items-center`}>
      <View style={tw`flex-1 justify-center items-center`}>
        <View style={tw`flex flex-col gap-3`}>
          <View
            style={[
              tw`flex flex-col items-center`,
              {
                shadowColor: "black",
                shadowOffset: { width: 2, height: 4 },
                shadowOpacity: 20,
                shadowRadius: 5,
                elevation: 0,
              },
            ]}
          >
            <Text style={tw`text-6xl font-bold uppercase text-[#9dc209]`}>
              Never
            </Text>
            <View
              style={{
                height: 1,
                backgroundColor: "#9dc209",
                width: "110%",
                marginTop: -8,
              }}
            />
          </View>
          <View
            style={[
              tw`flex flex-col items-center`,
              {
                shadowColor: "black",
                shadowOffset: { width: 2, height: 4 },
                shadowOpacity: 20,
                shadowRadius: 5,
                elevation: 0,
              },
            ]}
          >
            <Text style={tw`text-white text-6xl font-bold uppercase`}>
              Have I
            </Text>
            <View
              style={{
                height: 1,
                backgroundColor: "white",
                width: "100%",
                marginTop: -8,
              }}
            />
          </View>
          <View
            style={[
              tw`flex flex-col items-center`,
              {
                shadowColor: "black",
                shadowOffset: { width: 2, height: 4 },
                shadowOpacity: 20,
                shadowRadius: 5,
                elevation: 0,
              },
            ]}
          >
            <Text style={tw`text-[#F88379] text-6xl font-bold uppercase`}>
              Ever
            </Text>
            <View
              style={{
                height: 1,
                backgroundColor: "#F88379",
                width: "80%",
                marginTop: -8,
              }}
            />
          </View>
        </View>
      </View>
      <View style={tw`flex-col gap-8`}>
        <TouchableOpacity
          style={tw`flex flex-row w-56 gap-6 items-center justify-start px-4 rounded-2xl bg-white`}
        >
          <View
            style={[
              tw`pb-2`,
              {
                shadowColor: "black",
                shadowOffset: { width: 2, height: 6 },
                shadowOpacity: 60,
                shadowRadius: 4,
                elevation: 0,
              },
            ]}
          >
            <Image
              source={require("../assets/play-icon.png")}
              style={tw`w-8 h-8`}
            />
          </View>
          <Text style={tw`text-4xl font-bold py-[5%] text-black uppercase`}>
            Play
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex flex-row gap-3 w-56 items-center justify-center rounded-2xl bg-white`}
        >
          <View
            style={{
              shadowColor: "black",
              shadowOffset: { width: 2, height: 6 },
              shadowOpacity: 60,
              shadowRadius: 4,
              elevation: 0,
            }}
          >
            <Image
              source={require("../assets/multi-icon.png")}
              style={tw`w-8 h-8`}
            />
          </View>
          <Text style={tw`text-xl font-bold py-4 text-black uppercase`}>
            Multiplayer
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex flex-row gap-3 w-56 items-center justify-center rounded-2xl bg-white`}
        >
          <View
            style={{
              shadowColor: "black",
              shadowOffset: { width: 2, height: 6 },
              shadowOpacity: 60,
              shadowRadius: 4,
              elevation: 0,
            }}
          >
            <Image
              source={require("../assets/video-icon.png")}
              style={tw`w-8 h-8`}
            />
          </View>
          <Text style={tw`text-xl font-bold py-4 text-black uppercase`}>
            How to Play
          </Text>
        </TouchableOpacity>
      </View>
      <View style={tw`flex-row gap-8`}>
        <View
          style={[
            tw`flex-row gap-2`,
            {
              shadowColor: "#000",
              shadowOffset: { width: 1, height: 3 },
              shadowOpacity: 2,
              shadowRadius: 2,
            },
            0,
          ]}
        >
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
