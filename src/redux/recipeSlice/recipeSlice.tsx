import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {loadAllAuthRecipes, loadAuthRecipe, loadAuthRecipes} from "../../services/api.service.ts";
import {IRecipe} from "../../models/IRecipe.ts";

type RecipeSliceType = {
    recipes:IRecipe[];
    // recipesP:IRecipe[];
    recipe: IRecipe | null;
}

const initialState: RecipeSliceType = {
    recipes:[],
    // recipesP:[],
    recipe: null
};

const loadPaginatedRecipes = createAsyncThunk(
    'recipeSlice/loadRecipes',
    async (page:string, thunkAPI)=>{
        try {
            const recipes = await loadAuthRecipes(page);
            console.log(recipes);
            return thunkAPI.fulfillWithValue(recipes);
        } catch (e){
            console.log(e)
            return thunkAPI.rejectWithValue(e);
        }
    }
);
const loadRecipe = createAsyncThunk(
    'recipeSlice/loadRecipe',
    async (id: string, thunkAPI)=>{
        try {
            const user = await loadAuthRecipe(id);
            return thunkAPI.fulfillWithValue(user);
        }catch (e){
            console.log(e);
            return thunkAPI.rejectWithValue(e);
        }
    }
)
const loadAllRecipes = createAsyncThunk(
    'recipeSlice/loadAllRecipes',
    async (_, thunkAPI)=>{
        try {
            const recipes = await loadAllAuthRecipes();
            console.log(recipes);
            return thunkAPI.fulfillWithValue(recipes);
        } catch (e){
            console.log(e)
            return thunkAPI.rejectWithValue(e);
        }
    }
);
export const recipeSlice = createSlice({
    name: "recipeSlice",
    initialState: initialState,
    reducers:{},
    extraReducers:(builder) => builder
        .addCase(loadPaginatedRecipes.fulfilled, (state, action:PayloadAction<IRecipe[]>)=>{
            state.recipes = action.payload;
            console.log(action.payload);
        })
        .addCase(loadRecipe.fulfilled, (state, action:PayloadAction<IRecipe>)=>{
            state.recipe = action.payload;
            console.log(action.payload);
        })
        .addCase(loadAllRecipes.fulfilled, (state, action:PayloadAction<IRecipe[]>)=>{
            state.recipes = action.payload;
            console.log(action.payload);
        })
})
export const recipeSliceActions ={
    ...recipeSlice.actions, loadPaginatedRecipes, loadRecipe, loadAllRecipes
}