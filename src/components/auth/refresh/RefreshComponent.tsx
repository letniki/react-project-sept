import {useEffect} from "react";
import {useAppSelector} from "../../../redux/hooks/useAppelector.tsx";
import {useAppDispatch} from "../../../redux/hooks/useAppDispatch.tsx";
import {authSliceActions} from "../../../redux/authSlice/authSlice.tsx";

export const RefreshComponent = () => {
    const {refreshToken} = useAppSelector(({authSlice}) => authSlice);
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

