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
export default function Two() {
  const navigation = useNavigation();
  let [fontsLoaded] = useFonts({
    PlayfairDisplay_700Bold,
  });
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Image style={styles.image} source={require("./Two.png")} />
        <Text style={styles.titleText}>Princeton University</Text>
        <View style={styles.line}></View>
        <View style={styles.box}>
          <Text style={styles.subText}>
            Princeton University, one of the prestigious Ivy League
            institutions, boasts a stunning campus adorned with historic
            buildings and beautiful green spaces. Visitors can take guided tours
            to explore the university's rich history, including landmarks like
            Nassau Hall and the iconic Blair Arch. The Princeton University Art
            Museum houses a remarkable collection of artworks spanning various
            cultures and time periods, offering a cultural feast for art
            enthusiasts. Don't forget to stroll through Palmer Square, a
            charming shopping and dining area adjacent to the campus, perfect
            for relaxation and exploration.
          </Text>
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity onPress={() => navigation.navigate("Screen 1")}>
            <Ionicons name="chevron-back" size={40} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Ionicons name="home" size={40} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Screen 3")}>
            <Ionicons name="chevron-forward" size={40} color="black" />
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}
