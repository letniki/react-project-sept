import {LoginDataType} from "../../../models/LoginDataType.ts";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../../redux/hooks/useAppDispatch.tsx";
import {authSliceActions} from "../../../redux/slices/authSlice/authSlice.tsx";
import {useEffect} from "react";
import {useAppSelector} from "../../../redux/hooks/useAppelector.tsx";
import './LoginComponent.css';
export const LoginComponent = () => {
    const navigate = useNavigate();
    const accessToken = useAppSelector(({authSlice}) => authSlice.accessToken);
    const dispatch = useAppDispatch();
    const {register, handleSubmit} = useForm<LoginDataType>();
    const handler = async({username, password}:LoginDataType)=> {
        await dispatch(authSliceActions.logIn({ username, password, expiresInMins: 30 }));
    }

    useEffect(() => {
        if(accessToken){
            navigate('/auth/users');
        }
    }, [accessToken]);
    return (
        <div className='div'>
            <h2 className='text'>Login Form</h2>
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

