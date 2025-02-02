import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../../../models/IUser.ts";
import {loadUser, loadUsers, searchUsers} from "../../reducers/user.extra.reducers.ts";

type UserSliceType = {
    users:IUser[];
    user: IUser | null;
    searchedUsers: IUser[];
}

const initialState: UserSliceType = {
    users:[],
    user: null,
    searchedUsers:[]
};

export const userSlice = createSlice({
    name: "userSlice",
    initialState: initialState,
    reducers:{},
    extraReducers:builder => builder
            .addCase(loadUsers.fulfilled, (state, action:PayloadAction<IUser[]>)=>{
                state.users = action.payload;
            })
            .addCase(loadUser.fulfilled, (state, action:PayloadAction<IUser>)=>{
                state.user = action.payload;
            })
            .addCase(searchUsers.fulfilled, (state, action:PayloadAction<IUser[]>)=>{
                state.searchedUsers = action.payload;
            })
})
export const userSliceActions ={
    ...userSlice.actions, loadUsers, loadUser, searchUsers
}