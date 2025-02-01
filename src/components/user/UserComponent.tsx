import {Link} from "react-router-dom";
import {IUser} from "../../models/IUser.ts";

interface IUserProps {
    user:IUser
}
export const UserComponent = ({user}:IUserProps) => {
    return (
        <div className='userBox'>
            <Link key={user.id} to={`${user.id}`}>
                <h2>{user.id}. {user.firstName} {user.lastName}</h2>
                <p>Age:{user.age}</p>
            </Link>
        </div>
    );
};

