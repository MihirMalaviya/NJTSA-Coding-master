import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import {
  useFonts,
  PlayfairDisplay_700Bold,
} from "@expo-google-fonts/playfair-display";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styling";
export default function Three() {
  const navigation = useNavigation();
  let [fontsLoaded] = useFonts({
    PlayfairDisplay_700Bold,
  });
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Image style={styles.image} source={require("./Three.png")} />
        <Text style={styles.titleText}>Cape May</Text>
        <View style={styles.line}></View>
        <View style={styles.box}>
          <Text style={styles.subText}>
            Cape May, located at the southern tip of New Jersey, is renowned for
            its Victorian architecture, pristine beaches, and vibrant arts
            scene. Visitors can admire the beautifully preserved Victorian homes
            on a leisurely stroll through the historic district, known as one of
            the country's best-preserved examples of Victorian architecture.
            Nature lovers will delight in exploring Cape May's diverse
            ecosystem, which includes birdwatching opportunities at the Cape May
            Bird Observatory and stunning sunsets at Sunset Beach. With its
            picturesque beaches, quaint shops, and delicious seafood
            restaurants, Cape May offers a perfect retreat.
          </Text>
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity onPress={() => navigation.navigate("Screen 2")}>
            <Ionicons name="chevron-back" size={40} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Ionicons name="home" size={40} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Screen 4")}>
            <Ionicons name="chevron-forward" size={40} color="black" />
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}
