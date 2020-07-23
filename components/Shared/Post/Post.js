import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

const Post = (props) => {
  const data = props.data;
  console.log(data);
  return (
    <View>
      <View style={styles.card}>
        <View style={styles.topOfCard}>
          <Text style={styles.icon}>{"icon"}</Text>
          <Text style={styles.lenderBorrower}>
            {data.lenderName} {"=>"} {data.borrowerName}
          </Text>
          <Text style={styles.name}>{data.name}</Text>
        </View>
        <Text style={styles.value}>${data.value}</Text>
        <Text style={styles.returnDate}>
          Expected Return: {data.returnDate}
        </Text>
        <Text style={styles.description}>Description</Text>
        <Button
          icon={<Icon name="pencil" size={15} color="white" />}
          buttonStyle={{
            backgroundColor: "#302EA7",
            borderRadius: 50,
            height: 25,
            width: 25,
          }}
          // onPress={'link to NewPost'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topOfCard: {
    // display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  icon: {
    color: "#302EA7",
  },
  card: {
    margin: 13,
    padding: 3,
    backgroundColor: "#E5E4E0",
    color: "#302EA7",
    borderRadius: 25,
  },
  lenderBorrower: {
    fontSize: 25,
    color: "#302EA7",
    padding: 8,
  },
  name: {
    fontSize: 20,
    color: "#302EA7",
    padding: 10,
  },
  value: {
    fontSize: 20,
    color: "#302EA7",
    padding: 10,
  },
  transDate: {
    fontSize: 15,
    color: "#302EA7",
  },
  description: {
    fontSize: 15,
    color: "#302EA7",
    padding: 10,
    paddingBottom: 20,
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
    justifyContent: "center",
  },
});

export default Post;
