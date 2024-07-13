import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// API lấy dữ liệu sản phẩm
export const getAllProduct: any = createAsyncThunk(
    "product/getAllProduct",
    async () => {
        const url = import.meta.env.VITE_BASE_URL;
        const response = await axios.get(`${url}/product`);
        return response.data
    }
)