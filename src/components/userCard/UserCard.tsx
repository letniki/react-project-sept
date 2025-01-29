import {useParams} from "react-router-dom";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useAppSelector} from "../../redux/hooks/useAppelector.tsx";
import {useEffect} from "react";
import {userSliceActions} from "../../redux/userSlice/userSlice.tsx";

export const UserCard = () => {
    const {id} = useParams();
    const {user} = useAppSelector(({userSlice}) => userSlice);
    const dispatch = useAppDispatch();
    useEffect(() => {
        if(id){
            dispatch(userSliceActions.loadUser(id))
        }
    }, []);
    return (
        <div>
            {user && <div>{user.username}</div>}
        </div>
    );
};

