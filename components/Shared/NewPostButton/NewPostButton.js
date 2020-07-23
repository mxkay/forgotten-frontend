import React from "react";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

const NewPostButton = ({ navigation }) => {
  return (
    <Button
      icon={<Icon name="plus" size={25} color="white" />}
      buttonStyle={{
        backgroundColor: "#302EA7",
        borderRadius: 50,
        height: 50,
        width: 50,
      }}
      onPress={() => navigation.navigate("NewPost")}
    />
  );
};

export default NewPostButton;
