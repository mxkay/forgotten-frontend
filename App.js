import React, { useState } from 'react';
import UserDataContext from './components/Shared/UserDataContext/UserDataContext'
import Login from './components/Login/Login'
import Home from "./components/Home/Home"
import Profile from './components/Profile/Profile'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

export default function App({navigation}) {
  const [userData, setUserData] = useState({
    email: "",
    handle: "",
    name: "",
    _id: "",
  });
  
  const value = { userData, setUserData };
  const Drawer = createDrawerNavigator();

  return (
    <UserDataContext.Provider value={value}>
      {userData._id ?
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Home" >
              <Drawer.Screen name="Home" component={Home} />
              <Drawer.Screen name="Profile" component={Profile} />
          </Drawer.Navigator> 
        </NavigationContainer>
      :
        <Login />
      }
    </UserDataContext.Provider>
  )
}