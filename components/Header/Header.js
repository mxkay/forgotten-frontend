import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Nav from "../Nav/Nav"
import { createDrawerNavigator } from '@react-navigation/drawer';



export default function Header({ navigation }) {
  const Drawer = createDrawerNavigator()

  return (
    <View style={styles.container}>
      {/* <Button
        onPress={() => navigation.toggleDrawer()}
        title="Tap"
      /> */}
      <Text style={styles.text}>Forgotten</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    borderWidth: 3,
    marginTop: 20,
    margin: 2 
  },
  text: {
      fontSize: 30,
      margin: 20,
      color: "black",

  }
});
