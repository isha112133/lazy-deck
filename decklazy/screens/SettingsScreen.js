import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
  Animated,
} from "react-native";
import { Switch, Text } from "react-native-paper";
import tw from "twrnc";

const backgroundImage = require("../assets/bg.webp");

export default function SettingsScreen() {
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(false);
  const thumbPosition = useState(new Animated.Value(0))[0];

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    Animated.timing(thumbPosition, {
      toValue: isEnabled ? 0 : 20,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };
  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={tw`flex-col gap-4`}>
        <View
          style={tw`justify-start border-b-8 border-[#00172e] gap-14 bg-[#001f3f] py-3 flex-row my-4 mt-16 items-center px-12`}
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
            style={[
              tw`bg-[#001f3f] p-[3%] items-center rounded-full`,
              {
                shadowColor: "#000",
                shadowOffset: { width: 1, height: 3 },
                shadowOpacity: 2,
                shadowRadius: 2,
              },
            ]}
          >
            <Image
              source={require("../assets/music.png")}
              style={tw`w-7 h-7 text-white`}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              tw`bg-[#001f3f] p-[3%] items-center rounded-full`,
              {
                shadowColor: "#000",
                shadowOffset: { width: 1, height: 3 },
                shadowOpacity: 2,
                shadowRadius: 2,
              },
            ]}
            onPress={() => navigation.navigate("Purchases")}
          >
            <Image
              source={require("../assets/info.png")}
              style={tw`w-7 h-7 text-white`}
            />
          </TouchableOpacity>
        </View>
        <View style={tw`flex-col gap-8 top-16`}>
          <View
            style={[
              tw`bg-[#9dc209] rounded-lg py-6 flex-row items-center justify-between px-4 mx-6`,
              {
                shadowColor: "#000",
                shadowOffset: { width: 1, height: 3 },
                shadowOpacity: 2,
                shadowRadius: 2,
              },
            ]}
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
                { height: 24, width: 38, transform: [{ rotate: "270deg" }] })
              }
            />
          </View>
          <View
            style={[
              tw`flex-row bg-[#F88379] items-center justify-between mx-6 rounded-lg py-6 px-5 w-4/5`,
              {
                shadowColor: "#000",
                shadowOffset: { width: 1, height: 3 },
                shadowOpacity: 2,
                shadowRadius: 2,
              },
            ]}
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
            <TouchableOpacity
              onPress={toggleSwitch}
              style={styles.switchContainer}
              activeOpacity={1}
            >
              <View
                style={[tw`rounded-full bg-[#e9eaec] opacity-45`, styles.track]}
              />
              <Animated.View
                style={[
                  tw`absolute bg-[#001f3f] rounded-full`,
                  styles.thumb,
                  {
                    transform: [{ translateX: thumbPosition }],
                  },
                ]}
              />
            </TouchableOpacity>
          </View>
          <View
            style={[
              tw`flex-row bg-[#1cd6cd] items-center justify-between mx-6 rounded-lg py-4 px-5 w-3/4`,
              {
                shadowColor: "#000",
                shadowOffset: { width: 1, height: 3 },
                shadowOpacity: 2,
                shadowRadius: 2,
              },
            ]}
          >
            <Image
              source={require("../assets/purchase.png")}
              style={tw`w-7 h-7 text-white`}
            />
            <Text style={tw`text-2xl font-semibold text-[#001f3f]`}>
              Purchases
            </Text>
            <TouchableOpacity>
              <Image
                source={require("../assets/arrow.png")}
                style={
                  (tw`w-7 h-7 text-white`,
                  { height: 24, width: 38, transform: [{ rotate: "270deg" }] })
                }
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={tw`flex-row gap-8 top-40 mx-4 justify-between`}>
          <TouchableOpacity
            style={[
              tw`flex-row items-center tracking-wide px-2 py-2 gap-2 rounded-md bg-[#001f3f] border-white justify-center`,
              {
                shadowColor: "#000",
                shadowOffset: { width: 1, height: 3 },
                shadowOpacity: 2,
                shadowRadius: 2,
              },
            ]}
          >
            <Image
              source={require("../assets/videoLight.png")}
              style={tw`w-5 h-5 text-white`}
            />
            <Text style={tw`font-light text-lg px-1 text-gray-100`}>
              More Games
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              tw`flex-row items-center justify-start px-3 py-2 gap-2 rounded-md bg-[#001f3f] border-white justify-center`,
              {
                shadowColor: "#000",
                shadowOffset: { width: 1, height: 3 },
                shadowOpacity: 2,
                shadowRadius: 2,
              },
            ]}
          >
            <Image
              source={require("../assets/rocket.png")}
              style={tw`w-5 h-5 text-white`}
            />
            <Text
              style={tw`font-light tracking-wide text-lg pr-4 text-gray-100`}
            >
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
  switchContainer: {
    width: 33,
    height: 30,
    position: "relative",
    justifyContent: "center",
  },
  track: {
    width: "100%",
    height: 18,
  },
  thumb: {
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 15,
    shadowRadius: 3,
    width: 24,
    height: 24,
    left: -7,
  },
});
