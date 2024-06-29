import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./userSlice";
import productReducer from "./productSlice"


export const store = configureStore({
    reducer: {
        auth: authReducer,
        product: productReducer
    }
})

