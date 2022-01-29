import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View } from 'react-native';
import TabNavigator from './TabNavigator';
import MyFriendStack from '../stack/MyFriendStack';
import SettingScreen from '../screen/SettingScreen';
import TopNavigator from './TopNavigator';


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
        <Drawer.Screen name="accueil" component={TabNavigator} options={{headerShown: false}} />
        <Drawer.Screen name="requestFriends" component={MyFriendStack} options={{headerShown: false}} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({});
