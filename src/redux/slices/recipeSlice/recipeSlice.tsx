import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IRecipe} from "../../../models/IRecipe.ts";
import {
    loadAllRecipes,
    loadPaginatedRecipes,
    loadRecipe,
    loadRecipesByTag,
    searchRecipes
} from "../../reducers/recipe.extra.reducers.ts";

type RecipeSliceType = {
    recipes:IRecipe[];
    recipe: IRecipe | null;
    recipesByTag: IRecipe[];
    searchedRecipes: IRecipe[];
}

const initialState: RecipeSliceType = {
    recipes:[],
    recipe: null,
    recipesByTag: [],
    searchedRecipes: []
};


export const recipeSlice = createSlice({
    name: "recipeSlice",
    initialState: initialState,
    reducers:{},
    extraReducers:(builder) => builder
        .addCase(loadPaginatedRecipes.fulfilled, (state, action:PayloadAction<IRecipe[]>)=>{
            state.recipes = action.payload;
        })
        .addCase(loadRecipe.fulfilled, (state, action:PayloadAction<IRecipe>)=>{
            state.recipe = action.payload;
        })
        .addCase(loadAllRecipes.fulfilled, (state, action:PayloadAction<IRecipe[]>)=>{
            state.recipes = action.payload;
        })
        .addCase(loadRecipesByTag.fulfilled, (state, action:PayloadAction<IRecipe[]>)=>{
            state.recipesByTag = action.payload;
        })
        .addCase(searchRecipes.fulfilled, (state, action:PayloadAction<IRecipe[]>)=>{
            state.searchedRecipes = action.payload;
        })
})
export const recipeSliceActions ={
    ...recipeSlice.actions, loadPaginatedRecipes, loadRecipe, loadAllRecipes, loadRecipesByTag, searchRecipes
}