import React, { useState, useEffect, useRef } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "twrnc";
import { Switch, Text } from "react-native-paper";
import * as RNIap from "react-native-iap";

const backgroundImage = require("../assets/bg.webp");
// const { width } = Dimensions.get("window");

// const itemSkus = Platform.select({
//   ios: ["com.app.subscription"],
//   android: ["com.app.subscription"],
// });

export default function PurchasesScreen({ navigation }) {
  // const [activeIndex, setActiveIndex] = useState(0);
  // const [products, setProducts] = useState([]);
  // const [hasSubscription, setHasSubscription] = useState(false);
  // const scrollViewRef = useRef();

  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  // const cards = [
  //   {
  //     title: "Party and Fun",
  //     image: require("../assets/party.png"),
  //     locked: false,
  //   },
  //   { title: "Food", image: require("../assets/fast-food.png"), locked: false },
  //   {
  //     title: "Relationships",
  //     image: require("../assets/relationship.png"),
  //     locked: true,
  //   },
  //   { title: "Fitness", image: require("../assets/party.png"), locked: true },
  //   {
  //     title: "Movies",
  //     image: require("../assets/fast-food.png"),
  //     locked: true,
  //   },
  //   { title: "Travel", image: require("../assets/party.png"), locked: true },
  //   { title: "Music", image: require("../assets/fast-food.png"), locked: true },
  // ];

  // const CARD_WIDTH = width / 3;

  // useEffect(() => {
  //   async function initializeIAP() {
  //     try {
  //       await RNIap.initConnection();
  //       const subs = await RNIap.getSubscriptions(itemSkus);
  //       setProducts(subs);
  //       const purchases = await RNIap.getAvailablePurchases();
  //       if (purchases.length > 0) {
  //         // Check if user has the subscription
  //         setHasSubscription(true);
  //       }
  //     } catch (err) {
  //       console.warn(err);
  //     }
  //   }

  //   initializeIAP();

  //   return () => {
  //     RNIap.endConnection();
  //   };
  // }, []);

  // const handleScroll = (event) => {
  //   const slide = Math.ceil(event.nativeEvent.contentOffset.x / width);
  //   setActiveIndex(slide);
  // };

  // const handleBuySubscription = async () => {
  //   try {
  //     const purchase = await RNIap.requestSubscription(itemSkus[0]);
  //     if (purchase) {
  //       setHasSubscription(true);
  //     }
  //   } catch (err) {
  //     console.warn(err);
  //   }
  // };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={tw`flex-col`}>
        <TouchableOpacity
          style={tw`flex justify-start my-4 mt-10 left-8`}
          onPress={() => navigation.navigate("Settings")}
        >
          <Image
            source={require("../assets/setting.png")}
            style={tw`w-8 h-8`}
          />
        </TouchableOpacity>

        {/* Title */}
        <Text
          style={tw`text-3xl text-center font-bold py-[5%] text-white tracking-widest uppercase`}
        >
          Choose Deck
        </Text>
        {/* <ScrollView
          horizontal
          pagingEnabled
          ref={scrollViewRef}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
          snapToInterval={width}
          decelerationRate="fast"
          contentContainerStyle={{ paddingHorizontal: 10 }}
        >
          {cards.map((card, index) => (
            <View
              key={index}
              style={[
                styles.card,
                {
                  width: CARD_WIDTH,
                  alignItems: "center",
                  justifyContent: "center",
                },
              ]}
            >
              <Image
                source={card.image}
                style={tw`w-28 h-28 bg-white`}
                resizeMode="contain"
              />
              <Text
                style={tw`uppercase text-white text-lg font-bold mt-4 tracking-widest`}
              >
                {card.title}
              </Text>
              {card.locked && !hasSubscription ? (
                <TouchableOpacity
                  onPress={handleBuySubscription}
                  style={tw`mt-4`}
                >
                  <Text style={tw`text-red-500 text-lg`}>Buy Now</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity style={tw`mt-4`}>
                  <Text style={tw`text-green-500 text-lg`}>Play</Text>
                </TouchableOpacity>
              )}
            </View>
          ))}
        </ScrollView>
        <View style={tw`flex-row justify-center mt-4`}>
          {cards.map((_, i) => (
            <View
              key={i}
              style={[
                styles.dot,
                activeIndex === i ? styles.activeDot : styles.inactiveDot,
              ]}
            />
          ))}
        </View> */}
        <View
          style={tw`bg-white flex-row gap-2 items-center mx-4 px-4 py-3 rounded-3xl`}
        >
          <View style={tw`flex-row flex-1`}>
            <Image
              source={require("../assets/padlock.png")}
              style={tw`w-10 h-10 mt-2`} // Adjusted size for better fit
            />
            <View style={tw`flex-col items-start gap-2`}>
              <Text
                style={tw`text-[#001f3f] w-52 text-2xl font-extrabold text-black uppercase`}
              >
                Explore premium decks
              </Text>
              <View
                style={tw`bg-[#001f3f] flex-row items-center px-2 py-1 gap-3 rounded-2xl`}
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
              style={tw`text-[#001f3f] text-center font-extrabold uppercase`}
            >
              Dirty
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={tw`border-2 rounded-2xl items-end flex w-18 px-1 py-1 bg-[#D87168] border-white justify-center`}
        >
          <Text style={tw`uppercase font-bold text-xs text-white`}>
            Explore
          </Text>
        </TouchableOpacity>
        <View style={tw`mx-4`}>
          <Text
            style={tw`text-2xl mx-8 text-start font-bold py-[5%] text-white tracking-widest uppercase`}
          >
            Filters
          </Text>
          <View
            style={tw`flex-row bg-[#74CC64] py-3 px-3 rounded-3xl justify-between`}
          >
            <View style={tw`flex-row items-center gap-6 px-10`}>
              <Image
                source={require("../assets/funny.png")}
                style={tw`w-16 h-16 mt-2`}
              />
              <View style={tw`flex-col gap-1`}>
                <Text
                  style={tw`text-[#001f3f] uppercase text-xl font-extrabold`}
                >
                  Funny
                </Text>
                <Text
                  style={tw`text-white uppercase text-[10px] font-semibold`}
                >
                  110 cards
                </Text>
              </View>
            </View>
            <View style={tw`flex-col items-center justify-center`}>
              <View style={styles.switchContainer}>
                <Switch
                  trackColor={{ false: "#767577", true: "#728E01" }}
                  thumbColor={isEnabled ? "#fff" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
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
