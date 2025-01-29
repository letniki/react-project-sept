import {Link} from "react-router-dom";

export const Menu = () => {
    const user = localStorage.getItem('user');
    return (
        <ul>
            {
               user && <ul>
                    <li><Link to={'/'}>home</Link></li>
                    <img src={JSON.parse(user).image} alt={JSON.parse(user).username}/>
                    <li><Link to={'/auth/users'}>users</Link></li>
                    <li><Link to={'/auth/recipes'}>recipes</Link></li>
                    <li><Link to={'/auth/resources'}>resources</Link></li>
                </ul>
            }
            {
            !user && <li><Link to={'/login'}>login</Link></li>
            }

        </ul>
    );
};

