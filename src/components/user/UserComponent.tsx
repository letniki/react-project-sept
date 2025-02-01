import {useNavigate, useParams} from "react-router-dom";
import {useAppSelector} from "../../redux/hooks/useAppelector.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {userSliceActions} from "../../redux/userSlice/userSlice.tsx";
import {recipeSliceActions} from "../../redux/recipeSlice/recipeSlice.tsx";
import {RecipeComponent} from "../recipe/RecipeComponent.tsx";
import './UserComponent.css'

export const UserComponent = () => {
    const {id} = useParams();
    const navigate = useNavigate();
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
            <button onClick={() => navigate(-1)}>Назад</button>
            <div className='box'>
            {user && (<div>
                    <h2>{user.id}. {user.firstName} {user.lastName}</h2>
                    <h3>Username: {user.username}</h3>
                    <div>Email: {user.email}</div>
                    <div>Phone: {user.phone}</div>
                    <div>Eye color: {user.eyeColor} </div>
                    <div> Hair color: {user.hair.color} - Hair type: {user.hair.type} </div>
                    <p>Age: {user.age}</p>
                    <p>Height: {user.height} Weight: {user.weight}</p>
                    <div>Birth date: {user.birthDate}</div>
                    <div>Blood group: {user.bloodGroup}</div>


                </div>

            )
            }

            {id && recipes.map(recipe => (recipe.userId === +id ? (<RecipeComponent key={recipe.id} recipe={recipe} />) : (<></>)))}</div>
        </div>
    );
};

