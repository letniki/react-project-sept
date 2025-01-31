import {Link} from "react-router-dom";
import {useAppSelector} from "../../redux/hooks/useAppelector.tsx";
import {useEffect, useState} from "react";

export const Menu = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const accessToken = useAppSelector(({authSlice})=>authSlice.accessToken);
    const user = localStorage.getItem('user');
    useEffect(() => {
        if (user) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    }, [user, accessToken]);
    return (
        <>
            {
                (isAuthenticated) ? (<ul>

                    {user ? (<img src={JSON.parse(user).image} alt={JSON.parse(user).username}/>) : (<li><Link to={'/login'}>login</Link></li>)}
                    <li><Link to={'/auth/users'}>users</Link></li>
                    <li><Link to={'/auth/recipes'}>recipes</Link></li>
                </ul>) : (<><div>Вам потрібно аутентифікуватись. Перейдіть за посиланням
                       <ul>
                           <li><Link to={'/login'}>login</Link></li>
                       </ul></div></>)
            }
        </>
    );
};

