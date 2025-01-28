import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "./userSlice/userSlice.tsx";

export const store = configureStore({
    reducer:{
        userSlice: userSlice.reducer,
        // commentSlice: recipeSlice.reducer,
    }
});