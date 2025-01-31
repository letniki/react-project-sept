import axios from "axios";
import {IUserWithTokens} from "../models/IUserWithTokens.ts";
import {IRecipe} from "../models/IRecipe.ts";
import {IRecipesResponseModelType} from "../models/IRecipesResponseModelType.ts";
import {retriveLocalStorage} from "./helpers.ts";
import {ITokenPair} from "../models/ITokenPair.ts";
import {LoginDataType} from "../models/LoginDataType.ts";
import {IUsersResponseModelType} from "../models/IUsersResponseModelType.ts";
import {IUser} from "../models/IUser.ts";


const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: {}
});
// const filteredRecipes = 'https://dummyjson.com/recipes/1?select=userId';

axiosInstance.interceptors.request.use((requestObject)=>{
    if(requestObject.method?.toUpperCase() === 'GET'){
        requestObject.headers.Authorization = 'Bearer ' + retriveLocalStorage<IUserWithTokens>('user').accessToken;
    }
    return requestObject;
})
export const login = async ({username, password, expiresInMins}:LoginDataType): Promise<IUserWithTokens> =>{
    const {data: userWithTokens} = await axiosInstance.post<IUserWithTokens>('/login', {username, password, expiresInMins});
    console.log(userWithTokens);
    localStorage.setItem('user', JSON.stringify(userWithTokens));
    return userWithTokens;
}
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
export const loadAuthUsers = async (page: string): Promise<IUser[]> =>{
    if(+page<0){
        const {data:{users}} = await axiosInstance.get<IUsersResponseModelType>('/users');
        return users;
    }
    const limit: number = 30;
    const skip: number = limit * (+page) - limit;
    const {data:{users}} = await axiosInstance.get('/users' + '?skip=' + skip);
    return users;
}
export const loadAuthUser =async (id: string):Promise<IUser> =>{
    const {data} = await axiosInstance.get<IUser>(`/users/${id}`);
    console.log(data);
    return data;
}
export const loadAuthRecipe =async (id: string):Promise<IRecipe> =>{
    const {data} = await axiosInstance.get<IRecipe>(`/recipes/${id}`);
    return data;
}

export const refresh = async (refresh: string): Promise<ITokenPair>=>{
    const iUserWithTokens = retriveLocalStorage<IUserWithTokens>('user');
    const {data: {accessToken, refreshToken}} = await axiosInstance.post<ITokenPair>('/refresh',{
        refreshToken: refresh,
        expiresInMins: 10
    });
    iUserWithTokens.accessToken = accessToken;
    iUserWithTokens.refreshToken = refreshToken;
    localStorage.setItem('user', JSON.stringify(iUserWithTokens));
    return iUserWithTokens;
}
export const getRecipesByTag = async (tag: string): Promise<IRecipe[]> =>{
    const {data: {recipes}} = await axiosInstance.get<IRecipesResponseModelType>('/recipes/tag/' + tag);
    return recipes;
}

export const searchUsersByIdOrName = async (query: string): Promise<IUser[]>=>{
    if(!isNaN(Number(query))  && (Number(query) > 0) && (Number(query) < 208)){
        const user = await loadAuthUser(query);
        return [user];
    } else {
        const {data: {users}}  = await axiosInstance.get<IUsersResponseModelType>(`/users/search?q=${query}`);
        return users;
    }
}
export const searchRecipesByIdOrQuery = async (query: string): Promise<IRecipe[]>=>{
    if(!isNaN(Number(query))  && (Number(query) > 0) && (Number(query) < 50)){
        const recipe = await loadAuthRecipe(query);
        return [recipe];
    } else{
        const {data: {recipes}}  = await axiosInstance.get<IRecipesResponseModelType>(`/recipe/search?q=${query}`);
        return recipes;
    }
}