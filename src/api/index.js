import axios from "axios";

const api = axios.create({
    baseURL: "http://192.168.1.12:3000/"
});

//login
export const login = (email, password) => {
    return api.post("users/login",email, password );
}
//get all users
export const getAllUser = () => {
    return api.get("users");
}
//friend request
export const friendRequest = (values) => {
    return api.post("friendRequest",values);
}
//get all my friend request
export const getAllFriendRequest = (id) => {
    return api.get(`friendRequest/me/${id}`);
}
//get all my friend request to me
export const getAllFriend = (id) => {
    return api.get(`friendRequest/to/${id}`);
}
//refuse friend request
export const refuseFriendRequest = (vales) => {
    return api.put(`friendRequest/refuse`,vales);
}
//get all conversations
export const getAllConversation = (id) => {
    return api.get(`conversation/${id}`);
}
//create conversation
export const createConversation = (senderId, receiverId) => {
    return api.post(`conversation/create`, {senderId, receiverId});
}

//get all messages
export const getAllMessage = (id) => {
    return api.get(`messages/${id}`);
}
//create message
export const createMessage = (conversationId, senderId,message) => {
    return api.post(`messages/create`, {conversationId, senderId,message});
}
