import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fcfef3",
  },

  scrollView: {
    height: 200, // Set the height of the ScrollView
    width: "100%", // Example width
  },

  image: {
    width: "100%",
    height: "50%",
    borderRadius: 10,
  },

  titleText: {
    paddingLeft: 20,
    paddingTop: 0,

    marginTop: 30,
    // paddingBottom: 10,
    fontFamily: "Inter_800ExtraBold",
    fontSize: 25,
    textAlign: "left",
    color: "#28441e",
    width: "90%",
  },
  text: {
    paddingLeft: 21,
    // paddingTop: 20,

    // marginTop: 30,
    paddingBottom: 10,
    fontFamily: "Inter_700Bold",
    fontSize: 20,
    textAlign: "left",
    color: "#236d2d",
  },

  line: {
    // paddingTop: 5,s
    // paddingLeft: 30,
    // width: "87%",
    // height: 0,
    // backgroundColor: "#000000",
    // padding: 5,
  },

  box: {
    width: "90.18%",
    height: "25%",
    // backgroundColor: "#F5F5F5",
    marginTop: 10,
    borderRadius: 10,
    alignItems: "center",
    alignSelf: "center",
  },

  subText: {
    paddingTop: 15,
    // padding: 10,
    fontSize: 15,
    textAlign: "left",
    height: 1000,
    color: "#374930",
  },

  bottom: {
    position: "absolute",
    paddingTop: 10,
    width: "100%",
    height: "8%",
    backgroundColor: "#FFFFFF",
    bottom: 0,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
  },
});
