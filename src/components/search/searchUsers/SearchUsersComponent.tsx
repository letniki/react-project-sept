import {useAppDispatch} from "../../../redux/hooks/useAppDispatch.tsx";
import {useAppSelector} from "../../../redux/hooks/useAppelector.tsx";
import {userSliceActions} from "../../../redux/userSlice/userSlice.tsx";
import {useForm} from "react-hook-form";
import {Link, useNavigate} from "react-router-dom";
import '../Search.css'

export const SearchUsersComponent = () => {
    const navigate = useNavigate();
    const {searchedUsers} = useAppSelector(({userSlice})=>userSlice);
    const dispatch = useAppDispatch();
    const {register, handleSubmit, watch} = useForm<{query:string}>();

    const query = watch("query");

    const handler = async ({query}:{query : string})=> {
        const trimmedQuery = query.trim();
        if(trimmedQuery.length > 1 || !isNaN(Number(trimmedQuery))){
            await dispatch(userSliceActions.searchUsers(trimmedQuery));
        }
    }
    // useEffect(() => {
    //     dispatch(userSliceActions.searchUsers(query.trim()));
    // }, [query]);
    return (
        <>
<button onClick={()=>navigate(-1)}>Назад</button>
                <div className='text'>If you want to search users Please enter id <b>(from 1 to 208)</b></div>
            <div className='text'>Or part of first Name, last Name, email <b>(2 letters min)</b></div>
            <div className='box'>
                <form className='form' onSubmit={handleSubmit(handler)}>
                    {/*<div>*/}
                    <input className='inp' type="text" {...register('query', {required: "Field cannot be empty"})}></input>
                    <button className='button' type='submit' disabled={!query?.trim() || Number(query?.trim()) > 208}>Search Users</button>
                    {/*</div>*/}
                </form>
                </div>
                {searchedUsers.map(user => <Link key={user.id} to={`${user.id}`}>
                    <h2>{user.id}. {user.firstName} {user.lastName}</h2>
                    <p>Age:{user.age}</p>
                </Link>)}

            <hr/>
        </>
    );
};

