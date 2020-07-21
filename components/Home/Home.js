import React from "react";
import { StyleSheet, View, Platform } from "react-native";
import Feed from "../Shared/Feed";

export default function Home() {
  return (
    <View style={styles.container}>
      {/* I think this would be how to add this component. I did not add useContext or props */}
      <Feed />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFF",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
