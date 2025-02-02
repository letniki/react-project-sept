import {useAppSelector} from "../../redux/hooks/useAppelector.tsx";
import {useSearchParams} from "react-router-dom";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {recipeSliceActions} from "../../redux/slices/recipeSlice/recipeSlice.tsx";
import {RecipeComponent} from "../recipe/RecipeComponent.tsx";
import './RecipesComponent.css'

export const RecipesComponent = () => {
    const {recipes} = useAppSelector(({recipeSlice})=>recipeSlice);
    const [searchParams] = useSearchParams({page:'1'});
    const dispatch = useAppDispatch();
    useEffect(() => {
        const currentPage = searchParams.get('page') || '1';
        dispatch(recipeSliceActions.loadPaginatedRecipes(currentPage));
    }, [searchParams]);
    return (
        <div className='recipesBox'>
            {
              recipes.map(recipe=><RecipeComponent key={recipe.id} recipe={recipe}/>)
            }
        </div>
    );
};

