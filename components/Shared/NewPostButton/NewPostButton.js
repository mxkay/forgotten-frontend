import React from "react";
import { Button } from "react-native-elements";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const NewPostButton = ({ navigation }) => {
  return (
    <Button
      icon={<FontAwesomeIcon icon="plus" size={25} color="white" />}
      buttonStyle={{
        backgroundColor: "#302EA7",
        borderRadius: 50,
        height: 50,
        width: 50,
      }}
      onPress={() => navigation.navigate("New Post")}
    />
  );
};

export default NewPostButton;
