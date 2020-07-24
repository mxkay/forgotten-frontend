import React, { useEffect, useState, useContext } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import PostForm from "../Shared/PostForm/PostForm";
import axios from "axios";
import UserDataContext from "../Shared/UserDataContext/UserDataContext";
import SelectedPostContext from "../Shared/SelectedPostContext/SelectedPostContext";
import Layout from "../Shared/Layout/Layout";
import { set } from "react-native-reanimated";

const EditPost = ({ navigation, id }) => {
  const { userData, setUserData } = useContext(UserDataContext);
  const { selectedPost, setSelectedPost } = useContext(SelectedPostContext);
  const [post, setPost] = useState({});

  const [initial, setInitial] = useState({
    isBorrowing: null,
    otherIsUser: null,
    otherHandleOrName: '',
  })

  // finds a user by ID
  // returns null if no user is found or there is no response
  const findUserByID = async (id) => {
    const res = await axios({
      url: `https://immense-tor-64805.herokuapp.com/api/user/${id}`,
      method: "GET"
    })
    .catch(console.error);
    return res.data && res.data._id? res.data: null;
  }

  useEffect( () => {
    if(selectedPost) {
      axios({
        url: `https://immense-tor-64805.herokuapp.com/api/transaction/${selectedPost}`,
        method: "GET",
      })
      .then( async res => {
        let tempInitial = {
          isBorrowing: null,
          otherIsUser: null,
          otherHandleOrName: '',
        }
        let tempPost = {
          lenderID: '',
          lenderName: '',
          borrowerID: '',
          borrowerName: '',
        }
        tempPost = res.data;
        // set up initial values for lender and borrower
        if( tempPost.borrowerID === userData._id ) {
          console.log('is a borrowing post!');
          tempInitial.isBorrowing = 1;
          if ( tempPost.lenderID ) {
            tempInitial.otherIsUser = 1;
            const other = await findUserByID( tempPost.lenderID );
            tempInitial.otherHandleOrName = other.handle;
          }
          else {
            tempInitial.otherIsUser = 0;
            tempInitial.otherHandleOrName = tempPost.lenderName;
          }
          setInitial(tempInitial);
          setPost(tempPost);
        }
        else if( tempPost.lenderID === userData._id ) {
          console.log('is a lending post!');
          tempInitial.isBorrowing = 0;
          if ( tempPost.borrowerID ) {
            tempInitial.otherIsUser = 1;
            const other = await findUserByID( tempPost.borrowerID );
            tempInitial.otherHandleOrName = other.handle;
          }
          else {
            tempInitial.otherIsUser = 0;
            tempInitial.otherHandleOrName = tempPost.borrowerName;
          }
          setInitial(tempInitial);
          setPost(tempPost);
        }
        else {
          navigation.navigate("Home");
        }
      })
      .catch(console.error);
    }
    else navigation.navigate("Home");
  },[])
  
  const handleChange = (thePost) => {
    setPost({
      ...thePost,
    });
  };
  
  const handleSubmit = async () => {
    await axios({
      url: `https://immense-tor-64805.herokuapp.com/api/transaction/${selectedPost}`,
      method: "PUT",
      data: post,
    })
    .then( navigation.navigate("Profile") )
    .catch(console.error);
  };

  const handleDelete = async () => {
    const response = await axios({
      url: `https://immense-tor-64805.herokuapp.com/api/transaction/${id}`,
      method: "DELETE",
    })
    .then( navigation.navigate("Home") )
  };

  const handleCancel = () => {
    setPost({});
    navigation.navigate("Home");
  };

  return (
    <Layout navigation={navigation}>
      <PostForm
        postData={post}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleDelete={handleDelete}
        handleCancel={handleCancel}
        initial={initial}
      />
    </Layout>
  );
};

export default EditPost;
