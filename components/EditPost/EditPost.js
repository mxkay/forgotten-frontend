import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import PostForm from "../Shared/PostForm/PostForm";
import axios from "axios";

const EditPost = (props, { navigation }) => {
  const [post, setPost] = useState();
  const [isUpdated, setIsUpdated] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  console.log(props.id);
  useEffect(() => {
    const makeAPICall = async () => {
      try {
        const response = await axios(
          `https://immense-tor-64805.herokuapp.com/api/transaction/${props.id}`
        );
        console.log(response.data);
        setPost(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    makeAPICall();
  }, []);

  const handleChange = (thePost) => {
    console.log(thePost);
    setPost({
      ...thePost,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios({
      url: `https://immense-tor-64805.herokuapp.com/api/transaction/${props.id}`,
      method: "PUT",
      data: post,
    })
      .then(() => setIsUpdated(true))
      .catch(console.error);
  };

  if (isUpdated) {
    return () => navigation.navigate("Home");
  }

  const destroy = async () => {
    const response = await axios({
      url: `https://immense-tor-64805.herokuapp.com/api/transaction/${props.match.params.id}`,
      method: "DELETE",
    });
    setIsDeleted(true);
  };

  if (!post) {
    return <Text>Loading...</Text>;
  }

  if (isDeleted) {
    return () => navigation.navigate("Home");
  }

  return (
    <View style={styles.container}>
      <Text>Under Construction</Text>
      <PostForm
        postData={post}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      <Button title="Delete Post" onPress={destroy} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#FFF",
  },
});

export default EditPost;
