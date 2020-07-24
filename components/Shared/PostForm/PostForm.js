import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Icon from "react-native-vector-icons/FontAwesome5";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button, ButtonGroup } from "react-native-elements";
import UserDataContext from "../UserDataContext/UserDataContext";
import { ScrollView } from "react-native-gesture-handler";
import Icons from "../Icons/Icons";

const PostForm = ({
  postData,
  handleChange,
  handleSubmit,
  handleDelete,
  handleCancel,
  initial
}) => {
  // userData for the user that is currently logged in
  const { userData, setUserData } = useContext(UserDataContext);

  const buttonsIsBorrowing = ["lending", "borrowing"];
  const buttonsOtherIsUser = ["is not a user", "is a user"];
  const [isBorrowing, setIsBorrowing] = useState(0);
  const [otherIsUser, setOtherIsUser] = useState(1);
  const [otherHandle, setOtherHandle] = useState("");
  const [otherName, setOtherName] = useState("");
  const [otherIsFound, setOtherIsFound] = useState(false);
  
  const mongoDateTimeToDateString = (mongoDateTime) => {
    if ((typeof mongoDateTime) === "string" && mongoDateTime.length === 24) {
      const dateString =
        mongoDateTime.substring(8,10) + "/" +
        mongoDateTime.substring(5,7) + "/" +
        mongoDateTime.substring(2,4)
      return dateString;
    }
    else return mongoDateTime;
  };

  // on initial change, use initial prop to configure form
  useEffect(() => {
    if(initial) {
      if(initial.isBorrowing) setIsBorrowing(initial.isBorrowing);
      if(initial.isUser) setIsBorrowing(initial.isUser);
      if(initial.otherHandleOrName) {
        if(initial.isUser) setOtherName(initial.otherHandleOrName); // name and handle reversed?
        else setOtherHandle(initial.otherHandleOrName);
      }
    }
  },[initial])

  // on postData change, if dates match mongo date time format,
  // reformat dates as MM/DD/YY
  useEffect(() => {
    if(
      (postData.transactionDate && postData.transactionDate.length === 24) ||
      (postData.returnDate && postData.returnDate.length === 24)
    ){
      let newPostData = { ...postData };
      if(postData.transactionDate && postData.transactionDate.length === 24) {
        newPostData.transactionDate = mongoDateTimeToDateString(postData.transactionDate);
      }
      if(postData.returnDate && postData.returnDate.length === 24) {
        newPostData.returnDate = mongoDateTimeToDateString(postData.returnDate);
      }
      handleChange( newPostData );
    }
  },[postData])
  
  // when the user changes isBorrowing,
  // or when the user changes otherIsUser,
  // clear all lender and borrower information and rerun updateOther
  useEffect(() => {
    handleChange({
      ...postData,
      lenderID: "",
      lenderName: "",
      borrowerID: "",
      borrowerName: "",
    });
    if (otherIsUser && otherHandle) {
      updateOther(otherHandle);
    } else if (!otherIsUser && otherName) {
      updateOther(otherName);
    }
  }, [isBorrowing, otherIsUser]);

  // finds a user by handle
  // returns null if no user is found or there is no response
  const findUserByHandle = async (handle) => {
    if(handle) {
      const res = await axios({
        url: `https://immense-tor-64805.herokuapp.com/api/user/handle/${handle}`,
        method: "GET"
      }).catch(console.error);
      return res.data && res.data[0] && res.data[0]._id? res.data[0]: null;
    }
    else return null;
  }

  // update the lenderID, lenderName, borrowerID, and borrowerName
  // based on the text argument, otherIsUser, and isBorrowing
  const updateOther = async (text) => {
    // if the other party is a user,
    if (otherIsUser) {
      setOtherHandle(text);
      // search for their account
      const other = await findUserByHandle(text);
      // if I find an account,
      if (other) {
        // if the user is borrowing
        if (isBorrowing) {
          handleChange({
            ...postData,
            lenderID: other._id,
            lenderName: other.name,
            borrowerID: userData._id,
            borrowerName: userData.name,
          });
        }
        // if the user is lending,
        else {
          handleChange({
            ...postData,
            lenderID: userData._id,
            lenderName: userData.name,
            borrowerID: other._id,
            borrowerName: other.name,
          });
        }
        setOtherIsFound(true);
      } else {
        setOtherIsFound(false);
      }
    }
    // if the other party is not a user
    else {
      setOtherName(text);
      if (isBorrowing) {
        handleChange({
          ...postData,
          lenderID: "",
          lenderName: text,
          borrowerID: userData._id,
          borrowerName: userData.name,
        });
      } else {
        handleChange({
          ...postData,
          lenderID: userData._id,
          lenderName: userData.name,
          borrowerID: "",
          borrowerName: text,
        });
      }
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={{ flex: 1, textAlign: "center" }}>I am ...</Text>
        <ButtonGroup
          onPress={(selection) => {
            setIsBorrowing(selection);
          }}
          selectedIndex={isBorrowing}
          buttons={buttonsIsBorrowing}
          containerStyle={{ height: 40 }}
        />
        <Text style={{ flex: 1, textAlign: "center" }}>{`${
          isBorrowing ? "from" : "to"
        } someone who`}</Text>
        <ButtonGroup
          onPress={(selection) => {
            setOtherIsUser(selection);
          }}
          selectedIndex={otherIsUser}
          buttons={buttonsOtherIsUser}
          containerStyle={{ height: 40 }}
        />

        {otherIsUser ? (
          <Input
            label={`Who are you ${
              isBorrowing ? "borrowing this from" : "lending this to"
            }?`}
            placeholder="user handle"
            onChangeText={(text) => updateOther(text.toLowerCase())}
            value={otherHandle}
            leftIcon={
              <Icon
                name={otherIsFound ? "user-check" : "user-times"}
                size={24}
                color={otherIsFound ? "green" : "red"}
              />
            }
          />
        ) : (
          <Input
            label={`Who are you ${
              isBorrowing ? "borrowing this from" : "lending this to"
            }?`}
            placeholder="name"
            onChangeText={(text) => updateOther(text)}
            value={otherName}
            leftIcon={
              <Icon
                name={otherName ? "user-astronaut" : "user-times"}
                size={24}
                color={otherName ? "green" : "red"}
              />
            }
          />
        )}
        <Input
          label={`What are you ${isBorrowing ? "borrowing" : "lending"}?`}
          placeholder="item"
          onChangeText={(text) => handleChange({ ...postData, name: text })}
          value={postData.name ? postData.name : ""}
          leftIcon={<Icon name="box" size={24} color="black" />}
          rightIcon={
            <Icon
              name={postData.name ? "check-circle" : "times-circle"}
              size={24}
              color={postData.name ? "green" : "red"}
            />
          }
        />
        <Input
          label="How much was this worth? (optional)"
          placeholder="0"
          onChangeText={(text) =>
            handleChange({ ...postData, value: Number(text) })
          }
          value={postData.value ? postData.value.toString() : ""}
          leftIcon={<Icon name="dollar-sign" size={24} color="black" />}
          rightIcon={<Icon name="check-circle" size={24} color="green" />}
        />
        <Input
          label="Transaction date"
          placeholder="MM/DD/YY"
          onChangeText={(text) =>
            handleChange({ ...postData, transactionDate: text })
          }
          value={postData.transactionDate ? postData.transactionDate : ""}
          leftIcon={<Icon name="calendar-alt" size={24} color="black" />}
          rightIcon={
            <Icon
              name={
                postData.transactionDate &&
                postData.transactionDate.length === 8
                  ? "check-circle"
                  : "times-circle"
              }
              size={24}
              color={
                postData.transactionDate &&
                postData.transactionDate.length === 8
                  ? "green"
                  : "red"
              }
            />
          }
        />
        <Input
          label="Expected return date (optional)"
          placeholder="MM/DD/YY"
          onChangeText={(text) =>
            handleChange({ ...postData, returnDate: text })
          }
          value={postData.returnDate ? postData.returnDate : ""}
          leftIcon={<Icon name="calendar-alt" size={24} color="black" />}
          rightIcon={
            <Icon
              name={
                postData.returnDate && postData.returnDate.length === 8
                  ? "check-circle"
                  : "times-circle"
              }
              size={24}
              color={
                postData.returnDate && postData.returnDate.length === 8
                  ? "green"
                  : "red"
              }
            />
          }
        />
        <Text style={{ fontSize: 16, fontWeight: "bold", color: "#86939E", marginLeft: 10 }}>Which icon fits best?</Text>
        <Icons
          handleChange={handleChange}
          postData={postData} />
        {handleSubmit ? (
          <Button title="Submit" onPress={handleSubmit} />
        ) : (
          <></>
        )}
        {handleDelete ? (
          <Button title="Delete" onPress={handleDelete} />
        ) : (
          <></>
        )}
        {handleCancel ? (
          <Button title="Cancel" onPress={handleCancel} />
        ) : (
          <></>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});

export default PostForm;
