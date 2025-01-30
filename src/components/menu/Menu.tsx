import {Link} from "react-router-dom";
import {useAppSelector} from "../../redux/hooks/useAppelector.tsx";

export const Menu = () => {
    const refreshToken = useAppSelector(({authSlice})=>authSlice.refreshToken);
    const user = localStorage.getItem('user');
    return (
        <>
            {
               user && refreshToken ? <ul>

                    {user && <img src={JSON.parse(user).image} alt={JSON.parse(user).username}/>}
                    <li><Link to={'/auth/users'}>users</Link></li>
                    <li><Link to={'/auth/recipes'}>recipes</Link></li>
                </ul> : <>
                   <div>Вам потрібно аутентифікуватись. Перейдіть за посиланням
                       <ul>
                           <li><Link to={'/login'}>login</Link></li>
                       </ul></div>
               </>
            }
            {/*{*/}
            {/*    (!user && !refreshToken) && */}
            {/*}*/}

        </>
    );
};

