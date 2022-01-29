import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AddFriendScreen from '../screen/AddFriendScreen';

const Stack = createStackNavigator();
const AddFriendStack = () => {
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
        <Stack.Screen name="addFriend" component={AddFriendScreen} options={{
            headerTitle: ()=><Text style={styles.headerTitle}>Amis</Text>,
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
  );
};

export default AddFriendStack;

const styles = StyleSheet.create({
    headerTitle: {
        fontSize: 20,
        fontWeight: "500",
        color: '#fff',
    },
    icon: {
        marginRight: 10,
        marginLeft: 10,
    }
});
