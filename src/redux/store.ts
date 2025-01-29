import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "./userSlice/userSlice.tsx";
import {authSlice} from "./authSlice/authSlice.tsx";

export const store = configureStore({
    reducer:{
        userSlice: userSlice.reducer,
        authSlice: authSlice.reducer,
        // commentSlice: recipeSlice.reducer,
    }
});