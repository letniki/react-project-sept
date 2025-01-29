import {IUser} from "../../models/IUser.ts";
import {Link} from "react-router-dom";

interface IUserProps {
    user:IUser
}
export const UserComponent = ({user}:IUserProps) => {

    return (
        <div className="block">
            <Link to={`${user.id}`}>
            <h2>{user.id}. {user.firstName} {user.lastName}</h2>
            <p>Age:{user.age}</p>
            </Link>
        </div>
    );
};

