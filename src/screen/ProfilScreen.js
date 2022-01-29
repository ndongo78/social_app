import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View ,Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { Avatar } from 'react-native-elements';
import { useSelector } from 'react-redux';
import TopNavigator from '../navigators/TopNavigator';
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";

const {width, height} = Dimensions.get('window')

const ProfilScreen = ({navigation}) => {
  const {user} = useSelector(state => state.user)
  
  return (
    <>
    <View style={styles.container}>
      <View style={styles.header}>
          <View style={styles.userInfos}>
            <Avatar
                rounded
                size="large"
                source={{
                  uri: user.image,
                }}
              />
              <Text style={styles.userName}>{user.lastName} {user.firstName}</Text>
          </View>
          <View style={styles.post}>
               <TouchableOpacity>
                 <Text style={styles.postNumber}>0</Text>
                 <Text style={styles.postText}>Posts</Text>
               </TouchableOpacity>
              
            </View>
            <View style={styles.post}>
            <TouchableOpacity onPress={()=>navigation.navigate('AddFriend')}>
                 <Text style={styles.postNumber}>0</Text>
                 <Text style={styles.postText}>Amis</Text>
               </TouchableOpacity>
            </View>
            <View style={styles.post}>
            <TouchableOpacity>
                 <Text style={styles.postNumber}>0</Text>
                 <Text style={styles.postText}>Amis</Text>
               </TouchableOpacity>
            </View>
        </View>
        <View style={styles.btn}>
            <TouchableOpacity style={styles.btnContainer}>
                <Text style={styles.btnText}>Modifier mon profil</Text>
            </TouchableOpacity>
        </View>
        <View>
      <TouchableOpacity style={styles.friends} onPress={()=>navigation.navigate('AddFriend')}>
        <MaterialIcon name="account-group" size={40} color="#418EF2" />
        <Text style={styles.buttonText}>amis</Text>
      </TouchableOpacity>
      </View>  
    </View>
        {/* <NavigationContainer independent={true}>
           <TopNavigator />
          </NavigationContainer> */}
     </>
    );
  };

export default ProfilScreen;

const styles = StyleSheet.create({
  container: {
    
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  userInfos: {
     alignItems : 'center',
  },
  userName: {
    fontSize: 20,
    fontWeight: '500',
    color: '#000',
    fontStyle: 'italic',
    fontFamily: 'serif',
    marginTop: 10,
  },
  post: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  postNumber: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  postText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
    fontStyle: 'italic',
    fontFamily: 'serif',
    marginLeft: 5,
  },
  btn: {
    alignItems: 'center',
  },
  btnContainer: {
    backgroundColor: '#6805F2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 10,
    width: width - 40,
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    fontStyle: 'italic',
    fontFamily: 'serif',
    textAlign: 'center',
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
