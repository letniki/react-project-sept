import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "./slices/userSlice/userSlice.tsx";
import {authSlice} from "./slices/authSlice/authSlice.tsx";
import {recipeSlice} from "./slices/recipeSlice/recipeSlice.tsx";

export const store = configureStore({
    reducer:{
        userSlice: userSlice.reducer,
        authSlice: authSlice.reducer,
        recipeSlice: recipeSlice.reducer
    }
});