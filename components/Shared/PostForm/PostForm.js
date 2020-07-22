import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const PostForm = ({ handleChange, handleSubmit, postData }) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Item"
        onChangeText={(text) => handleChange(text)}
        value={postData._id ? postData.name : null}
      />
      <TextInput
        placeholder="Icon"
        onChangeText={(text) => handleChange(text)}
        value={postData._id ? postData.icon : null}
      />
      <TextInput
        placeholder="Value"
        onChangeText={(text) => handleChange(text)}
        value={postData._id ? postData.value.toString() : null}
      />
      <TextInput
        placeholder="Transaction Date"
        onChangeText={(text) => handleChange(text)}
        value={postData._id ? postData.transactionDate : null}
      />
      <TextInput
        placeholder="Anticipated Return Date"
        onChangeText={(text) => handleChange(text)}
        value={postData._id ? postData.returnDate : null}
      />
      <TextInput
        placeholder="Lender Handle"
        onChangeText={(text) => handleChange(text)}
        value={postData._id ? postData.lenderHandle : null}
      />
      <TextInput
        placeholder="Borrower Handle or Name"
        onChangeText={(text) => handleChange(text)}
        value={postData._id ? postData.borrowerHandle : null}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});

export default PostForm;
