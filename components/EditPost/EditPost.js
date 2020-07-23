import React, { useEffect, useState, useContext } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import PostForm from "../Shared/PostForm/PostForm";
import SelectedPostContext from "../Shared/SelectedPostContext/SelectedPostContext";
import axios from "axios";

const EditPost = ({ navigation }) => {
  const [post, setPost] = useState();
  const [isUpdated, setIsUpdated] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  const { postId, setPostId } = useContext(SelectedPostContext);

  let id = postId._id;

  console.log(navigation);

  useEffect(() => {
    const makeAPICall = async () => {
      try {
        const response = await axios(
          `https://immense-tor-64805.herokuapp.com/api/transaction/${id}`
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
    setPost({
      ...thePost,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios({
      url: `https://immense-tor-64805.herokuapp.com/api/transaction/${id}`,
      method: "PUT",
      data: post,
    })
      .then(() => setIsUpdated(true))
      .catch(console.error);
  };

  if (isUpdated) {
    () => navigation.goBack();
  }

  const destroy = async () => {
    const response = await axios({
      url: `https://immense-tor-64805.herokuapp.com/api/transaction/${id}`,
      method: "DELETE",
    });
    setIsDeleted(true);
  };

  if (!post) {
    return <Text>Loading...</Text>;
  }

  if (isDeleted) {
    () => navigation.goBack();
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
