import React, { useState, useEffect } from "react";
import axios from "axios";
import Icon from "react-native-vector-icons/FontAwesome";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button, ButtonGroup } from 'react-native-elements';

const PostForm = ({ postData, handleChange, handleSubmit, handleDelete, handleCancel }) => {
  const buttonsIsBorrowing = ['lending', 'borrowing'];
  const buttonsOtherIsUser = ["is not a user", 'is a user'];
  const [ isBorrowing, setIsBorrowing ] = useState(0);
  const [ otherIsUser, setOtherIsUser ] = useState(1);
  const [ otherHandle, setOtherHandle ] = useState('');
  const [ otherName, setOtherName ] = useState('');
  const [ otherIsFound, setOtherIsFound ] = useState(false);

  // when the user changes isBorrowing,
  // or when the user changes otherIsUser,
  // clear all lender and borrower information and rerun handleOtherChange
  useEffect(() => {
    handleChange({ ...postData, lenderID: '', lenderName: '', borrowerID: '', borrowerName: '' });
    if( otherIsUser && otherHandle ) {
      handleOtherChange(otherHandle);
    }
    else if ( !otherIsUser && otherName ) {
      handleOtherChange(otherName);
    }
  },[isBorrowing,otherIsUser])

  // finds a user ID by a given handle
  // returns empty string if no user is found or there is no response
  const findUserIDByHandle = async (handle) => {
    const res = await axios({
      url: `https://immense-tor-64805.herokuapp.com/api/user/handle/${handle}`,
      method: "GET"
    }).catch(console.error);
    return res.data? res.data[0]? res.data[0]._id : '' : '';
  }

  // update the lenderID, lenderName, borrowerID, and borrowerName
  // based on the text argument, otherIsUser, and isBorrowing
  const handleOtherChange = async (text) => {
    // if the other party is a user,
    if( otherIsUser ) {
      setOtherHandle(text);
      // search for their account
      const otherID = await findUserIDByHandle(text);
      // if I find an account,
      if( otherID ) {
        // if the user is borrowing
        if( isBorrowing ) {
          // set the lenderID to the otherID, and clear lenderName, borrowerID, and borrowerName
          handleChange({ ...postData, lenderID: otherID, lenderName: '', borrowerID: '', borrowerName: '' });
        }
        // if the user is lending,
        else {
          // set the borrowerID to the otherID, and clear borrowerName, lenderID, and lenderName
          handleChange({ ...postData, lenderID: '', lenderName: '', borrowerID: otherID, borrowerName: '' });
        }
        setOtherIsFound(true);
      }
      else {
        setOtherIsFound(false);
      }
    }
    // if the other party is not a user
    else {
      setOtherName(text);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={{flex: 1, textAlign: 'center'}}>I am ...</Text>
      <ButtonGroup
        onPress={(selection) => {setIsBorrowing(selection)}}
        selectedIndex={isBorrowing}
        buttons={buttonsIsBorrowing}
        containerStyle={{height: 40}}
      />
      <Text style={{flex: 1, textAlign: 'center'}}>{`${isBorrowing?'from':'to'} someone who`}</Text>
      <ButtonGroup
        onPress={(selection) => {setOtherIsUser(selection)}}
        selectedIndex={otherIsUser}
        buttons={buttonsOtherIsUser}
        containerStyle={{height: 40}}
      />

      {otherIsUser?
        <Input
          label={`Who are you ${isBorrowing?'borrowing this from':'lending this to'}?`}
          placeholder="user handle"
          onChangeText={(text) => handleOtherChange(text)}
          value={otherHandle}
          rightIcon={
            <Icon
              name={otherIsFound? 'check-circle': 'times-circle'}
              size={24}
              color={otherIsFound? 'green': 'red'}
            />
          }
        />
        :
        <Input
          label={`Who are you ${isBorrowing?'borrowing this from':'lending this to'}?`}
          placeholder="name"
          onChangeText={(text) => handleOtherChange(text)}
          value={otherName}
          rightIcon={
            <Icon
              name={otherName? 'check-circle': 'times-circle'}
              size={24}
              color={otherName? 'green': 'red'}
            />
          }
        />
      }
      <Input
        label={`What are you ${isBorrowing?'borrowing':'lending'}?`}
        placeholder="item"
        onChangeText={(text) => handleChange({ ...postData, name: text })}
        value={postData.name? postData.name : ''}
        rightIcon={
          <Icon
            name={postData.name? 'check-circle': 'times-circle'}
            size={24}
            color={postData.name? 'green': 'red'}
          />
        }
      />
      <Input
        label="Which icon fits best?"
        placeholder="icon name"
        onChangeText={(text) => handleChange({ ...postData, icon: text })}
        value={postData.icon ? postData.icon : ''}
      />
      <Input
        label="How much was this worth? (optional)"
        placeholder="0"
        onChangeText={(text) =>
          handleChange({ ...postData, value: Number(text) })
        }
        value={postData.value ? postData.value.toString() : ''}
        leftIcon={
          <Icon
            name='money'
            size={24}
            color='black'
          />
        }
        rightIcon={
          <Icon
            name='check-circle'
            size={24}
            color='green'
          />
        }
      />
      <Input
        label="Transaction date"
        placeholder="MM/DD/YY"
        onChangeText={(text) =>
          handleChange({ ...postData, transactionDate: text })
        }
        value={postData.transactionDate ? postData.transactionDate : ''}
        rightIcon={
          <Icon
            name={postData.transactionDate && postData.transactionDate.length===8? 'check-circle': 'times-circle'}
            size={24}
            color={postData.transactionDate && postData.transactionDate.length===8? 'green': 'red'}
          />
        }
      />
      <Input
        label="Expected return date (optional)"
        placeholder="MM/DD/YY"
        onChangeText={(text) => handleChange({ ...postData, returnDate: text })}
        value={postData.returnDate ? postData.returnDate : ''}
        rightIcon={
          <Icon
            name={postData.returnDate && postData.returnDate.length===8? 'check-circle': 'times-circle'}
            size={24}
            color={postData.returnDate && postData.returnDate.length===8? 'green': 'red'}
          />
        }
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
