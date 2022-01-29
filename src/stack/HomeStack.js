import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import HomeScreen from '../screen/HomeScreen'
import { Avatar } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ChatScreen from '../screen/Chat'
import {useRoute} from '@react-navigation/native'
import AddFriendStack from './AddFriendStack';
import RequestFriend from '../screen/RequestFriend';

const Stack = createStackNavigator()

const HomeStack = () => {
   
    return (
       <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#6805F2',
                },
                headerTintColor: '#fff',
                headerLargeTitleShadowVisible: true,
            }}
               >
                <Stack.Screen name="acceuil" component={HomeScreen} options={{
                    headerTitle: ()=>{},
                    headerTitleAlign: 'center',
                    headerTintColor: '#fff',
                    headerLeft: () => (
                        <Text style={styles.headerTitle}>Let talk</Text>
                    ),
                    headerRight: () => (
                        <View style={styles.icons}>
                            <TouchableOpacity
                            
                            >
                             <Ionicons name="ios-add-circle" size={30} color="#fff" style={styles.icon} />
                             </TouchableOpacity>
                            <TouchableOpacity>
                            <Icon name="facebook-messenger" size={30} color="#fff" style={styles.icon} />
                            </TouchableOpacity>
                            </View>
                    ),
                }} />
                <Stack.Screen name="AddFriend" component={AddFriendStack} options={{headerShown:false}}  />
             
                <Stack.Screen name="requestFriends" component={RequestFriend} options={{
                headerTitle: ()=><Text style={styles.headerTitle2}>Mes demandes d'amis </Text>,
                headerTitleAlign: 'center',
                headerTintColor: '#fff',
                headerLeft: () => (
                    <Ionicons name="ios-arrow-back" size={30} color="#fff" style={styles.icon} />
                ),
                headerRight: () => (
                    <Ionicons name="search-outline" size={30} color="#fff" style={styles.icon} />
                ),
            }} />
               

                
        </Stack.Navigator>
    )
}

export default HomeStack

const styles = StyleSheet.create({
    headerTitle: {
        fontSize: 30,
        fontWeight: "500",
        color: '#fff',
        fontStyle: 'italic',
        fontFamily: 'serif',
        marginLeft: 10,
    },
    icons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 10,
    },
    icon: {
        marginRight: 10,
    },
    headerTitle2: {
        fontSize: 18,
        fontWeight: "500",
        color: '#fff',
        fontStyle: 'italic',
        fontFamily: 'serif',
        marginLeft: 10,
    },
})
