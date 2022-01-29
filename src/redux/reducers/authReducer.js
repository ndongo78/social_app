

const initialState = {
    isLoggedIn:false,
    user:null,
    token:null,
    error:null,
    conversations:[],
    newConversation:null,
    allMessages:[],
    newMessage:null,
    allUsers:[],
    isSuccess:false,
    friendRequest:null,
    myFriendRequest:null,
    isDenied:false,
    allFriendRequestToMe:null,
}
export default (state=initialState,action)=>{
    switch (action.type) {
        case "REGISTER_SUCCESS":
            return {
                ...state,
                user:action.payload,
                error:null,
            }
            break;
            case "LOGIN_USER":
            return {
                ...state,
                user:action.payload,
                error:null,
                isLoggedIn:true,
            }
            break;
            case "GET_ALL_USERS":
            return {
                ...state,
                allUsers:action.payload,
                error:null,
            }
            break;
            case "FRIEND_REQUEST":
            return {
                ...state,
                isSuccess:true,
                friendRequest:action.payload,
            }
            break;
            case "GET_ALL_MY_FRIEND_REQUEST":
            return {
                ...state,
                myFriendRequest:action.payload,
                error:null,
            }
            break;
            case "GET_ALL_CONVERSATION":
            return {
                ...state,
                conversations:action.payload,
                error:null,
            }
            break;
            case "CREATE_CONVERSATION":
            return {
                ...state,
                newConversation:action.payload,
                error:null,
            }
            break;
            case "GET_ALL_MESSAGE":
            return {
                ...state,
                allMessages:action.payload,
                error:null,
            }
            break;
            case "CREATE_MESSAGE":
            return {
                ...state,
                newMessage:action.payload,
                error:null,
            }
            break;
            case "REFUSE_FRIEND_REQUEST":
            return {
                ...state,
                isDenied:true,
            }
            break;
            case "GET_ALL_FRIEND_REQUEST_TO_ME":
            return {
                ...state,
               myFriendRequest:[...state.myFriendRequest,...action.payload],
                error:null,
            }
            break;
    
        default:
            return state;
    }
}