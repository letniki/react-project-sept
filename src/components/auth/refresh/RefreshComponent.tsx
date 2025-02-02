import {useEffect} from "react";
import {useAppDispatch} from "../../../redux/hooks/useAppDispatch.tsx";
import {authSliceActions} from "../../../redux/slices/authSlice/authSlice.tsx";
import {retriveLocalStorage} from "../../../services/helpers.ts";
import {IUserWithTokens} from "../../../models/IUserWithTokens.ts";

export const RefreshComponent = () => {
    const {accessToken, refreshToken} = retriveLocalStorage<IUserWithTokens>('user');
    const dispatch = useAppDispatch();
    useEffect(() => {
        const interval = setInterval(() => {
            if(refreshToken){
                dispatch(authSliceActions.refreshTokens(refreshToken));
            }
        }, 30000);
        return () => clearInterval(interval);
    }, [accessToken, refreshToken]);
    return (
        <>
        </>
    );
};

