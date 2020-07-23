import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Entypo } from '@expo/vector-icons'; 
import { StyleSheet, Text, View, Button } from 'react-native';

const Header = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Entypo style={styles.burger} name="menu" size={40} color="white" onPress={navigation.openDrawer} />
            <Text style={styles.text}>Forgotten</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      // flex: 1,
      backgroundColor: '#302EA7',
      alignItems: 'center',
      marginTop: -100,
      marginBottom: 10,
      paddingTop: 100,
      borderBottomEndRadius: 200,
      borderBottomStartRadius: 0,
      flexDirection: "row",
    },
    text: {
        fontSize: 30,
        margin: 20,
        color: "white",
        padding: 40,
        paddingRight: 80
    },
    button: {
        borderWidth: 5,

    },
    burger:{
        padding: 15,
        paddingTop: 25,

    }
});

export default Header;