import React from  'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

// import Home from '../Home/Home'
// import MyProfile from '../MyProfile/MyProfile'
// import NewPost from '../NewPost/NewPost'

function Home ({ navigation }) {
    return(
        <View>
            <Text>
            This is the Home Screen   
            </Text> 
        </View>
    )
}
function NewPost ({ navigation }) {
    return(
        <View>
            <Text>
            This is the NewPost Screen   
            </Text> 
        </View>
    )
}
function MyProfile ({ navigation }) {
    return(
        <View>
            <Text>
            This is the MyProfile Screen   
            </Text> 
        </View>
    )
}

const Drawer = createDrawerNavigator()

export default function Nav() {
    return (
      //drawer
      <NavigationContainer>
  
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="NewPost" component={NewPost} />
          <Drawer.Screen name="MyProfile" component={MyProfile} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }



// const screens = {
//     Home: {
//         screen:Home
//     },
//     MyProfile: {
//         screen: MyProfile
//     },
//     NewPost: {
//         screen: NewPost
//     }

// }

// const HomeStack = createStackNavigator(screens)

// export default createAppContainer(HomeStack)