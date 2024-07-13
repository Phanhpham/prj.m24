import { addUser, getAllUser, searchUser } from '../../services/admin.service' ;
import { User } from '../../interface/user'
import { createSlice } from "@reduxjs/toolkit"
const userState: User[] = [];

const userReducer = createSlice({
    name: "users",
    initialState: {
        user: userState
    },
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(getAllUser.fulfilled, (state, action) => {
            console.log(action.payload)
            state.user = action.payload;
        })
        .addCase(addUser.fulfilled, (state, action) => {
            state.user.push(action.payload);
        })
        .addCase(searchUser.fulfilled, (state, action) => {
            state.user = action.payload;
        })
    }
})

export default userReducer.reducer