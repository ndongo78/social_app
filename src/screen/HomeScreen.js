import React,{useEffect,useLayoutEffect,useRef,useState} from 'react'
import { StyleSheet, Text, View ,TextInput, TouchableOpacity, FlatList, Button} from 'react-native'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { io } from "socket.io-client";
import { getAllUser } from '../api';
import { getAllConversations,createConversations } from '../redux/actions/userActions';

//const socket=io("http://192.168.1.12:3000")

const HomeScreen = ({navigation}) => {
    const {user,isLoggedIn,conversations} = useSelector(state => state.user)
    const [users,setUsers]=useState([])
    const [onlineUser,setonlineUser]=useState([])
    const socket=useRef()
    
    const dispatch=useDispatch()
    useEffect(()=>{
        socket.current = io("ws://192.168.1.12:8900");
       
     },[])

    //  useEffect(()=>{
    //           getAllUser().then(res=>{
    //         setUsers(res.data)
    //     })
    //     dispatch(getAllConversations(user.id))
    //  },[conversations])


     useEffect(() => {
        socket.current.emit("addUser", user.id);
        socket.current.on("getUsers", (online) => {
           //console.log(online);
            
        //   setonlineUser(
        //     users?.find(user => user.id === online.userId))
        
        });
         
      }, [user]);

    // useLayoutEffect(() => {
    //     const unsubscribe = navigation.addListener('focus', () => {
    //         navigation.setOptions({
    //             headerTitle: 'Let talk',
    //             headerTitleAlign: 'center',
    //             headerStyle: {
    //                 backgroundColor: '#6805F2',
    //             },
    //             headerTintColor: '#fff',
                
    //         })
    //     }   )
    //     return unsubscribe
    // }, [])

    

    // useEffect(() => {
    //     if(isLoggedIn){
    //         socket.emit('loggedin',user)
    //     }
    //     socket.on('updateUserList',(onlineUser)=>{
    //         setUsers(onlineUser)
    //     })
    //     socket.on('joinRoom', function(data) {
    //         console.log(data)
    //         socket.join(data.room.room);
    //     });
    // }, [socket])
    
   
     
    // useEffect(() => {
    //         if(isLoggedIn){
    //          socket.emit("connected",user.id)
    //         }
    //       socket.on("user_connected",(data)=>{
    //         console.log(data)
    //        // setUsers([...users,data])
    //         })
       
    //     getAllUser().then(res=>{
    //         setUsers(res.data)
    //     })
       
    // }, [])
//  const handleSmile=()=>{
//         socket.emit("send_message", {
//             sender: 'sender',
//             receiver: receiver,
//             message: message
//           });
//     }

//     const createRoom = (id,item) => {
//         let room = Date.now() + Math.random();
//         room = room.toString().replace(".","_");
//         socket.emit('create', {room: room, userId:user.id, withUserId:id});
//         socket.on('invite', function(data) {
//             console.log(data)
//             socket.emit("joinRoom",data)
//         });
//       //  navigation.navigate('Chat',{item,room})
       
//     }

   const handleRedirect=(id,receiver)=>{
       const conversation=conversations.find(conversation=>conversation.receiverId===id || conversation.senderId===id)
         console.log(conversation);
        if(conversation){
                navigation.navigate('chat',{item:conversation,receiver:receiver})
            }else{
              dispatch(createConversations(user.id,id))
             
            }
   }


    return (
        <View style={styles.container}>
             {
              <FlatList
                keyExtractor={(item,index)=>index.toString()}
                data={users}
                renderItem={({item})=>(
                    <>
                    {
                        item.id === user.id ? null :

                    <TouchableOpacity style={styles.item} onPress={()=>handleRedirect(item.id,item)}>
                        <Text>{item.firstName} {item.lastName} </Text>
                        <Text>{item.email}</Text>
                    </TouchableOpacity>
                    }</>
                )}
                />
                }
            {/* <TextInput
                style={styles.input}
                placeholder="Enter your message"
                onChangeText={(text)=>setMessage(text)}
                value={message}
            />
            <Button title="Send" onPress={handleSmile}/> */}
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
