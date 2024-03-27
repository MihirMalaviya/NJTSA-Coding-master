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
export default function Four() {
  const navigation = useNavigation();
  let [fontsLoaded] = useFonts({
    PlayfairDisplay_700Bold,
  });
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Image style={styles.image} source={require("./Four.png")} />
        <Text style={styles.titleText}>Liberty State Park</Text>
        <View style={styles.line}></View>
        <View style={styles.box}>
          <Text style={styles.subText}>
            Liberty State Park, situated on the Hudson River waterfront, offers
            breathtaking views of the Manhattan skyline, the Statue of Liberty,
            and Ellis Island. Visitors can explore numerous recreational
            facilities, including biking and walking paths, picnic areas, and
            playgrounds, making it an ideal destination for outdoor enthusiasts.
            The park is also home to the Liberty Science Center, where
            interactive exhibits and educational programs cater to visitors of
            all ages, fostering a deeper understanding of science and
            technology. Don't miss the Liberty Walk, a promenade that takes you
            on a journey through history, showcasing monuments and memorials
            dedicated to America's past.
          </Text>
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity onPress={() => navigation.navigate("Screen 3")}>
            <Ionicons name="chevron-back" size={40} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Ionicons name="home" size={40} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Screen 5")}>
            <Ionicons name="chevron-forward" size={40} color="black" />
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}
