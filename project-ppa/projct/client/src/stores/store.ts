import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer/userReducer"
import productReducer from "./reducer/productReducer";

export const store = configureStore({
    reducer: {
        users: userReducer,
        products: productReducer,
    }
})