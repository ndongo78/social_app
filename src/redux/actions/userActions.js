import * as api from "../../api"

//login
export const loginUser = (email, password) =>async dispatch=> {
        await api.login(email, password)
        .then(response=>{
            dispatch({
                type:"LOGIN_USER",
                payload:response.data
            })
        })
        .catch(err=>{
            console.log(err.response.data)
            dispatch({
                type:"LOGIN_ERROR",
                payload:err
            })
        })
   
}
//get all users
export const getAllUsers = () =>async dispatch=> {
    await api.getAllUser()
    .then(response=>{
        dispatch({
            type:"GET_ALL_USERS",
            payload:response.data
        })
    }
    )
    .catch(err=>{
        console.log(err.response.data)
        dispatch({
            type:"GET_ALL_USERS_ERROR",
            payload:err
        })
    }
    )
}
//friend request
export const friendRequests = (values) =>async dispatch=> {
    await api.friendRequest(values)
    .then(response=>{
        console.log(response.data);
        dispatch({
            type:"FRIEND_REQUEST",
            payload:response.data
        })
    }
    )
    .catch(error=>{
        console.log(error.response.data.error)
        dispatch({
            type:"FRIEND_REQUEST_ERROR",
            payload:error
        })
    }   
    )
}
//get all my friend request
export const getAllMyFriendRequest = (id) =>async dispatch=> {
    await api.getAllFriendRequest(id)
    .then(response=>{
        dispatch({
            type:"GET_ALL_MY_FRIEND_REQUEST",
            payload:response.data
        })
    }
    )
    .catch(err=>{
        console.log(err.response.data)
        dispatch({
            type:"GET_ALL_FRIEND_REQUEST_ERROR",
            payload:err
        })
    }
    )
}
//get all my friend request to me
export const getAllMyFriendRequestToMe = (id) =>async dispatch=> {
    await api.getAllFriend(id)
    .then(response=>{
        console.log(response.data);
        dispatch({
            type:"GET_ALL_FRIEND_REQUEST_TO_ME",
            payload:response.data
        })
    }
    )
    .catch(err=>{
        console.log(err.response.data)
        dispatch({
            type:"GET_ALL_FRIEND_ERROR",
            payload:err
        })
    }
    )
}
//refuse friend request
export const refuseFriendRequest = (vales) =>async dispatch=> {
    await api.refuseFriendRequest(vales)
    .then(response=>{
        dispatch({
            type:"REFUSE_FRIEND_REQUEST",
            payload:response.data
        })
    }
    )
    .catch(err=>{
        console.log(err.response.data)
        dispatch({
            type:"REFUSE_FRIEND_REQUEST_ERROR",
            payload:err.response
        })
    }
    )
}

//get all conversations
export const getAllConversations = (id) =>async dispatch=> {
        await api.getAllConversation(id)
        .then(response=>{
            dispatch({
                type:"GET_ALL_CONVERSATION",
                payload:response.data
            })
        })
        .catch(err=>{
            console.log(err.response.data)
            dispatch({
                type:"GET_ALL_CONVERSATION_ERROR",
                payload:err
            })
        })
}
//create conversation
export const createConversations = (senderId, receiverId) =>async dispatch=> {
        await api.createConversation(senderId, receiverId)
        .then(response=>{
            dispatch({
                type:"CREATE_CONVERSATION",
                payload:response.data
            })
        }
        )
        .catch(err=>{
            console.log(err.response.data)
            dispatch({
                type:"CREATE_CONVERSATION_ERROR",
                payload:err
            })
        })
}
//get all messages
export const getAllMessages = (id) =>async dispatch=> {
        await api.getAllMessage(id)
        .then(response=>{
            dispatch({
                type:"GET_ALL_MESSAGE",
                payload:response.data
            })
        })
        .catch(err=>{
            console.log(err.response.data)
            dispatch({
                type:"GET_ALL_MESSAGE_ERROR",
                payload:err
            })
        })
   
}
//create message
export const createMessage = (conversationId, senderId,message) =>async dispatch=> {
        await api.createMessage(conversationId, senderId,message)
        .then(response=>{
            dispatch({
                type:"CREATE_MESSAGE",
                payload:response.data
            })
        })
        .catch(err=>{
            console.log(err.response.data)
            dispatch({
                type:"CREATE_MESSAGE_ERROR",
                payload:err
            })
        })
   
}