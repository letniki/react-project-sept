import {Link} from "react-router-dom";
import {useAppSelector} from "../../redux/hooks/useAppelector.tsx";
import {useEffect, useState} from "react";
import './Menu.css'
export const Menu = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const {accessToken, refreshToken} = useAppSelector(({authSlice})=>authSlice);
    const user = localStorage.getItem('user');
    useEffect(() => {
        if (user) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    }, [user, accessToken, refreshToken]);
    return (
        <>
            {
                (isAuthenticated) ? (<ul className='block'>
                    <li><Link className='Link' to={'/auth/users'}>users</Link></li>
                    <li><Link className='Link' to={'/auth/recipes'}>recipes</Link></li>

                    {user ? (<img className='img' src={JSON.parse(user).image} alt={JSON.parse(user).username}/>) : (
                        <li><Link to={'/login'}>login</Link></li>)}
                </ul>) : (<>
                    {/*<div>Вам потрібно аутентифікуватись. Перейдіть за посиланням*/}
                    <ul className='block'>
                           <li className='Link'><Link className='Link' to={'/login'}>login</Link></li>
                       </ul>
            {/*</div>*/}
                </>)
            }
        </>
    );
};

