import {useAppDispatch} from "../../../redux/hooks/useAppDispatch.tsx";
import {useAppSelector} from "../../../redux/hooks/useAppelector.tsx";
import {userSliceActions} from "../../../redux/slices/userSlice/userSlice.tsx";
import {useForm} from "react-hook-form";
import '../Search.css'
import {UserComponent} from "../../user/UserComponent.tsx";

export const SearchUsersComponent = () => {
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
    return (
        <>
            <div className='text'>If you want to search user please enter id <b>(from 1 to 208)</b></div>
            <div className='text'>or part of first name, last name, email <b>(2 letters min)</b></div>
            <div className='box'>
                <form className='form' onSubmit={handleSubmit(handler)}>
                    <input className='inp'
                           type="text" {...register('query', {required: "Field cannot be empty"})}></input>
                    <button className='button' type='submit'
                            disabled={!query?.trim() || Number(query?.trim()) > 208}>Search Users
                    </button>
                </form>
            </div>
            <div className='usersBox'>
            {searchedUsers.map(user => <UserComponent key={user.id} user={user}/>)}
            </div>
            <hr/>
        </>
    );
};

