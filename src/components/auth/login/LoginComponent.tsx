import {LoginDataType} from "../../../models/LoginDataType.ts";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../../redux/hooks/useAppDispatch.tsx";
import {useAppSelector} from "../../../redux/hooks/useAppelector.tsx";
import {useEffect} from "react";
import {authSliceActions} from "../../../redux/authSlice/authSlice.tsx";

export const LoginComponent = () => {
    const navigate = useNavigate();
    const refreshToken = useAppSelector(({authSlice}) => authSlice.refreshToken);
    const dispatch = useAppDispatch();
    const {register, handleSubmit} = useForm<LoginDataType>();
    const handler = ({username, password}:LoginDataType)=> {
        dispatch(authSliceActions.logIn({ username, password, expiresInMins: 1 }));
    }

    useEffect(() => {
        if(refreshToken){
            navigate('/auth/users');
            // window.location.reload();
            // navigate(1);
        }

    }, [refreshToken]);
    return (
        <>
            <div>Заповніть  форму</div>
            <form onSubmit={handleSubmit(handler)}>
                <div>
                    username: <input type="text" {...register('username')}/>
                </div>
                <div>
                    password: <input type="text" {...register('password')}/>
                </div>
                <button type='submit'>login</button>
            </form>
        </>
    );
};

