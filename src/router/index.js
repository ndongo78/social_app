import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { useSelector } from 'react-redux';
import StackNavigator from '../navigators/StackNavigator';
import TabNavigator from '../navigators/TabNavigator';
import DrawerNavigator from '../navigators/DrawerNavigator';

const Router = () => {
    const {user,isLoggedIn} = useSelector(state => state.user)
  return (
    <NavigationContainer>
        {isLoggedIn && (
            <NavigationContainer independent={true}>
            <DrawerNavigator />
            </NavigationContainer>
        ) }
        {!isLoggedIn && (
            <NavigationContainer independent={true}>
            <StackNavigator />
            </NavigationContainer>
        )}
    </NavigationContainer>
   
  );
};

export default Router;


