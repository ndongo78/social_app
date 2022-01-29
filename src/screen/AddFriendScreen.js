import React,{useEffect} from 'react';
import { StyleSheet, Text, View,FlatList,Dimensions,TouchableOpacity,TouchableWithoutFeedback } from 'react-native';
import { useSelector,useDispatch } from 'react-redux';
import { getAllUsers,friendRequests,getAllMyFriendRequest } from '../redux/actions/userActions';
import {Avatar} from 'react-native-elements'

const {width,height}=Dimensions.get('window')

const AddFriendScreen = ({navigation}) => {
  const {allUsers,isSuccess,user,myFriendRequest}=useSelector(state=>state.user)
  const dispatch=useDispatch()
   

    useEffect(()=>{
      dispatch(getAllUsers())
      dispatch(getAllMyFriendRequest(user.id))
   
    },[user.id,dispatch])
    
    const addFriend=(id)=>{
      const data={
        fromId:user.id,
        toId:id,
        status:"request"
      }
      dispatch(friendRequests(data))
    }
    const hiddenUser=(id)=>{
    }
   
     const renderItem=({item})=>(
       <>
        {
          item.id ==user.id?
          null
          :(
             <View style={styles.listItem}>
          <View style={styles.details}>
           <Avatar
            rounded
            size="large"
            source={{
              uri:item.image
            }}
            containerStyle={{marginBottom:15}}
           />
            <View style={styles.contain}>
           <Text style={styles.name}>{item.lastName} {item.firstName}</Text>
         
           <View style={styles.buttonContainer}>
            <TouchableOpacity style={myFriendRequest?.find(friend=>friend.toId==item.id) ? styles.disabled:styles.button} 
            onPress={()=>addFriend(item.id)}
            disabled={myFriendRequest?.find(friend=>friend.toId==item.id) ? true:false}
            >
              <Text style={styles.buttonText}> {myFriendRequest?.find(friend=>friend.toId==item.id) ?"En attente":"ajouter"} </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonDelete} onPress={hiddenUser}>
              <Text style={styles.buttonText}>sumprimer</Text>
            </TouchableOpacity>
            </View>
           </View>
          </View>
           </View>
          )
        }
       
        </>
    )
     

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.containerBtn}>
          <Text style={styles.headerText}>ajouter des amis</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.containerBtn}>
          <Text style={styles.headerText}>Mes amis</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.containerBtn} onPress={()=>navigation.navigate("requestFriends")}>
          <Text style={styles.headerText}>Demandes d'amis</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.divider} />
      <FlatList
        data={allUsers}
        keyExtractor={(item)=>item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list:{
    paddingVertical:10
  },
  listItem:{
    width:width-20,
    marginBottom:10,
    padding:10,
    backgroundColor:'#e2e2e2',
    borderRadius:15,
    marginTop:10,
    marginLeft:10,
  },
  details:{
    flexDirection:'row',
    alignItems:'center',
  },
  contain:{
    flexDirection:'column',
    marginLeft:10,
  },
  name:{
    fontWeight:'bold',
    marginLeft:10,
  },
  buttonContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    width:width/2,
    marginTop:15,
  },
  button:{
    backgroundColor:'#418EF2',
    padding:10,
    borderRadius:15,
    marginRight:10,
    width:width/4,
    alignItems:'center',
    marginTop:10,
  },
  buttonDelete:{
    backgroundColor:'#ff2200',
    padding:10,
    borderRadius:15,
    marginLeft:20,
    marginTop:10,
  },
  buttonText:{
    color:'#fff',
    fontWeight:'500',
    fontSize:18,
    fontFamily:'Roboto',
  },
  disabled:{
    backgroundColor:'#ccc',
    padding:10,
    borderRadius:15,
    marginRight:10,
    width:width/3,
    alignItems:'center',
    marginTop:10,
    
  },
  header:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:10,
    borderRadius:15,
    marginTop:10,
    marginLeft:10,
  },
  containerBtn:{
    backgroundColor:'#e2e2e2',
    padding:5,
    borderRadius:15,
    marginRight:10,
    width:width/4,
    alignItems:'center',
    marginTop:10,
  },
  headerText:{
    color:'#000',
    fontWeight:'500',
    fontSize:15,
    fontFamily:'Roboto',
    padding:5,
  },
  divider:{
    borderBottomColor:'#000',
    borderBottomWidth:.6,
    marginTop:10,
    marginLeft:10,
    marginRight:10,
  }
});
export default AddFriendScreen;

