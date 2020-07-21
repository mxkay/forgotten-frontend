import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import axios from "axios";

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
    <>
      <Text>{element.name}</Text>
      <Text>{element._id}</Text>
    </>
    // <Post data={transactions} key={transactions._id} />
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
