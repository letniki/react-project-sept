import {Link} from "react-router-dom";
import './ErrorComponent.css'
export const ErrorComponent = () => {
    return (
        <div>
            <h2>Error, check url </h2>
            <Link className='Link' to={'/login'}><h2>Or click here to go to login page</h2></Link>
        </div>
    );
};