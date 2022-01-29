import React, {useState, useEffect, useCallback, useRef,useLayoutEffect} from 'react';
import {View, ScrollView, Text, Dimensions, StyleSheet, SafeAreaView, TouchableOpacity,TextInput, StatusBar } from 'react-native';
import {Bubble, GiftedChat, Send} from 'react-native-gifted-chat';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Material from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useRoute} from '@react-navigation/native';
import {useSelector,useDispatch} from 'react-redux';
import {Avatar} from "react-native-elements"
import { getAllConversations,getAllMessages,createMessage } from '../redux/actions/userActions';

import { io } from "socket.io-client";

//const socket=io("http://192.168.1.12:3000")
const {width, height} = Dimensions.get('window');
const ChatScreen = ({navigation}) => {
  const dispatch=useDispatch()
  const route = useRoute();
  const {item,socket,receiver} = route.params;
  const [text, settext] = useState('');
  const {user, allMessages} = useSelector(state => state.user);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [arrivalMessage, setArrivalMessage] = useState(null);
 // const socket=useRef()

   useLayoutEffect(() => {
    navigation.setOptions({
      title: receiver.firstName + ' ' + receiver.lastName,
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: '#6805F2',
      },
      headerTintColor: '#fff',
      headerRight: () => (
        <View style={styles.herder}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Chat', {
              item: item,
              receiver: receiver,
            });

          }}
        >
          <Material
            name="videocam"
            size={30}
            color="white"
            style={{ marginRight: 10 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Chat', {
              item: item,
              receiver: receiver,
            });

          }}
        >
          <Material
            name="call"
            size={28}
            color="white"
          />
        </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);
  


   useEffect(()=>{
     dispatch(getAllMessages(item.id))
   },[allMessages])
    //  useEffect(()=>{
    //   socket.current.on("getMessage", (data) => {
        
    //     setArrivalMessage({
    //       sender: data.senderId,
    //       text: data.text,
    //       createdAt: Date.now(),
    //     });
    //   });
    //  },[])

    //  useEffect(()=>{
          
    //  },[arrivalMessage])

    //  useEffect(() => {
    //   socket.current.emit("addUser", user.id);
    //   socket.current.on("getUsers", (online) => {
    //      console.log(online);
          
    //   //   setonlineUser(
    //   //     users?.find(user => user.id === online.userId))
      
    //   });
       
    // }, [user]);
 
//  useEffect(() => {
//   socket.current.emit("addUser", user);
//   socket.current.on("getUsers", (online) => {
//      console.log(online);
      
//   //   setonlineUser(
//   //     users?.find(user => user.id === online.userId))
  
//   });
   
// }, [user]);
  

  // useEffect(() => {
  //   setMessages([
  //     {
  //       _id: 1,
  //       text: 'Hello developer',
  //       createdAt: new Date(),
  //       user: {
  //         _id:item.id,
  //         name: item.firstName+' '+item.lastName,
  //         avatar: 'https://placeimg.com/140/140/any',
  //       },
  //     },
  //     {
  //       _id: 2,
  //       text: 'Hello world',
  //       createdAt: new Date(),
  //       user: {
  //         _id: user.id,
  //         name: user.firstName+' '+user.lastName,
  //         avatar: 'https://placeimg.com/140/140/any',
  //       },
  //     },
  //   ]);
  // }, []);
  //     useEffect(() => {
  //       // socket.emit("connection",()=>{
  //       //     console.log("data")
  //       // })
  //       // socket.on("user_connected",(data)=>{
  //       //     //setusers([...users,data])
  //       // })
  //       // socket.on('new_message',(data)=>{
  //       //    // setMessages([...messages,data])  
  //       //     console.log(data)
  //       // })
  //       socket.on('invite', function(data) {
  //         console.log(data)
  //         socket.emit("joinRoom",data)
  //     });
  //       socket.on('Nmessage', (data) => {
  //         //console.log(data)
  //         //sendMyMessage(room, data.from, data.message)
  //     } );
  //     socket.on('message', function(msg) {
  //       //If chat window not opened with this roomId, open it
  //       // if(!$('#after-login').find(`#${msg.room}`).length) {
  //       //     openChatWindow(msg.room)
  //       // }
  //       // sendMyMessage(msg.room, msg.from, msg.message)
  //       console.log(msg);
  //   });

  //   }, [socket]);

  //   const sendMyMessage = (chatWidowId, fromUser, message) => {
  //    // let loggedInUser = JSON.parse(sessionStorage.getItem('user'))
  //     let meClass = user.id == fromUser.id ? 'me' : '';
  //      setMessages([...messages,message]);
  //     // $('#after-login').find(`#${chatWidowId} .body`).append(`
  //     //     <div class="chat-text ${meClass}">
  //     //         <div class="userPhoto">
  //     //             <img src="images/${fromUser.user_image}" />
  //     //         </div>
  //     //         <div>
  //     //             <span class="message">${message}<span>
  //     //         </div>
  //     //     </div>
  //     // `
  //     // );
  // }
    
 // console.log(allMessages);

  
    const handleSmile=()=>{
        // socket.emit("send_message", {
        //     sender: user.id,
        //     receiver:item.id,
        //     message: message
        //   });
        // socket.emit('message', {room: room, message:message, from: user});
        // sendMyMessage(room, user, message)
        // const messages = {
        //   sender: user.id,
        //   text: message,
        //   conversationId: currentChat._id,
        // };
        dispatch(createMessage(item.id,user.id,message))
        dispatch(getAllMessages(item.id))
          setMessage('');
        // const receiverId = currentChat.members.find(
        //   (member) => member !== user._id
        // );
    
        // socket.current.emit("sendMessage", {
        //   senderId: user.id,
        //   receiverId:item.id,
        //   text: message,
        // });
        
    }






  return (
    <ScrollView>
      <StatusBar  barStyle="light-content" />
     <SafeAreaView style={styles.container}>
        <View style={styles.chat}>
         {
           allMessages?.map(item=>(
              <View key={item.id} >
                {
                  item.senderId==user.id?(
                    <View style={styles.currentUser}>
                     <View style={styles.userInfos}>
                      <View style={styles.message}>
                       <Text style={styles.userName}> {user.firstName} {user.lastName} </Text>
                        <Text style={styles.messageText}>{item.message}</Text>
                        </View> 
                     <Avatar
                        size={40}
                        rounded
                        containerStyle={{ backgroundColor: "#6733b9",marginTop:50 }}
                        source={{ uri: user.image }}
                        
                      />
                     </View>
                      
                    </View>
                  ):(
                    <View style={styles.receiver}>
                       <View style={styles.userInfos}>
                         <Avatar
                        size={40}
                        rounded
                        containerStyle={{ backgroundColor: "#6733b9",marginTop:50 }}
                        source={{ uri: user.image }}
                        
                      />
                      <View style={styles.message2}>
                       <Text style={styles.userName}> {receiver.firstName} {receiver.lastName} </Text>
                        <Text style={styles.messageText}>{item.message}</Text>
                        </View> 
                     
                     </View>
                    </View>
                  )
                }
              </View>
           ))
         }
         </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message"
          onChangeText={(text)=>setMessage(text)}
          value={message}
        />
        <TouchableOpacity onPress={handleSmile} >
          <MaterialCommunityIcons name='send-circle' style={styles.icon} size={30} color="#2e64e5"  />
          </TouchableOpacity>
      </View>
    </SafeAreaView>
    </ScrollView>
  );
}
export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'flex-end',
  },
  herder:{
    flexDirection:'row',
    justifyContent:'space-between',
    padding:10,
  },
  chat:{
    flex:1
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 20
  },
  input: {
    width: '95%',
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 5,
    backgroundColor: '#ccc',
  },
  icon: {
    marginRight:10
  },
  currentUser: {
    alignItems: 'flex-end',
    marginBottom: 10,
  
  },
  userInfos: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  userName: {
    marginLeft: 5,
    fontSize: 16,
    color: '#333',
  },
  message: {
      alignItems:'center',
      backgroundColor: '#2e64e5',
      padding: 2,
      borderRadius: 15,
      
  },
  messageText: {
    fontSize: 20,
    color: '#eee',
    padding: 10,
  },
  userName:{
    fontSize:16,
    color:'#eee',
    padding:5,
  },
  message2: {
    alignItems:'center',
    backgroundColor: '#4caf50',
    padding: 2,
    borderRadius: 15,
    
},

});