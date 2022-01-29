import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeStack from '../stack/HomeStack';
import SearchScreen from '../screen/SearchScreen';
import ProfilScreen from '../screen/ProfilScreen';
import { Avatar } from 'react-native-elements';
import { useSelector } from 'react-redux';
import HomeScreen from '../screen/HomeScreen';
import SearchStack from '../stack/SearchStack';
import ProfilStack from '../stack/ProfilStack';


const Tab = createMaterialBottomTabNavigator();

const TabNavigator=()=> {
    const {user} = useSelector(state => state.user)

  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      barStyle={{ backgroundColor: '#000', }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStack}
        options={{
          tabBarLabel: false,
          tabBarIcon: ({ color }) => (
            <Icon name="search-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfilStack}
        options={{
         tabBarLabel:false,
          tabBarIcon: ({ color }) => (
            <Avatar
                rounded
                size="small"
                source={{
                    uri: user.image,
                }}
             />
          ),
          
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
