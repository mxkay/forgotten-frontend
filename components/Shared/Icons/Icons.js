import React, { useState } from "react";
import { View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Picker } from "@react-native-community/picker";

const Icons = () => {
  const [selectedValue, setSelectedValue] = useState("grin-beam");

  return (
    <View>
      <FontAwesomeIcon icon={selectedValue} color={"blue"} size={32} />
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 100 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
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
        <Picker.Item label="gem" value="gem" />
        <Picker.Item label="glasses" value="glasses" />
        <Picker.Item label="hat-cowboy" value="hat-cowboy" />
        <Picker.Item label="headphones" value="headphones" />
        <Picker.Item label="shoe-prints" value="shoe-prints" />
        <Picker.Item label="tshirt" value="tshirt" />
        <Picker.Item label="utensils" value="utensils" />
      </Picker>
    </View>
  );
};

export default Icons;
