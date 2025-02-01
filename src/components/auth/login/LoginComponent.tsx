import {LoginDataType} from "../../../models/LoginDataType.ts";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../../redux/hooks/useAppDispatch.tsx";
import {authSliceActions} from "../../../redux/authSlice/authSlice.tsx";
import {useEffect} from "react";
import {useAppSelector} from "../../../redux/hooks/useAppelector.tsx";
import './LoginComponent.css';
export const LoginComponent = () => {
    const navigate = useNavigate();
    const accessToken = useAppSelector(({authSlice}) => authSlice.accessToken);
    // const {accessToken} = retriveLocalStorage<IUserWithTokens>('user');
    const dispatch = useAppDispatch();
    const {register, handleSubmit} = useForm<LoginDataType>();
    const handler = async({username, password}:LoginDataType)=> {
        await dispatch(authSliceActions.logIn({ username, password, expiresInMins: 10 }));
    }

    useEffect(() => {
        if(accessToken){
            navigate('/auth/users');
            // window.location.reload();
            // navigate(1);
        }
    }, [accessToken]);
    return (
        <div className='div'>
            <div className='text'>Заповніть  форму</div>
            <form className='loginForm' onSubmit={handleSubmit(handler)}>
                <div className='text'>
                    <input className='input' type="text" placeholder='username' {...register('username', {required: "Field cannot be empty"})}/>
                </div>
                <div className='text'>
                    <input className='input' placeholder='password' type="text" {...register('password', {required: "Field cannot be empty"})}/>
                </div>
                <button className='button' type='submit'>login</button>
            </form>
        </div>
    );
};

