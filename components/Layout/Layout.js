import "react-native-gesture-handler";
import React from "react";
import Home from "../Home/Home";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Profile from "../Profile/Profile";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const Nav = () => {
  return (
    <>
      <Header />
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={Home}
            // options={{ title: "Welcome" }}
          />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      </NavigationContainer>
      <Footer />
    </>
  );
};

export default Nav;
