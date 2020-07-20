import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import axios from "axios";

const Login = () => {
  const [input, setInput] = useState("");
  const [user, setUser] = useState({});
  const [newUser, setNewUser] = useState({ name: "", handle: "", email: "" });
  console.log(newUser);

  return (
    <View>
      <View>
        <Text>Sign In</Text>
        <TextInput
          placeholder="Handle"
          onChangeText={(text) => setInput(text.toLowerCase())}
          value={input}
        />
        <Button
          title="Submit"
          onPress={() => {
            const makeAPICall = async () => {
              try {
                const res = await axios(
                  `https://immense-tor-64805.herokuapp.com/api/user/handle/${input}`
                );
                setUser(res.data);
              } catch (err) {
                console.error(err);
              }
            };
            makeAPICall();
          }}
        />
      </View>
      <View>
        <Text>Don't have an account? Make one below: </Text>
        <TextInput
          placeholder="First Name"
          onChangeText={(text) => setNewUser({ ...newUser, name: text })}
          value={newUser.name}
        />
        <TextInput
          placeholder="Handle"
          onChangeText={(text) => setNewUser({ ...newUser, handle: text })}
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
        onPress={() => {
          const makeAPICall = async () => {
            try {
              const res = await axios({
                url: `https://immense-tor-64805.herokuapp.com/api/user`,
                method: "POST",
                data: newUser,
              });
              console.log(res.data);
            } catch (err) {
              console.error(err);
            }
          };
          makeAPICall();
        }}
      />
    </View>
  );
};

export default Login;
