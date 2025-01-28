import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {loadAuthUsers} from "../../services/api.service.ts";
import {IUser} from "../../models/IUser.ts";

type UserSliceType = {
    users:IUser[];
}

const initialState: UserSliceType = {users:[]};

const loadUsers = createAsyncThunk(
    'userSlice/loadUsers',
    async (_, thunkAPI)=>{
        try {
            const users = await loadAuthUsers().then(value => value);
            console.log(users);
            return thunkAPI.fulfillWithValue(users);
        } catch (e){
            return thunkAPI.rejectWithValue(e);
        }
    }
)

export const userSlice = createSlice({
    name: "userSlice",
    initialState: initialState,
    reducers:{},
    extraReducers:builder =>
        builder.addCase(loadUsers.fulfilled, (state, action:PayloadAction<IUser[]>)=>{
            state.users = action.payload;
            console.log(action.payload);
        })
})
export const userSliceActions ={
    ...userSlice.actions, loadUsers
}