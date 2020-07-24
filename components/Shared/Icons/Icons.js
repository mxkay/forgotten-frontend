import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Picker } from "@react-native-community/picker";

const Icons = ({ handleChange, postData }) => {
  const [selectedValue, setSelectedValue] = useState(
    postData.icon ? postData.icon : "grin-beam"
  );

  useEffect(
    () => setSelectedValue(postData.icon ? postData.icon : "grin-beam"),
    [postData.icon]
  );

  const combinedFunction = (itemValue) => {
    setSelectedValue(itemValue);
    handleChange({ ...postData, icon: itemValue });
  };

  return (
    <View style={styles.container}>
      <FontAwesomeIcon
        style={styles.icon}
        icon={selectedValue}
        color={"blue"}
        size={32}
      />
      <Picker
        style={styles.picker}
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => combinedFunction(itemValue)}
      >
        <Picker.Item label="grin-beam" value="grin-beam" />
        <Picker.Item label="sad-cry" value="sad-cry" />
        <Picker.Item label="handshake" value="handshake" />
        <Picker.Item label="glass-cheers" value="glass-cheers" />
        <Picker.Item label="baseball-ball" value="baseball-ball" />
        <Picker.Item label="bicycle" value="bicycle" />
        <Picker.Item label="book" value="book" />
        <Picker.Item label="car" value="car" />
        <Picker.Item label="charging-station" value="charging-station" />
        <Picker.Item label="clock" value="clock" />
        <Picker.Item label="fighter-jet" value="fighter-jet" />
        <Picker.Item label="gem" value="gem" />
        <Picker.Item label="glasses" value="glasses" />
        <Picker.Item label="hat-cowboy" value="hat-cowboy" />
        <Picker.Item label="headphones" value="headphones" />
        <Picker.Item label="laptop" value="laptop" />
        <Picker.Item label="paperclip" value="paperclip" />
        <Picker.Item label="pizza-slice" value="pizza-slice" />
        <Picker.Item label="puzzle-piece" value="puzzle-piece" />
        <Picker.Item label="robot" value="robot" />
        <Picker.Item label="rocket" value="rocket" />
        <Picker.Item label="seedling" value="seedling" />
        <Picker.Item label="shapes" value="shapes" />
        <Picker.Item label="shoe-prints" value="shoe-prints" />
        <Picker.Item label="tshirt" value="tshirt" />
        <Picker.Item label="utensils" value="utensils" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    margin: 0,
    padding: 0,
  },
  picker: {
    margin: 0,
    padding: 0,
    width: 100,
  },
});

export default Icons;
