import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {login} from "../../services/api.service.ts";
import {ITokenPair} from "../../models/ITokenPair.ts";

type UserSliceType = {
    accessToken: string | null;
    refreshToken: string | null;
}

const initialState: UserSliceType = {
    accessToken: null,
    refreshToken: null,
};

const logIn = createAsyncThunk(
    'authSlice/login',
    async ({ username, password, expiresInMins }: { username: string; password: string; expiresInMins: number }, thunkAPI)=>{
        try {
            const data = await login({username, password, expiresInMins});
            console.log(data);
            return thunkAPI.fulfillWithValue(data);
        } catch (error) {
            console.log(error)
            return thunkAPI.rejectWithValue("Ошибка авторизации");
        }
    }
)
export const authSlice = createSlice({
    name: "authSlice",
    initialState: initialState,
    reducers:{},
    extraReducers:builder =>
        builder.addCase(logIn.fulfilled, (state, action: PayloadAction<ITokenPair>)=>{
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
        }),
});
export const authSliceActions ={
    ...authSlice.actions, logIn
}