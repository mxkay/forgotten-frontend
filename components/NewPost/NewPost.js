import React, { useState } from "react";
import axios from "axios";
import { View } from "react-native";
import PostForm from "../Shared/PostForm/PostForm";

const NewPost = () => {
  const [post, setPost] = useState({});
  const handleChange = (thePost) => {
    setPost({
      ...thePost,
    });
  };

  console.log(post)
  
  const handleSubmit = async () => {
    await axios({
      url: `https://immense-tor-64805.herokuapp.com/api/transaction`,
      method: "POST",
      data: post,
    }).catch(console.error);
  };

  return (
    <View>
      <PostForm
        handleChange={handleChange}
        postData={post}
        handleSubmit={handleSubmit}
      />
    </View>
  );
};

export default NewPost;
