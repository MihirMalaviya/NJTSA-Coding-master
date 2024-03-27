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
export default function Six() {
  const navigation = useNavigation();
  let [fontsLoaded] = useFonts({
    PlayfairDisplay_700Bold,
  });
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Image style={styles.image} source={require("./Six.png")} />
        <Text style={styles.titleText}>Grounds For Sculpture</Text>
        <Text style={styles.address}>
          80 Sculptors Way, Hamilton Township, NJ 08619
        </Text>

        <View style={styles.line}></View>
        <View style={styles.box}>
          <Text style={styles.subText}>
            Grounds For Sculpture is a 42-acre sculpture park and museum located
            in Hamilton Township, featuring over 270 contemporary sculptures set
            within beautifully landscaped gardens. Visitors can wander through
            winding pathways, discovering thought-provoking artworks by renowned
            artists such as Seward Johnson and George Segal. The park also hosts
            rotating exhibitions, educational programs, and special events,
            providing opportunities for visitors to engage with art in dynamic
            and immersive ways. Don't miss the chance to dine at Rat's
            Restaurant, a French-inspired eatery nestled within the park,
            offering exquisite cuisine in a picturesque setting.
          </Text>
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity onPress={() => navigation.navigate("Screen 5")}>
            <Ionicons name="chevron-back" size={40} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Ionicons name="home" size={40} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Screen 7")}>
            <Ionicons name="chevron-forward" size={40} color="black" />
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}
