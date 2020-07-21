import React, { useContext } from 'react';
import { StyleSheet, Text, View, Platform } from "react-native";
import UserDataContext from '../Shared/UserDataContext/UserDataContext';

const Profile = () => {
  // userData for the user that is currently logged in
  const { userData, setUserData } = useContext(UserDataContext);

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{userData.name}</Text>
      <Text style={styles.handle}>{userData.handle}</Text>
      {/* <Feed /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFF",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  name: {
    fontSize: 25,
  },
  handle: {
    fontSize: 15,
  },
});

export default Profile;