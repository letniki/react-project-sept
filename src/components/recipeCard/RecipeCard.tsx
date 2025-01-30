import {Link, useParams} from "react-router-dom";
import {useAppSelector} from "../../redux/hooks/useAppelector.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {recipeSliceActions} from "../../redux/recipeSlice/recipeSlice.tsx";
import './RecipeCard.css'
export const RecipeCard = () => {
    const {id} = useParams();
    const {recipe} = useAppSelector(({recipeSlice}) => recipeSlice);
    const dispatch = useAppDispatch();
    useEffect(() => {
        if(id){
            dispatch(recipeSliceActions.loadRecipe(id))
        }
    }, [id]);
    return (
        <div>
            {
                recipe &&<div><h2>{recipe.id}. {recipe.name} </h2>
                    <img className='image' src={recipe.image} alt={recipe.name}/>
                    <h4>Cuisine: {recipe.cuisine}</h4>
                <Link to={`/auth/users/${recipe.userId}`}>UserId :{recipe.userId}</Link>
                    <p>Calories: {recipe.caloriesPerServing}</p>
                </div>
            }
        </div>
    );
};

