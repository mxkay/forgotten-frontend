import { StatusBar } from 'expo-status-bar';
import React, { useState, useContext, createContext } from 'react';
import UserDataContext from './components/Shared/UserDataContext/UserDataContext';
import Login from './components/Login/Login';
import Home from "./components/Home/Home";

export default function App () {
  const [userData, setUserData] = useState({email: '', handle: '', name: '', _id: ''});
  const value = { userData, setUserData };


  return (

    <UserDataContext.Provider value={value}>
        {userData._id
          ?
            `Greetings ${userData.name}`
          :
            <Login />
        }
//       <Home />
    </UserDataContext.Provider>
  );
};

