import React, { useState, useEffect } from "react";
import axios from "axios";
import { View } from "react-native";
import Layout from '../Shared/Layout/Layout';
import PostForm from "../Shared/PostForm/PostForm";

const NewPost = ({ navigation }) => {
  const [post, setPost] = useState({});

  const handleChange = (thePost) => {
    setPost({
      ...thePost,
    });
  };
  
  const handleSubmit = async () => {
    await axios({
      url: `https://immense-tor-64805.herokuapp.com/api/transaction`,
      method: "POST",
      data: post,
    }).catch(console.error);
  };

  const handleCancel = () => {
    setPost({});
    navigation.navigate('Home');
  };

  return (
    <Layout navigation={navigation}>
      <PostForm
        postData={post}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
      />
    </Layout>
  );
};

export default NewPost;
