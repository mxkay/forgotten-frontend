import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const PostForm = ({ postData, handleChange, handleSubmit, handleDelete, handleCancel }) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Item"
        onChangeText={(text) => handleChange({ ...postData, name: text })}
        value={postData.name? postData.name : ''}
      />
      <TextInput
        placeholder="Icon"
        onChangeText={(text) => handleChange({ ...postData, icon: text })}
        value={postData.icon ? postData.icon : ''}
      />
      <TextInput
        placeholder="Value"
        onChangeText={(text) =>
          handleChange({ ...postData, value: Number(text) })
        }
        value={postData.value ? postData.value.toString() : ''}
      />
      <TextInput
        placeholder="Transaction Date MM/DD/YY"
        onChangeText={(text) =>
          handleChange({ ...postData, transactionDate: text })
        }
        value={postData.transactionDate ? postData.transactionDate : ''}
      />
      <TextInput
        placeholder="Anticipated Return Date MM/DD/YY"
        onChangeText={(text) => handleChange({ ...postData, returnDate: text })}
        value={postData.returnDate ? postData.returnDate : ''}
      />
      <TextInput
        placeholder="Lender Handle"
        onChangeText={(text) =>
          handleChange({ ...postData, lenderHandle: text })
        }
        value={postData.lenderHandle ? postData.lenderHandle : ''}
      />
      <TextInput
        placeholder="Borrower Handle or Name"
        onChangeText={(text) =>
          handleChange({ ...postData, borrowerHandle: text })
        }
        value={postData.borrowerHandle ? postData.borrowerHandle : ''}
      />
      {handleSubmit?
        <Button title="Submit" onPress={handleSubmit} />
        :
        <></>
      }
      {handleDelete?
        <Button title="Delete" onPress={handleDelete} />
        :
        <></>
      }
      {handleCancel?
        <Button title="Cancel" onPress={handleCancel} />
        :
        <></>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});

export default PostForm;
