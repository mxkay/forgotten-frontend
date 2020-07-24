import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import UserDataContext from "../UserDataContext/UserDataContext";
import SelectedPostContext from "../SelectedPostContext/SelectedPostContext";

const Post = ({ data, navigation }) => {
  const { userData, setUserDataContext } = useContext(UserDataContext);
  const { selectedPost, setSelectedPost } = useContext(SelectedPostContext);

  let formatDate = () => {
    let date = new Date(data.returnDate);
    let dateFormatted = `${
      date.getMonth() + 1
    }/${date.getDate()}/${date.getFullYear()}`;
    return dateFormatted;
  };

  return (
    <View>
      <View style={styles.card}>
        <View style={styles.topOfCard}>
          <Text style={styles.icon}>
            <Icon
              name={data.icon?data.icon:"empire"} size={25} color="black"
            />
          </Text>
          <View style={styles.lenderBorrower}>
            <Text style={styles.lenderBorrowerText}>{data.lenderName}</Text>
            <FontAwesomeIcon style={styles.handIcon} icon="caret-right" />
            <Text style={styles.lenderBorrowerText}>{data.borrowerName}</Text>
          </View>
          <Text style={styles.name}>{data.name}</Text>
        </View>
        <Text style={styles.value}>${data.value}</Text>
        <Text style={styles.returnDate}>Expected Return: {formatDate()}</Text>
        { userData._id===data.lenderID || userData._id===data.borrowerID ?
          <Button
            icon={<Icon name="pencil" size={20} color="white" />}
            buttonStyle={{
              backgroundColor: "#302EA7",
              borderRadius: 50,
              height: 30,
              width: 30,
            }}
            onPress={() => {
              setSelectedPost(data._id)
              navigation.navigate('Edit Post')
            }}
          />
          :
          <></>
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topOfCard: {
    flexDirection: "row",
    alignItems: "stretch",
  },
  icon: {
    color: "#302EA7",
    height: 20,
    width: 50,
    textAlign: "center",
  },
  card: {
    padding: 10,
    backgroundColor: "#ECECEC",
    color: "#302EA7",
    borderBottomColor: "#302EA7",
    borderBottomWidth: 1,
  },
  lenderBorrower: {
    flex: 1,
    flexDirection: "row",
    textAlign: "left",
    textAlignVertical: "center",
  },
  lenderBorrowerText: {
    fontSize: 22,
    color: "#302EA7",
    fontWeight: "bold",
  },
  name: {
    fontSize: 25,
    color: "#302EA7",
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  value: {
    fontSize: 20,
    color: "#302EA7",
  },
  transDate: {
    fontSize: 15,
    color: "#302EA7",
  },
  description: {
    fontSize: 15,
    color: "#302EA7",
    paddingBottom: 20,
  },
  returnDate: {
    fontSize: 15,
    display: "flex",
    justifyContent: "flex-end",
    color: "#302EA7",
  },
  description: {
    fontSize: 15,
    color: "#302EA7",
    display: "flex",
    justifyContent: "center",
  },
  handIcon: {
    color: "blue",
    alignSelf: "center",
    height: "20",
    marginLeft: 5,
    marginRight: 5,
  },
});

export default Post;
