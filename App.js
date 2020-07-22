import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import UserDataContext from './components/Shared/UserDataContext/UserDataContext'
import Header from "./components/Header/Header"
import Footer from './components/Footer/Footer'
import Login from './components/Login/Login'
import Nav from "./components/Nav/Nav"
import Home from "./components/Home/Home"
import Profile from './components/Profile/Profile'
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const HeaderHome = ({navigation}) => <><Header navigation={navigation} /><Home /></>;
const HeaderProfile = ({navigation}) => <><Header navigation={navigation} /><Profile /></>;

export default function App({navigation}) {
  const [userData, setUserData] = useState({
    email: "",
    handle: "",
    name: "",
    _id: "",
  });
  const value = { userData, setUserData };
  const Drawer = createDrawerNavigator()
  return (
    <UserDataContext.Provider value={value}>
      {/* {userData._id ? */}
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Home" >
              <Drawer.Screen name="Home" component={HeaderHome} />
              <Drawer.Screen name="Profile" component={HeaderProfile} />
          </Drawer.Navigator> 
        </NavigationContainer>
      {/* :
        <Login />
      } */}
    </UserDataContext.Provider>
  )
}