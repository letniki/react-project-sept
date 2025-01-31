import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useAppSelector} from "../../redux/hooks/useAppelector.tsx";
import {userSliceActions} from "../../redux/userSlice/userSlice.tsx";
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";


export const SearchComponent = () => {
    const {searchedUsers} = useAppSelector(({userSlice})=>userSlice);
    const dispatch = useAppDispatch();
    const {register, handleSubmit, watch} = useForm<{query:string}>();

    const query = watch("query");

    const handler = ({query}:{query : string})=> {
const trimmedQuery = query.trim();
if(trimmedQuery){
    dispatch(userSliceActions.searchUsers(trimmedQuery));
}
    }
    // useEffect(() => {
    //     dispatch(userSliceActions.searchUsers(query.trim()));
    // }, [query]);
    return (
        <>
            <div>Please enter id from 1 to 208</div>
            <div>Or part of first Name, last Name, email</div>
            <form onSubmit={handleSubmit(handler)}>
                <div>
                    <input type="text" {...register('query', { required: "Field cannot be empty" })}></input>

                <button type='submit' disabled={!query?.trim() || Number(query?.trim())>208}>Search Users</button></div>
            </form>
            {searchedUsers.map(user => <Link key={user.id} to={`${user.id}`}>
                <h2>{user.id}. {user.firstName} {user.lastName}</h2>
                <p>Age:{user.age}</p>
            </Link>)}
            <hr/>
        </>
    );
};

