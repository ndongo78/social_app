import React,{useEffect} from 'react';
import { Dimensions, FlatList, StyleSheet, Text, View,TouchableOpacity, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMyFriendRequest,refuseFriendRequest,getAllMyFriendRequestToMe } from '../redux/actions/userActions';
import {Avatar} from 'react-native-elements'

const {width,height}=Dimensions.get('window')

const RequestFriend = () => {
    const {user,myFriendRequest,isDenied,allFriendRequestToMe} = useSelector(state => state.user)
    const dispatch=useDispatch()
    //const allrequests=myFriendRequest?.concat(allFriendRequestToMe) 

    useEffect(()=>{
        dispatch(getAllMyFriendRequest(user.id))
        dispatch(getAllMyFriendRequestToMe(user.id))
        if(isDenied){
            Alert.alert("Vous avez refusé la demande")
        }

    },[isDenied,dispatch,user.id])
   
    const addFriend=(val)=>{
        const data={
          id:val.id,
          fromId:val.id,
          toId:val.id,
          status:"refused",
        }
        
        dispatch(refuseFriendRequest(data))
      }
    const hiddenUser=(id)=>{
    }
    //all my friend request
    const renderItem=({item})=>(
              <View style={styles.listItem}>
           <View style={styles.details}>
            <Avatar
             rounded
             size="large"
             source={{
               uri:item.user.image
             }}
             containerStyle={{marginBottom:15}}
            />
             <View style={styles.contain}>
            <Text style={styles.name}>{item.user.lastName} {item.user.firstName}</Text>
          
            <View style={styles.buttonContainer}>
             {
                 item.fromId == user.id ?
                 (
                 <TouchableOpacity style={ styles.disabled} 
                 disabled={ true}
                 >
                   <Text style={styles.buttonText}> {"En attente"} </Text>
                 </TouchableOpacity>
                 )
                 :
                ( 
                <TouchableOpacity style={ styles.button} 
                 disabled={ true}
                 >
                   <Text style={styles.buttonText}> {"Accepter"} </Text>
                 </TouchableOpacity>
                 )
             }
             {
                    item.fromId == user.id ?
                    (
               < TouchableOpacity style={styles.buttonDelete} onPress={()=>addFriend(item)}>
               <Text style={styles.buttonText}>Annuler</Text>
             </TouchableOpacity>
                    )
                    :
                    (
                        <TouchableOpacity style={styles.buttonDelete} onPress={hiddenUser}>
                <Text style={styles.buttonText}>Refuser</Text>
                </TouchableOpacity>
                    )
             }
             
             </View>
            </View>
           </View>
            </View>
     )
    
     console.log(myFriendRequest);

      

  return (
    <View style={styles.container}>
      <FlatList
        data={myFriendRequest}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        />

    </View>
  );
};

export default RequestFriend;

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
        backgroundColor:'#00DFB3',
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
});
