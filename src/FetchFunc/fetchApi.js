import axios from "axios"

async function fetchSignup(data){

        const api = 'http://localhost:8080/api/v1/users/register'
        const responce = await axios.post(api, {
            'username': String(data.username),
            'email': String(data.email),
            'password': String(data.password)
          },)
    
          return responce
}

async function fetchVerify({InpCode}) {

        const api = 'http://localhost:8080/api/v1/users/verify-email/ffff8c2d25725516cf34c8cfa9c5f4d8f1f1f407'

        const responce = await axios.get(api,{
            "verificationToken": String(InpCode)
        })
    
        return responce

}

async function fetchLogIn({email,password}) {
    const api = 'http://localhost:8080/api/v1/users/login'

        return await axios.post(api,{
            'username': String(email),
            'password': String(password)
        })
}

export {fetchSignup,fetchVerify,fetchLogIn};
