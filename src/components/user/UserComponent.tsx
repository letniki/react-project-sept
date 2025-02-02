import {Link} from "react-router-dom";
import {IUser} from "../../models/IUser.ts";
import './UserComponent.css'
interface IUserProps {
    user:IUser
}
export const UserComponent = ({user}:IUserProps) => {
    return (
        <div className='userBox'>
            <Link className='userLink' key={user.id} to={`${user.id}`}>
                <h2>{user.id}. {user.firstName} {user.lastName}</h2>
                <img src={user.image} alt={user.lastName}/>
                <h3>Age:{user.age}</h3>
            </Link>
        </div>
    );
};

