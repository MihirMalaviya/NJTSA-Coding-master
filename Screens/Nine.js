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
export default function Nine() {
  const navigation = useNavigation();
  let [fontsLoaded] = useFonts({
    PlayfairDisplay_700Bold,
  });
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Image style={styles.image} source={require("./Nine.png")} />
        <Text style={styles.titleText}>Cape May County Park & Zoo</Text>
        <Text style={styles.address}>
          707 North, Cape May Court House, NJ 08210
        </Text>
        <View style={styles.line}></View>
        <View style={styles.box}>
          <Text style={styles.subText}>
            The Cape May County Park & Zoo, located in Cape May Court House, is
            a free zoo and park offering family-friendly fun and educational
            experiences. Visitors can explore exhibits featuring a diverse array
            of animals from around the world, including lions, giraffes, and
            snow leopards, among others. The zoo also features interactive
            experiences, educational programs, and special events, making it a
            popular destination for visitors of all ages. With beautifully
            landscaped grounds, picnic areas, and playgrounds, the Cape May
            County Park & Zoo provides a perfect day out for nature lovers and
            families alike.
          </Text>
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity onPress={() => navigation.navigate("Screen 8")}>
            <Ionicons name="chevron-back" size={40} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Ionicons name="home" size={40} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Screen 10")}>
            <Ionicons name="chevron-forward" size={40} color="black" />
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}
