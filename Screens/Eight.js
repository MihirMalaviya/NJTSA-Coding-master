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
export default function Eight() {
  const navigation = useNavigation();
  let [fontsLoaded] = useFonts({
    PlayfairDisplay_700Bold,
  });
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Image style={styles.image} source={require("./Eight.png")} />
        <Text style={styles.titleText}>Thomas Edison</Text>
        <Text style={styles.Text}>National Historical Park</Text>
        <View style={styles.line}></View>
        <View style={styles.box}>
          <Text style={styles.subText}>
            Thomas Edison National Historical Park, located in West Orange,
            preserves the laboratory and home of Thomas Edison, one of America's
            greatest inventors. Visitors can take guided tours of Edison's
            laboratory complex, where they can see firsthand the inventions and
            innovations that shaped the modern world. The park also includes
            Edison's Glenmont Estate, a beautifully preserved mansion where
            visitors can explore the inventor's private residence and gardens.
            With exhibits, demonstrations, and interactive experiences, the
            Thomas Edison National Historical Park offers a fascinating glimpse
            of the work of a visionary genius.
          </Text>
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity onPress={() => navigation.navigate("Screen 7")}>
            <Ionicons name="chevron-back" size={40} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Ionicons name="home" size={40} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Screen 9")}>
            <Ionicons name="chevron-forward" size={40} color="black" />
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}
