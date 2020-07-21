import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
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
