import axios from "axios";

async function fetchAvailableUser(params) {
    const api = "http://localhost:8080/api/v1/chat-app/chats/users"

    return await axios.get(api,{
        headers:{
            "Content-Type": "application/json",
        },withCredentials:true
    })
}

export{fetchAvailableUser}