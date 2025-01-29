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
axiosInstance.interceptors.request.use((requestObject)=>{
    if(requestObject.method?.toUpperCase() === 'GET'){
        requestObject.headers.Authorization = 'Bearer ' + retriveLocalStorage<IUserWithTokens>('user').accessToken;
    }
    return requestObject;
})
export const login = async ({username, password, expiresInMins}:LoginDataType): Promise<IUserWithTokens> =>{
    const {data: userWithTokens} = await axiosInstance.post<IUserWithTokens>('/login', {username, password, expiresInMins});
    console.log(userWithTokens);
    // localStorage.setItem('user', JSON.stringify(userWithTokens));
    return userWithTokens;
}
export const loadAuthRecipes = async (): Promise<IRecipe[]> =>{
    const {data: {recipes}} = await axiosInstance.get<IRecipesResponseModelType>('/recipes');
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

export const refresh = async ()=>{
    const iUserWithTokens = retriveLocalStorage<IUserWithTokens>('user');
    const {data: {accessToken, refreshToken}} = await axiosInstance.post<ITokenPair>('/refresh',{
        refreshToken: iUserWithTokens.refreshToken,
        expiresInMins: 1
    });
    console.log('hello asd')
    iUserWithTokens.accessToken = accessToken;
    iUserWithTokens.refreshToken = refreshToken;
    localStorage.setItem('user', JSON.stringify(iUserWithTokens));
}