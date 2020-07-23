import React, { useState, useContext } from "react";
import {
  Text,
  View,
  TextInput,
  Button,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
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
    <KeyboardAvoidingView behavior="padding" style={styles.main}>
      {/* Sign in form */}
      <View style={styles.signIn}>
        <Text style={styles.title}>Sign In</Text>
        <TextInput
          style={styles.placeholder}
          placeholder="Handle"
          onChangeText={(text) => setInput(text.toLowerCase())}
          value={input}
        />
        <Button style={styles.button} title="Submit" onPress={attemptLogin} />
      </View>
      {/* Create account form */}
      <View style={styles.newUser}>
        <Text style={styles.title}>
          Don't have an account? Make one below:{" "}
        </Text>
        <TextInput
          style={styles.placeholder}
          placeholder="First Name"
          onChangeText={(text) => setNewUser({ ...newUser, name: text })}
          value={newUser.name}
        />
        <TextInput
          style={styles.placeholder}
          placeholder="Handle"
          onChangeText={(text) =>
            setNewUser({ ...newUser, handle: text.toLowerCase() })
          }
          value={newUser.handle}
        />
        <TextInput
          style={styles.placeholder}
          placeholder="Email"
          onChangeText={(text) => setNewUser({ ...newUser, email: text })}
          value={newUser.email}
        />
        <Button style={styles.button} title="Submit" onPress={onCreateSubmit} />
      </View>
      <View>
        {isValid === false ? <InfoMessage content="Invalid Handle" /> : null}
        {isUnique === false ? (
          <InfoMessage content="Handle Already Taken" />
        ) : null}
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#bbe1fa",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  signIn: {
    width: "70%",
    // padding: 30,
    textAlign: "center",
    backgroundColor: "#ECECEC",
    // borderTopRightRadius: 50,
    borderRadius: 30,
    // borderTopLeftRadius: 50,
    padding: 5,
    margin: 30,
  },
  newUser: {
    width: "70%",

    // paddingTop: 0,
    padding: 10,
    textAlign: "center",
    backgroundColor: "#ECECEC",
    // borderBottomLeftRadius: 50,
    // borderBottomRightRadius: 50,
    borderRadius: 30,
  },
  placeholder: {
    textAlign: "left",
    padding: 2,
    color: "black",
    fontSize: 18,
    paddingLeft: 20,
  },
  button: {
    borderWidth: 2,
    borderRadius: 24,
    backgroundColor: "#302EA7",
  },
  title: {
    padding: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: "#302ea7",
    width: "100%",
    textAlign: "center",
  },
});

export default Login;