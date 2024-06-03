import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./storeSlice";


export const store = configureStore({
    reducer: authReducer
})

