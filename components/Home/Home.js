import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Platform, ScrollView } from "react-native";
import Feed from "../Shared/Feed/Feed";
import Layout from "../Shared/Layout/Layout";
import NewPostButton from "../Shared/NewPostButton/NewPostButton";

const Home = ({ navigation }) => {
  return (
    <Layout navigation={navigation}>
      <ScrollView>
        <View style={styles.container}>
        <Feed navigation={navigation} />
        </View>
      </ScrollView>
      <NewPostButton navigation={navigation} />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    backgroundColor: "#FFF",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default Home;
