import React from "react";
import { Text, View, StyleSheet } from "react-native";

const InfoMessage = ({ content }) => {
  return (
    <View>
      <Text style={styles.text}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "red",
  },
});

export default InfoMessage;
