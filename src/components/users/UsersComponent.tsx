import {useAppSelector} from "../../redux/hooks/useAppelector.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {userSliceActions} from "../../redux/userSlice/userSlice.tsx";
import {Link, useSearchParams} from "react-router-dom";
import {SearchUsersComponent} from "../search/searchUsers/SearchUsersComponent.tsx";

export const UsersComponent = () => {
    const {users} = useAppSelector(({userSlice}) => userSlice);
    const [searchParams] = useSearchParams({page:'1'});
    const dispatch = useAppDispatch();

    useEffect(() => {
        const currentPage = searchParams.get('page') || '1';
        dispatch(userSliceActions.loadUsers(currentPage));
    },[searchParams]);
    return (
        <div>
            <Link className='Link' to={'search'}>Search Users</Link>
            <SearchUsersComponent/>
            {
                users.map(user=><Link key={user.id} to={`${user.id}`}>
                    <h2>{user.id}. {user.firstName} {user.lastName}</h2>
                    <p>Age:{user.age}</p>
                </Link>)
            }
        </div>
    );
};

