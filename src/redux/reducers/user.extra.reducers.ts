import {createAsyncThunk} from "@reduxjs/toolkit";
import {loadAuthUser, loadAuthUsers, searchUsersByIdOrName} from "../../services/users.service.ts";

export const loadUsers = createAsyncThunk(
    'userSlice/loadUsers',
    async (page:string, thunkAPI)=>{
        try {
            const users = await loadAuthUsers(page);
            return thunkAPI.fulfillWithValue(users);
        } catch (e){
            return thunkAPI.rejectWithValue(e);
        }
    }
);
export const loadUser = createAsyncThunk(
    'userSlice/loadUser',
    async (id: string, thunkAPI)=>{
        try {
            const user = await loadAuthUser(id);
            return thunkAPI.fulfillWithValue(user);
        }catch (e){
            return thunkAPI.rejectWithValue(e);
        }
    }
)
export const searchUsers = createAsyncThunk(
    'userSlice/searchUsers',
    async (query:string, thunkAPI)=>{
        try {
            const users = await searchUsersByIdOrName(query);
            return thunkAPI.fulfillWithValue(users);
        } catch (e){
            return thunkAPI.rejectWithValue(e);
        }
    }
)

