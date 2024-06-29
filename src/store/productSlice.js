import { createSlice } from "@reduxjs/toolkit";

const initialState={
    products: []
}

export const productStore = createSlice({
    name: 'product',
    initialState,

    reducers:{
        products: (state,action)=>{
            // console.log(action.payload);
            state.products= action.payload
        }
    }
})

export const {products} = productStore.actions

export default productStore.reducer