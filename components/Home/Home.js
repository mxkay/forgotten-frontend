import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import Feed from "../Shared/Feed/Feed";
import Layout from '../Shared/Layout/Layout'

const Home = ({ navigation }) => {
  return (
    <Layout navigation={navigation}>
      <View style={styles.container}>
        <Text>Under Construction</Text>
        <Feed />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFF",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default Home;
