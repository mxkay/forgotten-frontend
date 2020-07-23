import React from "react";
import { View, StyleSheet } from "react-native";
import { Label, Input, Button } from 'react-native-elements';

const PostForm = ({ postData, handleChange, handleSubmit, handleDelete, handleCancel }) => {
  return (
    <View style={styles.container}>
      {/* <Label/> */}
      <Input
        label="What was exchanged?"
        placeholder="Item"
        onChangeText={(text) => handleChange({ ...postData, name: text })}
        value={postData.name? postData.name : ''}
      />
      <Input
        label="Which icon looks best?"
        placeholder="Icon name"
        onChangeText={(text) => handleChange({ ...postData, icon: text })}
        value={postData.icon ? postData.icon : ''}
      />
      <Input
        label="How much was this worth?"
        placeholder="$$.$$"
        onChangeText={(text) =>
          handleChange({ ...postData, value: Number(text) })
        }
        value={postData.value ? postData.value.toString() : ''}
      />

      <Input
        label="Transaction date"
        placeholder="MM/DD/YY"
        onChangeText={(text) =>
          handleChange({ ...postData, transactionDate: text })
        }
        value={postData.transactionDate ? postData.transactionDate : ''}
      />
      <Input
        label="Expected return date"
        placeholder="MM/DD/YY"
        onChangeText={(text) => handleChange({ ...postData, returnDate: text })}
        value={postData.returnDate ? postData.returnDate : ''}
      />
      <Input
        label="Lender handle"
        placeholder="JoSchmo"
        onChangeText={(text) =>
          handleChange({ ...postData, lenderHandle: text })
        }
        value={postData.lenderHandle ? postData.lenderHandle : ''}
      />
      <Input
        label="Borrower handle"
        placeholder="JoSchmo"
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
