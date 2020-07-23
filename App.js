import React, { useState } from "react";
import UserDataContext from "./components/Shared/UserDataContext/UserDataContext";
import SelectedPostContext from "./components/Shared/SelectedPostContext/SelectedPostContext";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import EditPost from "./components/EditPost/EditPost";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

export default function App() {
  library.add(fas);

  const [userData, setUserData] = useState({
    email: "",
    handle: "",
    name: "",
    _id: "",
  });
  const value = { userData, setUserData };

  const [postId, setPostId] = useState("");
  const postValue = { postId, setPostId };

  const Drawer = createDrawerNavigator();

  return (
    <UserDataContext.Provider value={value}>
      <SelectedPostContext.Provider postValue={postValue}>
        {userData._id ? (
          <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
              <Drawer.Screen name="Home" component={Home} />
              <Drawer.Screen name="Profile" component={Profile} />
              <Drawer.Screen name="EditPost" component={EditPost} />
            </Drawer.Navigator>
          </NavigationContainer>
        ) : (
          <Login />
        )}
      </SelectedPostContext.Provider>
    </UserDataContext.Provider>
  );
}
