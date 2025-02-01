import {useAppSelector} from "../../redux/hooks/useAppelector.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {recipeSliceActions} from "../../redux/recipeSlice/recipeSlice.tsx";
import {RecipeComponent} from "../recipe/RecipeComponent.tsx";
import {useParams} from "react-router-dom";

export const RecipesByTagComponent = () => {
    const {recipesByTag} = useAppSelector(({recipeSlice})=>recipeSlice);
    const { tag } = useParams();
    const dispatch = useAppDispatch();
    useEffect(() => {
        console.log(tag);
        if(tag){
            dispatch(recipeSliceActions.loadRecipesByTag(tag))
        }
    }, [tag]);
    return (
        <div className='recipesBox'>
            {recipesByTag.map(recipe=><RecipeComponent key={recipe.id} recipe={recipe}/>)}
        </div>
    );
};

