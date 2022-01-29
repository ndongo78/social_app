import React,{useEffect,useState} from 'react'
import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'
import { io } from "socket.io-client";
import {useRoute} from "@react-navigation/native"
import { useSelector } from 'react-redux';


const socket=io("http://192.168.1.12:3000")

const Chat = () => {
    const route=useRoute()
    const {item}=route.params
    const [receiver,setReceiver]=useState('')
    const [text,settext]=useState('')
    const {user,isLoggedIn} = useSelector(state => state.user)
    const [message,setMessage]=useState([
        {
            _id: 1,
            text: "Hello developer",
            createdAt: new Date(),
            user: {
              _id: item.id,
              name: item.firstName ,
              avatar: 'https://placeimg.com/140/140/any',
            },
          },
    
    ])
    
    
    
    
    useEffect(() => {
        socket.emit("connection",()=>{
            console.log("data")
        })
        socket.on("user_connected",(data)=>{
            //setusers([...users,data])
        })
      
        socket.on('new_message',(data)=>{
            console.log(data)   
        })

    }, [socket])
 const handleSmile=()=>{
        socket.emit("send_message", {
            sender: 'sender',
            receiver: receiver,
            message: message
          });
    }
    
    console.log(user)

    return (
        <View style={styles.container}>
                <GiftedChat
                    messages={message}
                    onSend={(messages) => {
                        setMessage(GiftedChat.append(message, messages))
                        handleSmile()
                    }}
                    
                   
                />
        </View>
    )
}

export default Chat

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
    },
})
