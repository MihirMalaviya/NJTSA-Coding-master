import { statusBar } from "expo-status-bar";
import {
  useFonts,
  Inter_500Medium,
  Inter_800ExtraBold,
} from "@expo-google-fonts/inter";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  StyleSheet,
  Pressable,
  Text,
  View,
  Image,
  Dimensions,
  Linking,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();

  let [fontsLoaded] = useFonts({
    Inter_800ExtraBold,
  });
  // useFonts({
  //   Inter_800ExtraBold,
  // });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  const carouselData = [
    { screen: "Screen 1", image: require("./One.png") },
    { screen: "Screen 2", image: require("./Two.png") },
    { screen: "Screen 3", image: require("./Three.png") },
    { screen: "Screen 4", image: require("./Four.png") },
    { screen: "Screen 5", image: require("./Five.png") },
    { screen: "Screen 6", image: require("./Six.png") },
    { screen: "Screen 7", image: require("./Seven.png") },
    { screen: "Screen 8", image: require("./Eight.png") },
    { screen: "Screen 9", image: require("./Nine.png") },
    { screen: "Screen 10", image: require("./Ten.png") },
  ];

  const handlePress = (url) => {
    Linking.openURL(url);
  };

  const carouselDataTwo = [
    {
      url: "https://www.tripadvisor.com/HotelsList-New_Jersey-Family-Resorts-zfp10679.html",
      image: require("./A.png"),
    },
    {
      url: "https://njmonthly.com/articles/eat-drink/best-new-restaurants-in-new-jersey/",
      image: require("./B.png"),
    },
    {
      url: "https://visitnj.org/article/history-new-jersey",
      image: require("./C.png"),
    },
    {
      url: "https://rvshare.com/blog/top-10-landmarks-in-new-jersey/",
      image: require("./D.png"),
    },
    { url: "https://visitnj.org/nj/events", image: require("./E.png") },
  ];

  const renderItem = ({ item }) => (
    <Pressable onPress={() => navigation.navigate(item.screen)}>
      <Image style={styles.image} source={item.image} />
    </Pressable>
  );

  const renderItemTwo = ({ item }) => (
    <Pressable onPress={() => handlePress(item.url)}>
      <Image style={styles.imageTwo} source={item.image} />
    </Pressable>
  );

  return (
    <LinearGradient
      colors={["#76b83b", "#f8ffea", "#ffffff"]}
      style={styles.container}
    >
      <Text style={styles.titleText}>Let's take a tour!</Text>

      <View style={[styles.carouselBox, { maxHeight: "50%" }]}>
        <Carousel
          data={carouselData}
          renderItem={renderItem}
          sliderWidth={Dimensions.get("window").width}
          itemWidth={290}
          layout={"default"}
          loop={true}
        />
      </View>

      <Text style={styles.subText}>Activities!</Text>

      <View style={[styles.carouselBox, { maxHeight: "20%" }]}>
        <Carousel
          data={carouselDataTwo}
          renderItem={renderItemTwo}
          sliderWidth={Dimensions.get("window").width}
          itemWidth={120}
          layout={"default"}
          loop={true}
        />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
  },
  titleText: {
    paddingTop: "20%",
    paddingLeft: "5%",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "left",
    fontFamily: "Inter_800ExtraBold",
  },
  subText: {
    marginTop: "5%",
    marginBottom: "1%",
    paddingLeft: "5%",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "left",
    fontFamily: "Inter_800ExtraBold",
  },

  carouselBox: {
    paddingTop: "5%",
    marginBottom: "10%",
    width: "100%",
  },

  image: {
    position: "relative",
    width: 300,
    height: 390,
    marginTop: 10,
    borderRadius: 10,
    overflow: "hidden",
  },

  imageTwo: {
    width: 90,
    height: 90,
    padding: 10,
    borderRadius: 10,
    // backgroundColor: "#91f869",
  },
});
