import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer:{
        userSlice: userSlice.reducer,
        commentSlice: recipeSlice.reducer,
    }
});