import axios from "axios";
import {IUserWithTokens} from "../models/IUserWithTokens.ts";
import {IRecipe} from "../models/IRecipe.ts";
import {IRecipesResponseModelType} from "../models/IRecipesResponseModelType.ts";
import {retriveLocalStorage} from "./helpers.ts";
import {ITokenPair} from "../models/ITokenPair.ts";
import {LoginDataType} from "../models/LoginDataType.ts";
import {IUsersResponseModelType} from "../models/IUsersResponseModelType.ts";


const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: {}
});
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
export const loadAuthRecipes = async (): Promise<IRecipe[]> =>{
    const {data: {recipes}} = await axiosInstance.get<IRecipesResponseModelType>('/recipes');
    return recipes;
}
export const loadAuthUsers = async (): Promise<IUsersResponseModelType[]> =>{
    const {data:users} = await axiosInstance.get<IUsersResponseModelType[]>('/users');
    console.log(users);
    return users;
}
export const refresh = async ()=>{
    const iUserWithTokens = retriveLocalStorage<IUserWithTokens>('user');
    const {data: {accessToken, refreshToken}} = await axiosInstance.post<ITokenPair>('/refresh',{
        refreshToken: iUserWithTokens.refreshToken,
        expiresInMins: 10
    });
    console.log('hello asd')
    iUserWithTokens.accessToken = accessToken;
    iUserWithTokens.refreshToken = refreshToken;
    localStorage.setItem('user', JSON.stringify(iUserWithTokens));
}