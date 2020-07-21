import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';



export default function Post() {
    const data = [ {
        name: "Frisbees",
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
    <ScrollView>
    <View style={styles.card}>
        <View style={styles.topOfCard}>
            <Text style={styles.icon}>{'icon'}</Text>
            <Text 
            style={styles.lenderBorrower}>{data[0].lenderName} {'=>'} {data[0].borrowerName}</Text>
            <Text style={styles.name}>{data[0].name}</Text>
        </View>
        <Text style={styles.value}>{data[0].value}</Text>
        <Text style={styles.returnDate}>Expected Return: {data[0].returnDate}</Text>
        <Text style={styles.description}>Description</Text>
    </View>
  </ScrollView>
  )
}


const styles = StyleSheet.create({
    topOfCard:{
        // display: "flex",
        flexDirection: "row",
        justifyContent: "space-around"
    },
    icon:{
        color: "#302EA7"
    },
    card:{
        margin: 13,
        padding: 3,
        backgroundColor: '#E5E4E0',
        color: "#302EA7",
        borderRadius: 25
    },
    lenderBorrower:{
        fontSize: 25,
        color: "#302EA7",
        padding: 8
    },
    name: {
        fontSize: 20,
        color: "#302EA7",
        padding: 10

    },
    value: {
        fontSize: 20,
        color: "#302EA7",
        padding: 10
    },
    transDate: {
        fontSize: 15,
        color: "#302EA7"
    },
    description: {
        fontSize: 15,
        color: "#302EA7",
        padding: 10,
        paddingBottom: 20

    },
    returnDate: {
        fontSize: 15,
        display: "flex",
        justifyContent: "flex-end",
        color: "#302EA7",
        padding: 10,
    },
    description: {
        fontSize: 15,
        color: "#302EA7",
        padding: 10,
        paddingBottom: 20,
        display: "flex",
        justifyContent: "center"

    }



})

