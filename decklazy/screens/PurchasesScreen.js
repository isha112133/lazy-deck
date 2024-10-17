import React, { useState, useEffect, useRef } from "react";
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "twrnc";
import { Switch, Text } from "react-native-paper";

const backgroundImage = require("../assets/bg.webp");
const { width } = Dimensions.get("window");

const data = [
  { id: "1", title: "Card 1", image: require("../assets/lip-balm.png") },
  { id: "2", title: "Card 2", image: require("../assets/lip-balm.png") },
  { id: "3", title: "Card 3", image: require("../assets/lip-balm.png") },
  { id: "4", title: "Card 4", image: require("../assets/lip-balm.png") },
  { id: "5", title: "Card 5", image: require("../assets/lip-balm.png") },
  { id: "6", title: "Card 6", image: require("../assets/lip-balm.png") },
  { id: "7", title: "Card 7", image: require("../assets/lip-balm.png") },
  { id: "8", title: "Card 8", image: require("../assets/lip-balm.png") },
  { id: "9", title: "Card 9", image: require("../assets/lip-balm.png") },
];

const CARD_WIDTH = width;
const NUM_CARDS = 3;

export default function PurchasesScreen({ navigation }) {
  const [isFunnyEnabled, setIsFunnyEnabled] = useState(false);
  const [isAwkwardEnabled, setIsAwkwardEnabled] = useState(false);
  const [isAdultEnabled, setIsAdultEnabled] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipeNext = () => {
    if (currentIndex < Math.ceil(data.length / NUM_CARDS) - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handleSwipePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const renderItem = ({ item }) => (
    <View style={tw`w-full p-4`}>
      <View style={tw`bg-white rounded-lg shadow-md p-6`}>
        <Text style={tw`text-lg font-bold text-center`}>{item.title}</Text>
        <Image
          source={item.image}
          style={tw`w-10 h-10 absolute top-[20%] left-[15%]`}
        />
      </View>
    </View>
  );

  const groupedData = [];
  for (let i = 0; i < data.length; i += NUM_CARDS) {
    groupedData.push(data.slice(i, i + NUM_CARDS));
  }

  const toggleFunnySwitch = () => setIsFunnyEnabled((prev) => !prev);
  const toggleAwkwardSwitch = () => setIsAwkwardEnabled((prev) => !prev);
  const toggleAdultSwitch = () => setIsAdultEnabled((prev) => !prev);

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={tw`flex-col gap-4`}>
        <View style={tw`flex-row justify-between`}>
          <TouchableOpacity
            style={[
              tw`flex justify-start my-4 mt-10 left-8`,
              {
                shadowColor: "black",
                shadowOffset: { width: 2, height: 2 },
                shadowOpacity: 20,
                shadowRadius: 5,
                elevation: 0,
              },
            ]}
            onPress={() => navigation.navigate("Settings")}
          >
            <Image
              source={require("../assets/setting.png")}
              style={tw`w-8 h-8`}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              tw`flex justify-start my-4 mt-10 right-8`,
              {
                shadowColor: "black",
                shadowOffset: { width: 2, height: 2 },
                shadowOpacity: 20,
                shadowRadius: 5,
                elevation: 0,
              },
            ]}
          >
            <Image source={require("../assets/info.png")} style={tw`w-8 h-8`} />
          </TouchableOpacity>
        </View>
        <View style={tw`flex-1 items-center justify-center`}>
          <FlatList
            data={groupedData}
            renderItem={({ item }) => (
              <View style={tw`flex-row justify-center`}>
                {item.map((card) => (
                  <View
                    key={card.id}
                    style={tw`w-[${width / NUM_CARDS}px} p-2`}
                  >
                    {renderItem({ item: card })}
                  </View>
                ))}
              </View>
            )}
            keyExtractor={(item) => item[0].id}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            snapToInterval={CARD_WIDTH}
            onMomentumScrollEnd={(event) => {
              const index = Math.floor(
                event.nativeEvent.contentOffset.x / CARD_WIDTH
              );
              setCurrentIndex(index);
            }}
            style={{ width }}
          />
          <View style={tw`flex-row justify-between w-full p-4`}>
            <TouchableOpacity
              onPress={handleSwipePrev}
              disabled={currentIndex === 0}
              style={tw`bg-gray-300 rounded-lg p-2 ${
                currentIndex === 0 ? "opacity-50" : "opacity-100"
              }`}
            >
              <Text style={tw`text-black`}>Prev</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleSwipeNext}
              disabled={currentIndex >= Math.ceil(data.length / NUM_CARDS) - 1}
              style={tw`bg-gray-300 rounded-lg p-2 ${
                currentIndex >= Math.ceil(data.length / NUM_CARDS) - 1
                  ? "opacity-50"
                  : "opacity-100"
              }`}
            >
              <Text style={tw`text-black`}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text
          style={[
            tw`text-4xl text-center font-bold py-[5%] text-white tracking-widest uppercase`,
            {
              textShadowColor: "rgba(0, 0, 0, 0.3)",
              textShadowOffset: { width: 0, height: 9 },
              textShadowRadius: 4,
            },
          ]}
        >
          Choose Deck
        </Text>
        <View
          style={tw`bg-gray-100 flex-row gap-2 items-center mx-4 px-4 py-2 rounded-3xl`}
        >
          <View style={tw`flex-row flex-1`}>
            <Image
              source={require("../assets/padlock.png")}
              style={tw`w-10 h-10 mt-2`}
            />
            <View style={tw`flex-col items-start gap-0`}>
              <Text
                style={[
                  tw`text-[#1F305E] w-52 text-2xl font-extrabold uppercase py-2`,
                  {
                    textShadowColor: "rgba(0, 0, 0, 0.3)",
                    textShadowOffset: { width: 0, height: 9 },
                    textShadowRadius: 4,
                  },
                ]}
              >
                Explore premium decks
              </Text>

              <View
                style={tw`bg-[#1F305E] flex-row items-center px-2 py-1 gap-3 rounded-2xl`}
              >
                <Text
                  style={tw`text-white text-[10px] font-normal uppercase text-start`}
                >
                  Starting from
                </Text>
                <Text style={tw`text-[13px] text-white font-bold`}>
                  ₹120.00
                </Text>
              </View>
            </View>
          </View>
          <View style={tw`flex-col gap-2`}>
            <View style={tw`relative w-20 h-20`}>
              <Image
                source={require("../assets/dirty-cards.png")}
                style={tw`w-22 h-22`}
              />

              <Image
                source={require("../assets/lip-balm.png")}
                style={tw`w-10 h-10 absolute top-[20%] left-[15%]`}
              />
            </View>
            <Text
              style={[
                tw`text-[#1F305E] text-center pb-2 font-extrabold uppercase`,
                {
                  textShadowColor: "rgba(0, 0, 0, 0.3)",
                  textShadowOffset: { width: 0, height: 5 },
                  textShadowRadius: 4,
                },
              ]}
            >
              Dirty
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={tw`border-2 mx-8 rounded-2xl self-end w-18 px-1 py-1 bg-[#D87168] border-white justify-center`}
        >
          <Text
            style={tw`uppercase font-bold text-xs tracking-tighter text-center text-white`}
          >
            Explore
          </Text>
        </TouchableOpacity>
        <View style={tw`mx-4 gap-4`}>
          <Text
            style={[
              tw`text-4xl mx-8 text-start font-bold text-white tracking-widest uppercase`,
              {
                textShadowColor: "rgba(0, 0, 0, 0.3)",
                textShadowOffset: { width: 0, height: 9 },
                textShadowRadius: 4,
              },
            ]}
          >
            Filters
          </Text>
          <View
            style={tw`flex-row bg-[#74CC64] py-2 px-3 rounded-3xl justify-between`}
          >
            <View style={tw`flex-row items-center gap-6 px-10`}>
              <View
                style={{
                  shadowColor: "black",
                  shadowOffset: { width: 2, height: 2 },
                  shadowOpacity: 20,
                  shadowRadius: 5,
                  elevation: 0,
                }}
              >
                <Image
                  source={require("../assets/funny.png")}
                  style={tw`w-14 h-14 mt-2`}
                />
              </View>
              <View style={tw`flex-col gap-1 justify-end mt-3`}>
                <Text
                  style={tw`text-[#1F305E] uppercase tracking-tighter text-[28px] font-extrabold`}
                >
                  Funny
                </Text>
                <Text
                  style={tw`text-white uppercase text-[15px] tracking-tighter font-semibold`}
                >
                  110 cards
                </Text>
              </View>
            </View>
            <View style={tw`flex-col items-center justify-center`}>
              <View style={styles.switchContainer}>
                <Switch
                  trackColor={{ false: "#767577", true: "#4F7942" }}
                  thumbColor={isFunnyEnabled ? "#fff" : "#f4f3f4"}
                  ios_backgroundColor="#4F7942"
                  onValueChange={toggleFunnySwitch}
                  value={isFunnyEnabled}
                  style={styles.switch}
                />
              </View>
            </View>
          </View>
          <View
            style={tw`flex-row bg-[#ffc0cb] py-0 px-3 rounded-3xl justify-between`}
          >
            <View style={tw`flex-row items-center gap-0 px-8`}>
              <View
                style={{
                  shadowColor: "black",
                  shadowOffset: { width: 2, height: 2 },
                  shadowOpacity: 20,
                  shadowRadius: 5,
                  elevation: 0,
                }}
              >
                <Image
                  source={require("../assets/awkward.png")}
                  style={tw`w-16 h-18 mb-2`}
                />
              </View>
              <View style={tw`flex-col gap-1 justify-end mt-3`}>
                <Text
                  style={[
                    tw`text-[#1F305E] uppercase tracking-tighter text-[28px] font-extrabold`,
                    {
                      textShadowColor: "rgba(0, 0, 0, 0.1)",
                      textShadowOffset: { width: 0, height: 9 },
                      textShadowRadius: 4,
                    },
                  ]}
                >
                  Awkward
                </Text>
                <Text
                  style={tw`text-white uppercase text-[15px] tracking-tighter text-center font-semibold`}
                >
                  70 cards
                </Text>
              </View>
            </View>
            <View style={tw`flex-col items-center justify-center`}>
              <View style={styles.switchContainer}>
                <Switch
                  trackColor={{ false: "#767577", true: "#FA8072" }}
                  thumbColor={isAwkwardEnabled ? "#fff" : "#f4f3f4"}
                  ios_backgroundColor="#FA8072"
                  onValueChange={toggleAwkwardSwitch}
                  value={isAwkwardEnabled}
                  style={styles.switch}
                />
              </View>
            </View>
          </View>
          <View
            style={tw`flex-row bg-[#bcdd5a] py-1 px-3 rounded-3xl justify-between`}
          >
            <View style={tw`flex-row items-center gap-6 px-10`}>
              <View
                style={{
                  shadowColor: "black",
                  shadowOffset: { width: 6, height: 2 },
                  shadowOpacity: 20,
                  shadowRadius: 5,
                  elevation: 0,
                }}
              >
                <Image
                  source={require("../assets/adult.png")}
                  style={tw`w-18 h-18 mt-0 rounded-3xl`}
                />
              </View>
              <View style={tw`flex-col gap-1 justify-end mt-3`}>
                <Text
                  style={[
                    tw`text-[#1F305E] uppercase tracking-tighter text-[28px] font-extrabold`,
                    {
                      textShadowColor: "rgba(0, 0, 0, 0.1)",
                      textShadowOffset: { width: 0, height: 9 },
                      textShadowRadius: 4,
                    },
                  ]}
                >
                  Adult
                </Text>
                <Text
                  style={tw`text-white uppercase text-[15px] tracking-tighter font-semibold`}
                >
                  90 cards
                </Text>
              </View>
            </View>
            <View style={tw`flex-col items-center justify-center`}>
              <View style={styles.switchContainer}>
                <Switch
                  trackColor={{ false: "#767577", true: "#728E01" }}
                  thumbColor={isAdultEnabled ? "#fff" : "#f4f3f4"}
                  ios_backgroundColor="#728E01"
                  onValueChange={toggleAdultSwitch}
                  value={isAdultEnabled}
                  style={styles.switch}
                />
              </View>
            </View>
          </View>
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
  card: {
    flex: 1,
    paddingVertical: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "#FFFFFF",
  },
  inactiveDot: {
    backgroundColor: "#888888",
  },
  switchContainer: {
    padding: 0,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#fff",
  },
});
