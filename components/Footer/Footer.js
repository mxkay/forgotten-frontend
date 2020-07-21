import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text>
        © Pending. Contributors Mohammad Hassan, Tyrone Pugh, Will Tidwell and
        Kay Vail
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#FFF",
  },
});

export default Footer;
