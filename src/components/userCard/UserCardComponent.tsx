import {useParams} from "react-router-dom";
import {useAppSelector} from "../../redux/hooks/useAppelector.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {userSliceActions} from "../../redux/slices/userSlice/userSlice.tsx";
import {recipeSliceActions} from "../../redux/slices/recipeSlice/recipeSlice.tsx";
import {RecipeComponent} from "../recipe/RecipeComponent.tsx";
import './UserCardComponent.css'

export const UserCardComponent = () => {
    const {id} = useParams();
    const {user} = useAppSelector(({userSlice}) => userSlice);
    const dispatch = useAppDispatch();
    const {recipes} = useAppSelector(({recipeSlice}) => recipeSlice);
    useEffect(() => {
        if(id){
            dispatch(userSliceActions.loadUser(id));
            dispatch(recipeSliceActions.loadAllRecipes());
        }
    }, [id]);
    return (
        <div>
            <div className='box'>
            {user && (<div>
                    <h1 >{user.id}. {user.firstName} {user.lastName}</h1>
                    <h2>Username: {user.username}</h2>
                    <h3>Email: {user.email}</h3>
                    <h3>Phone: {user.phone}</h3>
                    <h3>University: {user.university}</h3>
                    <p>Birth date: {user.birthDate}</p>
                    <p>Age: {user.age} years</p>
                    <p>Blood group: {user.bloodGroup}</p>
                    <p>Eye color: {user.eyeColor}</p>
                    <p> Hair color: {user.hair.color} - Hair type: {user.hair.type} </p>

                    <p>Height: {user.height} Weight: {user.weight}</p>


                </div>

            )
            }
                <div className='recipeComp'>
            {id && recipes.map(recipe => (recipe.userId === +id ? (<RecipeComponent key={recipe.id} recipe={recipe} />) : null))}</div>
        </div></div>
    );
};

