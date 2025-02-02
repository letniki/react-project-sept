import {createAsyncThunk} from "@reduxjs/toolkit";
import {
    getRecipesByTag,
    loadAllAuthRecipes,
    loadAuthRecipe,
    loadAuthRecipes,
    searchRecipesByIdOrQuery
} from "../../services/recipes.service.ts";

export const loadPaginatedRecipes = createAsyncThunk(
    'recipeSlice/loadRecipes',
    async (page:string, thunkAPI)=>{
        try {
            const recipes = await loadAuthRecipes(page);
            return thunkAPI.fulfillWithValue(recipes);
        } catch (e){
            return thunkAPI.rejectWithValue(e);
        }
    }
);
export const loadRecipe = createAsyncThunk(
    'recipeSlice/loadRecipe',
    async (id: string, thunkAPI)=>{
        try {
            const user = await loadAuthRecipe(id);
            return thunkAPI.fulfillWithValue(user);
        }catch (e){
            return thunkAPI.rejectWithValue(e);
        }
    }
)
export const loadAllRecipes = createAsyncThunk(
    'recipeSlice/loadAllRecipes',
    async (_, thunkAPI)=>{
        try {
            const recipes = await loadAllAuthRecipes();
            return thunkAPI.fulfillWithValue(recipes);
        } catch (e){
            return thunkAPI.rejectWithValue(e);
        }
    }
);
export const loadRecipesByTag = createAsyncThunk(
    'recipeSlice/loadRecipesByTag',
    async (tag: string, thunkAPI)=>{
        try {
            const recipes = await getRecipesByTag(tag);
            return thunkAPI.fulfillWithValue(recipes);
        } catch (e){
            return thunkAPI.rejectWithValue(e);
        }
    }

);
export const searchRecipes = createAsyncThunk(
    'recipeSlice/searchRecipes',
    async (query:string, thunkAPI)=>{
        try {
            const recipes = await searchRecipesByIdOrQuery(query);
            return thunkAPI.fulfillWithValue(recipes);
        } catch (e){
            return thunkAPI.rejectWithValue(e);
        }
    }
)