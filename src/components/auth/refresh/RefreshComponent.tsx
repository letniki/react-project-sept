import {useEffect} from "react";
import {useAppDispatch} from "../../../redux/hooks/useAppDispatch.tsx";
import {authSliceActions} from "../../../redux/authSlice/authSlice.tsx";
import {retriveLocalStorage} from "../../../services/helpers.ts";
import {IUserWithTokens} from "../../../models/IUserWithTokens.ts";

export const RefreshComponent = () => {
    // const {refreshToken} = useAppSelector(({authSlice}) => authSlice);
    const {refreshToken} = retriveLocalStorage<IUserWithTokens>('user');
    console.log(refreshToken);
    const dispatch = useAppDispatch();
    useEffect(() => {
        const interval = setInterval(() => {
            if(refreshToken){
                console.log("🔄 Автоматическое обновление токена...");
                dispatch(authSliceActions.refreshTokens(refreshToken));
            }
        }, 30000);

        return () => clearInterval(interval);
    }, [refreshToken]);
    return (
        <div>

        </div>
    );
};

