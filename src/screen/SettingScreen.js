import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import {useNavigation} from '@react-navigation/native'

const SettingScreen = () => {
    const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View>
      <TouchableOpacity style={styles.friends} onPress={()=>navigation.navigate('Posts')}>
        <MaterialIcon name="account-group" size={40} color="#418EF2" />
        <Text style={styles.buttonText}>amis</Text>
      </TouchableOpacity>
      </View> 
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  friends:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:15,
    marginLeft:10,
  },
  buttonText:{
    fontSize:20,
    marginLeft:10,
    marginTop:10,
  },
  
});
