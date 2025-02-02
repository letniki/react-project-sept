import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ITokenPair} from "../../../models/ITokenPair.ts";
import {logIn, refreshTokens} from "../../reducers/auth.extra.reducers.ts";

type AuthSliceType = {
    accessToken: string;
    refreshToken: string;
}

const initialState: AuthSliceType = {
    accessToken: '',
    refreshToken: '',
};

export const authSlice = createSlice({
    name: "authSlice",
    initialState: initialState,
    reducers:{},
    extraReducers:builder => builder
        .addCase(logIn.fulfilled, (state, action: PayloadAction<ITokenPair>)=>{
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
        })
        .addCase(refreshTokens.fulfilled, (state, action: PayloadAction<ITokenPair>)=>{
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
        })
});
export const authSliceActions ={
    ...authSlice.actions, logIn, refreshTokens
}