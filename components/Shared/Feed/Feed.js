import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import axios from "axios";
import Post from "../Post/Post";

const Feed = (props) => {
  const [transactions, setTransaction] = useState([]);

  useEffect(() => {
    const makeAPICall = async () => {
      try {
        const response = await axios(
          `https://immense-tor-64805.herokuapp.com/api/transaction`
        );
        console.log("Transactions - useEffect - response", response);
        setTransaction(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    makeAPICall();
  }, []);

  const transactionArr = transactions.map((element) => (
    <Post data={element} key={element._id} />
  ));

  return <View style={styles.container}>{transactionArr}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
});

export default Feed;
