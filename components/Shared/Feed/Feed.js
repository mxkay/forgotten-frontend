import React, { useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { StyleSheet, View, Dimensions } from "react-native";
import axios from "axios";
import Post from "../Post/Post";

const Feed = ({ lenderID, borrowerID, mode, navigation }) => {
  const [transactions, setTransactions] = useState([]);

  const compareTransactionDateTime = (firstTransaction, secondTransaction) => {
    if (firstTransaction.transactionDate > secondTransaction.transactionDate)
      return -1;
    else if (
      firstTransaction.transactionDate < secondTransaction.transactionDate
    )
      return 1;
    else return 0;
  };

  useFocusEffect(() => {
    const makeAPICall = async () => {
      try {
        const response = await axios(
          `https://immense-tor-64805.herokuapp.com/api/transaction`
        );
        setTransactions(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    makeAPICall();
  }, []);

  const posts = transactions
    .filter((transaction) => {
      return mode === "strict" // all queries must match
        ? (!borrowerID || transaction.borrowerID == borrowerID) &&
            (!lenderID || transaction.lenderID == lenderID)
        : (!borrowerID && !lenderID) ||
            (borrowerID && transaction.borrowerID == borrowerID) ||
            (lenderID && transaction.lenderID == lenderID);
    })
    .sort((firstTransaction, secondTransaction) =>
      compareTransactionDateTime(firstTransaction, secondTransaction)
    )
    .map((transaction, index) => {
      return <Post data={transaction} key={index} navigation={navigation} />;
    });

  return <View style={styles.container}>{posts}</View>;
};

const styles = StyleSheet.create({
  container: {
    maxWidth: 500,
    width: Dimensions.get("window").width,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "stretch",
    backgroundColor: "#bbe1fa",
  },
});

export default Feed;
