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
export default function Seven() {
  const navigation = useNavigation();
  let [fontsLoaded] = useFonts({
    PlayfairDisplay_700Bold,
  });
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Image style={styles.image} source={require("./Seven.png")} />
        <Text style={styles.titleText}>Six Flags Great Adventure</Text>
        <Text style={styles.text}>Theme Park</Text>
        <View style={styles.line}></View>
        <View style={styles.box}>
          <Text style={styles.subText}>
            Six Flags Great Adventure, located in Jackson Township, is one of
            the largest amusement parks in the United States, boasting thrilling
            roller coasters, family-friendly rides, and exciting attractions.
            Adrenaline junkies will love riding record-breaking coasters like
            Kingda Ka and El Toro, while younger visitors can enjoy attractions
            like Bugs Bunny National Park and Safari Kids. The park is also home
            to Hurricane Harbor, a massive water park featuring slides, wave
            pools, and lazy rivers, perfect for cooling off on hot summer days.
            With a variety of dining options, live entertainment, and special
            events throughout the year, Six Flags Great Adventure offers fun for
            all visitors.{" "}
          </Text>
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity onPress={() => navigation.navigate("Screen 6")}>
            <Ionicons name="chevron-back" size={40} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Ionicons name="home" size={40} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Screen 8")}>
            <Ionicons name="chevron-forward" size={40} color="black" />
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}
