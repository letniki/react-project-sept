import {useAppSelector} from "../../redux/hooks/useAppelector.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {userSliceActions} from "../../redux/userSlice/userSlice.tsx";
import {UserComponent} from "../user/UserComponent.tsx";
import {useSearchParams} from "react-router-dom";
import {refresh} from "../../services/api.service.ts";

export const UsersComponent = () => {
    setInterval(()=>refresh(), 540000);
    const {users} = useAppSelector(({userSlice}) => userSlice);
    const [searchParams] = useSearchParams({page:'1'});
    const dispatch = useAppDispatch();
    useEffect(() => {
        const currentPage = searchParams.get('page') || '1';
        dispatch(userSliceActions.loadUsers(currentPage));
    }, [searchParams]);
    console.log(users);
    return (
        <div>
            {
                users.map(user=><UserComponent key={user.id} user={user}/>)
            }
        </div>
    );
};

