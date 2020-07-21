import React from "react";
import { Text, View } from "react-native";

const InfoMessage = ({ content }) => {
  return (
    <View>
      <Text>{content}</Text>
    </View>
  );
};

export default InfoMessage;
