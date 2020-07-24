import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import axios from "axios";
import Post from "../Post/Post";

const Feed = ({ lenderID, borrowerID, mode }) => {
  const [transactions, setTransactions] = useState([]);

  const convertMongoDateTimeToDate = (mongoDateTime) => {
    return {
      year: mongoDateTime.slice(0,4),
      month: mongoDateTime.slice(5,7),
      day: mongoDateTime.slice(8,10),
    }
  }

  if(transactions[0]) console.log('year:', convertMongoDataTimeToDate(transactions[0].transactionDate));
  
  useEffect(() => {
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
    .filter(
      transaction => {
        return (
          mode === 'strict'?  // all queries must match
            (!borrowerID || transaction.borrowerID == borrowerID) &&
            (!lenderID || transaction.lenderID == lenderID)
          :
            ( !borrowerID && !lenderID) ||
            ( borrowerID && transaction.borrowerID == borrowerID) ||
            ( lenderID && transaction.lenderID == lenderID)
        );
      }
    )
    .map(
      (transaction, index) => {
        return (
            <Post data={transaction} key={index} />
        );
      }
    );

  return <View style={styles.container}>{posts}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#bbe1fa",
  },
});

export default Feed;
