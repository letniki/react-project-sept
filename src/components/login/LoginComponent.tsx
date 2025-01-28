import {login, refresh} from "../../services/api.service.ts";
import {LoginDataType} from "../../models/LoginDataType.ts";
import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

export const LoginComponent = () => {
    const navigate = useNavigate();
    const {register, handleSubmit} = useForm<LoginDataType>();
    const [formData, setFormData] = useState<LoginDataType>({username:'', password:'', expiresInMins: 10});
    const handler = ({username, password}:LoginDataType)=> {
        setFormData({username: username, password: password, expiresInMins: 10});
    }
    useEffect(() => {
        if (formData){
            login({
                username:formData.username,
                password: formData.password,
                expiresInMins: 10
            })
            setInterval( ()=>refresh(),
                600000);
            if(localStorage.getItem('user')){
                navigate('/auth/users')// переход к какой-то уже залагиненый
            }

        }
    }, [formData]);

    return (
        <>
            <form onSubmit={handleSubmit(handler)}>
                <div>
                    <input type="text" {...register('username')}/>
                </div>
                <div>
                    <input type="text" {...register('password')}/>
                </div>
                <button>save data</button>
            </form>
        </>
    );
};

