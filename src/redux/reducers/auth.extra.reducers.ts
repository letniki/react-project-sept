import {createAsyncThunk} from "@reduxjs/toolkit";
import {login, refresh} from "../../services/auth.service.ts";

export const logIn = createAsyncThunk(
    'authSlice/login',
    async ({ username, password, expiresInMins }: { username: string; password: string; expiresInMins: number }, thunkAPI)=>{
        try {
            const data = await login({username, password, expiresInMins});
            return thunkAPI.fulfillWithValue(data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)
export const refreshTokens = createAsyncThunk(
    'authSlice/refreshTokens',
    async (refreshToken: string , thunkAPI)=>{
        try {
            const data = await refresh(refreshToken);
            return thunkAPI.fulfillWithValue(data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)