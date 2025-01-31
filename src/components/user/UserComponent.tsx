import {useNavigate, useParams} from "react-router-dom";
import {useAppSelector} from "../../redux/hooks/useAppelector.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {userSliceActions} from "../../redux/userSlice/userSlice.tsx";
import {recipeSliceActions} from "../../redux/recipeSlice/recipeSlice.tsx";
import {RecipeComponent} from "../recipe/RecipeComponent.tsx";


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
            {user && <div>{user.username}</div>}

            {id && recipes.map(recipe => (recipe.userId === +id ? (<RecipeComponent key={recipe.id} recipe={recipe} />) : null))}
        </div>
    );
};

