import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// API lấy tài khoản user
export const getAllUser: any = createAsyncThunk(
    "users/getAllUser",
    async () => {
        const url = import.meta.env.VITE_BASE_URL;
        const response = await axios.get(`${url}/users`);
        return response.data   
    }
)

// API them tai khoan user
export const addUser: any = createAsyncThunk(
    "users/addUser",
    async (data: any) => {
        const url = import.meta.env.VITE_BASE_URL;
        const response = await axios.post(`${url}/users`, data);
        return response.data  
    }
)

// API tìm kiếm user
export const searchUser: any = createAsyncThunk(
    "users/searchUser",
    async (searchItem: string) => {
        const url = import.meta.env.VITE_BASE_URL;
        const response = await axios.get(`${url}/users?userName_like=${searchItem}`);
        return response.data
    }
)