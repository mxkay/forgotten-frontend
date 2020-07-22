import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { useState, useContext, createContext } from "react";
import { Text, View } from "react-native";
import UserDataContext from "./components/Shared/UserDataContext/UserDataContext";
import Login from "./components/Login/Login";
import Nav from "./components/Layout/Layout";
// import Footer from "./components/Footer/Footer";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";

const App = () => {
  const [userData, setUserData] = useState({
    email: "",
    handle: "",
    name: "",
    _id: "",
  });
  const value = { userData, setUserData };

  return (
    <UserDataContext.Provider value={value}>
      {userData._id ? <Layout /> : <Login />}
    </UserDataContext.Provider>
  );
};

export default App;
