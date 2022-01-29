import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SettingScreen from '../screen/SettingScreen';

const Stack = createStackNavigator();

const SettingStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Setting" component={SettingScreen}  />
    </Stack.Navigator>
  );
};

export default SettingStack;


