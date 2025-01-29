import {login} from "../../services/api.service.ts";
import {LoginDataType} from "../../models/LoginDataType.ts";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useAppSelector} from "../../redux/hooks/useAppelector.tsx";
import {useEffect} from "react";
import {authSliceActions} from "../../redux/authSlice/authSlice.tsx";

export const LoginComponent = () => {
    const navigate = useNavigate();
    const {accessToken, refreshToken} = useAppSelector(({authSlice}) => authSlice);
    const dispatch = useAppDispatch();
    const {register, handleSubmit} = useForm<LoginDataType>();
    const handler = async ({username, password}:LoginDataType)=> {
        try {
            // const userWithTokens = await login({ username, password, expiresInMins: 10 });
            // if (userWithTokens?.accessToken) {
            //     navigate('/auth/users');
            //     navigate(0);
            // } else {
            //     console.error("Не удалось получить accessToken");
            // }
        } catch (error) {
            console.error("Ошибка авторизации:", error);
        }
    }
    useEffect(() => {
        dispatch(authSliceActions.logIn({ username: 'emilys', password: 'emilyspass', expiresInMins: 10}))// достать из формы username и password
        navigate('/auth/users');
        navigate(0);
    }, []);
    return (
        <>
            <form onSubmit={handleSubmit(handler)}>
                <div>
                    <input type="text" {...register('username')}/>
                </div>
                <div>
                    <input type="text" {...register('password')}/>
                </div>
                <button type='submit'>save data</button>
            </form>
        </>
    );
};

