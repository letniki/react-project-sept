import {UsersComponent} from "../../components/users/UsersComponent.tsx";
import {PaginationComponent} from "../../components/pagination/PaginationComponent.tsx";
import {SearchUsersComponent} from "../../components/search/searchUsers/SearchUsersComponent.tsx";

export const AuthUsersPage = () => {

    return (
        <><SearchUsersComponent/>
            <h2 className='text'>All Users</h2>
            <UsersComponent/>
            <PaginationComponent lastPage={7}/>
        </>
    );
};

