import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    status:false,
    userData:undefined
}

export const authStore = createSlice({
    name:'auth',
    initialState,
    reducers: {
        login: (state,action)=>{
            console.log(action.payload);
            state.status = true,
            state.userData = action.payload
        },

        logout: (state)=>{
            state.status = false,
            state.userData = undefined
        }

    }
})

export const {login,logout} = authStore.actions

export default authStore.reducer