import axios from "axios";

async function getUserProfile(params) {
    try {
        const url = "http://localhost:8080/api/v1/ecommerce/profile"

       return await axios.get(url,{
        headers:{
            "Content-Type": "application/json",
        },withCredentials:true
       })
    } catch (error) {
        console.log(error);
    }
}

export{getUserProfile}