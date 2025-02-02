import {LoginDataType} from "../models/LoginDataType.ts";
import {IUserWithTokens} from "../models/IUserWithTokens.ts";
import {ITokenPair} from "../models/ITokenPair.ts";
import {retriveLocalStorage} from "./helpers.ts";
import {axiosInstance} from "./api.service.ts";

export const login = async ({username, password, expiresInMins}:LoginDataType): Promise<IUserWithTokens> =>{
    const {data: userWithTokens} = await axiosInstance.post<IUserWithTokens>('/login', {username, password, expiresInMins});
    localStorage.setItem('user', JSON.stringify(userWithTokens));
    return userWithTokens;
}
export const refresh = async (refresh: string): Promise<ITokenPair>=>{
    const iUserWithTokens = retriveLocalStorage<IUserWithTokens>('user');
    const {data: {accessToken, refreshToken}} = await axiosInstance.post<ITokenPair>('/refresh',{
        refreshToken: refresh,
        expiresInMins: 30
    });
    iUserWithTokens.accessToken = accessToken;
    iUserWithTokens.refreshToken = refreshToken;
    localStorage.setItem('user', JSON.stringify(iUserWithTokens));
    return iUserWithTokens;
}