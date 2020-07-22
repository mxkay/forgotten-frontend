import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import PostForm from "../Shared/PostForm/PostForm";

const EditPost = (props, { navigation }) => {
  const [post, setPost] = useState();
  const [isUpdated, setIsUpdated] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  useEffect(() => {
    const makeAPICall = async () => {
      try {
        const response = await axios(
          `https://immense-tor-64805.herokuapp.com/api/transaction/5f15dc6578dfa4000457b326`
        );
        setPost(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    makeAPICall();
  }, []);

  const handleChange = (key) => (text) => {
    setPost({
      ...post,
      key: text,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios({
      url: `https://immense-tor-64805.herokuapp.com/api/transaction/5f15dc6578dfa4000457b326`,
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
    return <p>Loading...</p>;
  }

  if (isDeleted) {
    return () => navigation.navigate("Home");
  }

  return (
    <View style={styles.container}>
      <Text>Under Construction</Text>
      <PostForm postData={post} />
      <Button onPress={destroy}>Delete Post</Button>
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
