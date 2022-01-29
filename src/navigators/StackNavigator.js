import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StyleSheet, Text, View } from 'react-native'
import LoginScreen from '../screen/LoginScreen'
import HomeStack from '../stack/HomeStack'
import AddFriendStack from '../stack/AddFriendStack'

const Stack = createNativeStackNavigator()

const StackNavigator = () => {
   
   
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
           {/* <Stack.Screen name="addFriend" component={AddFriendStack} /> */}
           
        </Stack.Navigator>
    )
}

export default StackNavigator

const styles = StyleSheet.create({})
 