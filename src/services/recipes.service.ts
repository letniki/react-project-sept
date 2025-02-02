import {IRecipe} from "../models/IRecipe.ts";
import {IRecipesResponseModelType} from "../models/IRecipesResponseModelType.ts";
import {axiosInstance} from "./api.service.ts";

export const loadAuthRecipes = async (page: string): Promise<IRecipe[]> =>{
    if(+page<0){
        const {data: {recipes}} = await axiosInstance.get<IRecipesResponseModelType>('/recipes' + '?limit=' + 10);
        return recipes;
    }
    const limit: number = 10;
    const skip: number = limit * (+page) - limit;
    const {data:{recipes}} = await axiosInstance.get('/recipes' + '?limit=' + limit + '&skip=' + skip );
    return recipes;
}
export const loadAllAuthRecipes = async (): Promise<IRecipe[]> =>{
    const {data: {recipes}} = await axiosInstance.get<IRecipesResponseModelType>('/recipes' + '?limit=' + 50);
    return recipes;
}

export const loadAuthRecipe =async (id: string):Promise<IRecipe> =>{
    const {data} = await axiosInstance.get<IRecipe>(`/recipes/${id}`);
    return data;
}
export const getRecipesByTag = async (tag: string): Promise<IRecipe[]> =>{
    const {data: {recipes}} = await axiosInstance.get<IRecipesResponseModelType>('/recipes/tag/' + tag);
    return recipes;
}
export const searchRecipesByIdOrQuery = async (query: string): Promise<IRecipe[]>=>{
    if(!isNaN(Number(query))  && (Number(query) > 0) && (Number(query) <= 50)){
        const recipe = await loadAuthRecipe(query);
        return [recipe];
    } else{
        const {data: {recipes}}  = await axiosInstance.get<IRecipesResponseModelType>(`/recipe/search?q=${query}`);
        return recipes;
    }
}