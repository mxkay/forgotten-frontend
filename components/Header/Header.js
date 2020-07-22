import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Header = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Forgotten</Text>
            <StatusBar style="auto" />
                <Button
                    onPress={navigation.openDrawer}
                    title="Menu"
                />
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
      borderBottomStartRadius: 0
    },
    text: {
        fontSize: 30,
        margin: 20,
        color: "white",
        padding: 40,
        paddingRight: 80
    }
});

export default Header;