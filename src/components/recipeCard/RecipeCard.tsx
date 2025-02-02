import {Link, useParams} from "react-router-dom";
import {useAppSelector} from "../../redux/hooks/useAppelector.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {recipeSliceActions} from "../../redux/slices/recipeSlice/recipeSlice.tsx";
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
        <>
            {
                recipe &&<div className='recipeCard'>

                    <div className='recipeCardBox'>
                        <h2>{recipe.id}. {recipe.name} </h2>
                    <Link className='userCardLink' to={`/auth/users/${recipe.userId}`}><h3>UserId :{recipe.userId}</h3></Link>

                    <div>
                        <img className='image' src={recipe.image} alt={recipe.name}/>
                    </div>
                    {!(recipe.cookTimeMinutes===0) && <p>Cook time: {recipe.cookTimeMinutes} minutes</p>}
                    {!(recipe.prepTimeMinutes===0) && <p>Prepare time: {recipe.prepTimeMinutes} minutes</p>}
                    <div>Difficulty: {recipe.difficulty}</div>
                </div>
                    <div>
                        <h3>Instructions:</h3>
                        <h3 className='recipeCardBox'>{recipe.instructions}</h3>
                        <h4>Cuisine: {recipe.cuisine}</h4>
                        <p>Calories: {recipe.caloriesPerServing}</p>
                        <p>Rating: {recipe.rating}</p>
                        <div>Meal types: {recipe.mealType.map((mealType, index) => <div key={index}>{mealType}</div>)}</div>
                        <div className='linkToRecipesByTag'> <b>Tags:</b> {
                            recipe.tags.map((tag, index) => <div key={index}>
                                <Link className='recipeLink' to={'/auth/recipes/tag/' + tag}>{tag}</Link>
                            </div>)
                        }</div>
                    </div>
                </div>
            }
        </>
    );
};

