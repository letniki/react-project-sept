import {useAppSelector} from "../../redux/hooks/useAppelector.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {userSliceActions} from "../../redux/slices/userSlice/userSlice.tsx";
import {useSearchParams} from "react-router-dom";
import {UserComponent} from "../user/UserComponent.tsx";
import './UsersComponent.css'
export const UsersComponent = () => {
    const {users} = useAppSelector(({userSlice}) => userSlice);
    const [searchParams] = useSearchParams({page:'1'});
    const dispatch = useAppDispatch();

    useEffect(() => {
        const currentPage = searchParams.get('page') || '1';
        dispatch(userSliceActions.loadUsers(currentPage));
    },[searchParams]);
    return (
        <div className='usersBox'>
            {
                users.map(user=><UserComponent key={user.id} user={user}/>)
            }
        </div>
    );
};

