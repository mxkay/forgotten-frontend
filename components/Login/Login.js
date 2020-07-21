import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import axios from "axios";

import UserDataContext from '../Shared/UserDataContext/UserDataContext';

const Login = () => {
  // userData for the user that is currently logged in
  const { userData, setUserData } = useContext(UserDataContext);

  // inputted sign in handle
  const [input, setInput] = useState("");
  // creation of new user
  const [newUser, setNewUser] = useState({ name: "", handle: "", email: "" });

  const attemptLogin = () => {
    const makeAPICall = async () => {
      const res = await axios(
        `https://immense-tor-64805.herokuapp.com/api/user/handle/${input}`
      );
      // if API call returns empty array, handle doesn't exist
      if (res.data.length === 0) {
        Alert.alert("Invalid handle");
        // if API does find a match, return that user's info
      } else {
        setUserData(res.data[0]);
      }
    };
    makeAPICall();
  }

  const onCreateSubmit = () => {
    const makeAPICall = async () => {
      // API call checking if handle desired already exists
      const res1 = await axios(
        `https://immense-tor-64805.herokuapp.com/api/user/handle/${newUser.handle}`
      );
      console.log('res1.data: ', res1.data);
      // if data returned has content, handle exists
      if (res1.data.length > 0) {
        Alert.alert("Handle already taken");
        // if not, create the new user
      } else {
        const res2 = await axios({
          url: `https://immense-tor-64805.herokuapp.com/api/user`,
          method: "POST",
          data: newUser,
        });
        await setInput(newUser.handle);
        await setNewUser({ name: "", handle: "", email: "" });
      }
    };
    makeAPICall();
  }

  return (
    <View>
      {/* Sign in form */}
      <View>
        <Text>Sign In</Text>
        <TextInput
          placeholder="Handle"
          onChangeText={(text) => setInput(text.toLowerCase())}
          value={input}
        />
        <Button
          title="Submit"
          onPress={attemptLogin}
        />
      </View>
      {/* Create account form */}
      <View>
        <Text>Don't have an account? Make one below: </Text>
        <TextInput
          placeholder="First Name"
          onChangeText={(text) => setNewUser({ ...newUser, name: text })}
          value={newUser.name}
        />
        <TextInput
          placeholder="Handle"
          onChangeText={(text) =>
            setNewUser({ ...newUser, handle: text.toLowerCase() })
          }
          value={newUser.handle}
        />
        <TextInput
          placeholder="Email"
          onChangeText={(text) => setNewUser({ ...newUser, email: text })}
          value={newUser.email}
        />
      </View>
      <Button
        title="Submit"
        onPress={onCreateSubmit}
      />
    </View>
  );
};

export default Login;
