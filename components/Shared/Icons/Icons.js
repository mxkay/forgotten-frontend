import React, { useState } from "react";
import { View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Picker } from "@react-native-community/picker";

const Icons = () => {
  const [selectedValue, setSelectedValue] = useState("sad-cry");

  return (
    <View>
      <FontAwesomeIcon icon={selectedValue} />
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 100 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="grin-beam" value="grin-beam" />
        <Picker.Item label="sad-cry" value="sad-cry" />
        <Picker.Item label="book" value="book" />
        <Picker.Item label="car" value="car" />
        <Picker.Item label="tshirt" value="tshirt" />
        <Picker.Item label="utensils" value="utensils" />
        <Picker.Item label="baseball-ball" value="baseball-ball" />
        <Picker.Item label="bicycle" value="bicycle" />
        <Picker.Item label="clock" value="clock" />
      </Picker>
    </View>
  );
};

{
}

export default Icons;
