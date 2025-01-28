import {Link} from "react-router-dom";
import {LoginPage} from "../../pages/loginPage/LoginPage.tsx";

export const Menu = () => {
    return (
        <ul>
            <li><Link to={'/'}>home</Link></li>
            {
               // localStorage.getItem('user') && <img src={} />//todo
            }
            {
                !localStorage.getItem('user') && <LoginPage/>
            }
            <li><Link to={'/auth/users'}>users</Link></li>
            <li><Link to={'/auth/recipes'}>recipes</Link></li>
            <li><Link to={'/auth/resources'}>resources</Link></li>
        </ul>
    );
};

