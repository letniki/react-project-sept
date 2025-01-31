import {LoginDataType} from "../../../models/LoginDataType.ts";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../../redux/hooks/useAppDispatch.tsx";
import {useAppSelector} from "../../../redux/hooks/useAppelector.tsx";
import {useEffect} from "react";
import {authSliceActions} from "../../../redux/authSlice/authSlice.tsx";

export const LoginComponent = () => {
    const navigate = useNavigate();
    const accessToken = useAppSelector(({authSlice}) => authSlice.accessToken);
    const dispatch = useAppDispatch();
    const {register, handleSubmit} = useForm<LoginDataType>();
    const handler = async({username, password}:LoginDataType)=> {
        await dispatch(authSliceActions.logIn({ username, password, expiresInMins: 1 }));
    }

    useEffect(() => {
        if(accessToken){
            navigate('/auth/users');
            // window.location.reload();
            // navigate(1);
        }

    }, [accessToken]);
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

