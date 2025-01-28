import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useAppSelector} from "../../redux/hooks/useAppelector.tsx";
import {useEffect} from "react";
import {userSliceActions} from "../../redux/userSlice/userSlice.tsx";

export const AuthUsersPage = () => {
    const {users} = useAppSelector(({userSlice}) => userSlice);

    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(userSliceActions.loadUsers());
    }, []);
    console.log(users);
    return (
        <div>
            {
                users.map(user=><div key={user.id}>{user.id}</div>)
            }
        </div>
    );
};

