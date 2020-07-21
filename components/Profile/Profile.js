import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, Platform, Button } from "react-native";
import UserDataContext from '../Shared/UserDataContext/UserDataContext';

const Profile = () => {
    // userData for the user that is currently logged in
    const { userData, setUserData } = useContext(UserDataContext);
    const [ filter, setFilter ] = useState('all');

    return (
        <View style={styles.container}>
            <Text style={styles.name}>{userData.name}</Text>
            <Text style={styles.handle}>{userData.handle}</Text>
            <View style={styles.filterButtonsContainer}>
                <View style={styles.filterButtons}>
                    <Button 
                        title='All'
                        onPress={() => setFilter('all')}
                    />
                </View>
                <View style={styles.filterButtons}>
                    <Button
                        buttonStyle={styles.filterButtons}
                        title='Loaned'
                        onPress={() => setFilter('loaned')}
                    />
                </View>
                <View style={styles.filterButtons}>
                    <Button
                        buttonStyle={styles.filterButtons}
                        title='Borrowed'
                        onPress={() => setFilter('borrowed')}
                    />
                </View>
            </View>
            <Text>{filter}</Text>
            {/* <Feed filter={lenderID: userData._id, borrowerID: userData._id}/> */}
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
    filterButtonsContainer: {
        width: '100%',
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    filterButtons: {
        backgroundColor: 'red',
        flex: 1,
    }
});

export default Profile;