import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const PostForm = ({ handleChange, handleSubmit, postData }) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Item"
        onChangeText={(text) => handleChange({ ...postData, name: text })}
        value={postData._id ? postData.name : null}
      />
      <TextInput
        placeholder="Icon"
        onChangeText={(text) => handleChange({ ...postData, icon: text })}
        value={postData._id ? postData.icon : null}
      />
      <TextInput
        placeholder="Value"
        onChangeText={(text) =>
          handleChange({ ...postData, value: Number(text) })
        }
        value={postData._id ? postData.value.toString() : null}
      />
      <TextInput
        placeholder="Transaction Date MM/DD/YY"
        onChangeText={(text) =>
          handleChange({ ...postData, transactionDate: text })
        }
        value={postData._id ? postData.transactionDate : null}
      />
      <TextInput
        placeholder="Anticipated Return Date MM/DD/YY"
        onChangeText={(text) => handleChange({ ...postData, returnDate: text })}
        value={postData._id ? postData.returnDate : null}
      />
      <TextInput
        placeholder="Lender Handle"
        onChangeText={(text) =>
          handleChange({ ...postData, lenderHandle: text })
        }
        value={postData._id ? postData.lenderHandle : null}
      />
      <TextInput
        placeholder="Borrower Handle or Name"
        onChangeText={(text) =>
          handleChange({ ...postData, borrowerHandle: text })
        }
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
