import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PostScreen from '../screen/PostScreen';
import SettingScreen from '../screen/SettingScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SettingStack from '../stack/SettingStack';

const Tab = createMaterialTopTabNavigator();
const TopNavigator = () => {
  return (
    <Tab.Navigator
    screenOptions={{
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { backgroundColor: '#eee' ,elevation:0},
 
      }}
      >
        <Tab.Screen
         name="Posts"
          component={PostScreen}
            options={{
                tabBarLabel: '',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="post-outline" color={color} size={26} />
                ),
                
            }}
         />
        <Tab.Screen
         name="setting" 
         component={SettingScreen}
         options={{
            tabBarLabel: '',
            tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="cog-outline" color={color} size={26} />
            ),
        }}
          />
    </Tab.Navigator>
  );
};

export default TopNavigator;

const styles = StyleSheet.create({});
