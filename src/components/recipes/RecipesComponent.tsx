import {useAppSelector} from "../../redux/hooks/useAppelector.tsx";
import {useSearchParams} from "react-router-dom";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {recipeSliceActions} from "../../redux/recipeSlice/recipeSlice.tsx";
import {RecipeComponent} from "../recipe/RecipeComponent.tsx";

export const RecipesComponent = () => {
    const {recipes} = useAppSelector(({recipeSlice})=>recipeSlice);
    const [searchParams] = useSearchParams({page:'1'});
    const dispatch = useAppDispatch();
    useEffect(() => {
        const currentPage = searchParams.get('page') || '1';
        dispatch(recipeSliceActions.loadPaginatedRecipes(currentPage));
    }, [searchParams]);
    return (
        <div>
            {
              recipes.map(recipe=><RecipeComponent key={recipe.id} recipe={recipe}/>)
            }
        </div>
    );
};

