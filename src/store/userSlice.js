import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    status:false,
    userData:undefined,
    isLoggedIn: true
}

export const authStore = createSlice({
    name:'auth',
    initialState,
    reducers: {
        login: (state,action)=>{
            // console.log(action.payload);
            state.status = true,
            state.userData = action.payload
        },

        logout: (state)=>{
            state.status = false,
            state.userData = undefined
        },

        isLoggedIn: (state,action)=>{
            console.log(action.payload);
            state.isLoggedIn = action.payload
        }

    }
})

export const {login,logout,isLoggedIn} = authStore.actions

export default authStore.reducer