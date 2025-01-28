import {Link} from "react-router-dom";

export const Menu = () => {
    return (
        <ul>
            <li><Link to={'/'}>home</Link></li>
            <li><Link to={'/login'}>login</Link></li>
            <li><Link to={'/auth/users'}>users</Link></li>
            <li><Link to={'/auth/recipes'}>recipes</Link></li>
            <li><Link to={'/auth/resources'}>resources</Link></li>
        </ul>
    );
};

