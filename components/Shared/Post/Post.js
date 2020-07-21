import React from 'react';
import { Text, View, StyleSheet } from 'react-native';



export default function Post() {
    const data = [ {
        name: "Frisbee",
        icon: "frisbee",
        value: 5,
        transactionDate: "2020 - 01 - 30",
        returnDate: "2020 - 08 - 18",
        lenderID: "5f15d26d369235313e8f3089",
        lenderName: "Will",
        borrowerID: "",
        borrowerName: "Kay",
        creator: "user1._id",
      }]
    console.log(data[0])
  return (
  <View>
      <div></div>
    <Text>{data[0].name}</Text>
    <Text>{data[0].value}</Text>
    <Text>{data[0].transactionDate}</Text>
    <Text>Expected Return: {data[0].returnDate}</Text>
    <Text>{data[0].lenderName}</Text>
    <Text> => {data[0].borrowerName}</Text>
  </View>
  )
}


const styles = StyleSheet.create

