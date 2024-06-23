import axios from "axios"

async function fetchSignup(data) {
    console.log("signup", data);

    const signupApi = 'http://localhost:8080/api/v1/users/register'
    const responce = await axios.post(signupApi, {
        'username': String(data.username).toLowerCase(),
        'email': String(data.email),
        'password': String(data.password),
    },)

    return responce
}

async function fetchVerify({ InpCode }) {

    const verifyApi = 'http://localhost:8080/api/v1/users/verify-email/ffff8c2d25725516cf34c8cfa9c5f4d8f1f1f407'

    const responce = await axios.get(verifyApi, {
        "verificationToken": String(InpCode)
    })

    return responce

}

async function fetchLogIn({ email, password }) {
    // console.log(email, password);
    const LoginApi = 'http://localhost:8080/api/v1/users/login'

    return await axios.post(LoginApi, {
        'username': String(email),
        'password': String(password)
    }, {
        headers: {
            "Content-Type": "application/json",
        }, withCredentials: true
    },)
}

async function getCurrentUser() {
    const currentUserApi = 'http://localhost:8080/api/v1/users/current-user'
    return await axios.get(currentUserApi, {
        headers: {
            "Content-Type": "application/json",
        }, withCredentials: true
    },)
}

async function logout() {
    const logoutApi = "http://localhost:8080/api/v1/users/logout"
    return await axios.post(logoutApi,{},{withCredentials:true})
}

export { fetchSignup, fetchVerify, fetchLogIn, getCurrentUser, logout };
