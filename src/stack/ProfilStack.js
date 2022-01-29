import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfilScreen from '../screen/ProfilScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StyleSheet, View } from 'react-native';

const Stack = createStackNavigator();

const ProfilStack = () => {
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
        <Stack.Screen name="Search" component={ProfilScreen} options={{
            headerTitle: ()=>{},
           headerRight: () => (
              <View style={styles.icons}>
               <TouchableOpacity>
                <Ionicons name="md-notifications-outline" size={30} color="#fff" style={styles.icon}  />
                </TouchableOpacity>
                <TouchableOpacity>
                <Icon name="facebook-messenger" size={30} color="#fff" />
                </TouchableOpacity>
                </View>
            ),

        }}  />
    </Stack.Navigator>
  );
};

export default ProfilStack;

const styles = StyleSheet.create({
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 10,
},
icon: {
    marginRight: 10,
}
});


