import React, { useState, useContext } from "react";
import { Text, View, TextInput, Button } from "react-native";
import axios from "axios";
import InfoMessage from "../Shared/InfoMessage/InfoMessage";
import UserDataContext from "../Shared/UserDataContext/UserDataContext";


const Login = () => {

  // userData for the user that is currently logged in
  const { userData, setUserData } = useContext(UserDataContext);

  // inputted sign in handle
  const [input, setInput] = useState("");
  // creation of new user
  const [newUser, setNewUser] = useState({ name: "", handle: "", email: "" });

  const [isValid, setIsValid] = useState(true);
  const [isUnique, setIsUnique] = useState(true);

  const attemptLogin = () => {
    const makeAPICall = async () => {
      // clear any other errors
      setIsUnique(true);
      const res = await axios(
        `https://immense-tor-64805.herokuapp.com/api/user/handle/${input}`
      );
      // if API call returns data, set that value to userData
      if (res.data.length > 0) {
        setUserData(res.data[0]);
        // if not, handle is not valid
      } else {
        setIsValid(false);
      }
    };
    makeAPICall();
  };

  const onCreateSubmit = () => {
    const makeAPICall = async () => {
      // clear any other errors
      setIsValid(true);
      // API call checking if handle desired already exists
      const res1 = await axios(
        `https://immense-tor-64805.herokuapp.com/api/user/handle/${newUser.handle}`
      );
      // if data returned has content, handle already exists
      if (res1.data.length > 0) {
        setIsUnique(false);
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
  };

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
        <Button title="Submit" onPress={attemptLogin} />
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
        <Button title="Submit" onPress={onCreateSubmit} />
      </View>
      <View>
        {isValid === false ? <InfoMessage content="Invalid Handle" /> : null}
        {isUnique === false ? (
          <InfoMessage content="Handle Already Taken" />
        ) : null}
      </View>
    </View>
  );
};

export default Login;
