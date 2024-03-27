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
export default function Ten() {
  const navigation = useNavigation();
  let [fontsLoaded] = useFonts({
    PlayfairDisplay_700Bold,
  });
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Image style={styles.image} source={require("./Ten.png")} />
        <Text style={styles.titleText}>Battleship New Jersey</Text>
        <Text style={styles.text}>Museum and Memorial</Text>
        <Text style={styles.address}>100 Clinton St, Camden, NJ 08103</Text>
        <View style={styles.line}></View>
        <View style={styles.box}>
          <Text style={styles.subText}>
            The Battleship New Jersey Museum and Memorial, located on the Camden
            Waterfront, offers visitors the chance to explore the most decorated
            battleship in U.S. history. Visitors can take guided tours of the
            battleship, gaining insight into its storied past and the brave men
            and women who served aboard it. The museum features interactive
            exhibits, artifacts, and oral histories, providing a comprehensive
            look at the ship's role in American military history. Don't miss the
            opportunity to climb aboard and experience firsthand what life was
            like for sailors on this formidable vessel.{" "}
          </Text>
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity onPress={() => navigation.navigate("Screen 9")}>
            <Ionicons name="chevron-back" size={40} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Ionicons name="home" size={40} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Screen 1")}>
            <Ionicons name="chevron-forward" size={40} color="black" />
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}
