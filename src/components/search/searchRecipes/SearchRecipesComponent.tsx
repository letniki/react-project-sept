import {useAppDispatch} from "../../../redux/hooks/useAppDispatch.tsx";
import {useAppSelector} from "../../../redux/hooks/useAppelector.tsx";
import {useForm} from "react-hook-form";
import {RecipeComponent} from "../../recipe/RecipeComponent.tsx";
import {recipeSliceActions} from "../../../redux/recipeSlice/recipeSlice.tsx";


export const SearchRecipesComponent = () => {
    const {searchedRecipes} = useAppSelector(({recipeSlice})=>recipeSlice);
    const dispatch = useAppDispatch();
    const {register, handleSubmit, watch} = useForm<{query:string}>();

    const query = watch("query");

    const handler = async ({query}:{query : string})=> {
        const trimmedQuery = query.trim();
        if(trimmedQuery.length > 1 || !isNaN(Number(trimmedQuery))){
           await dispatch(recipeSliceActions.searchRecipes(trimmedQuery));
        }
    }
    // useEffect(() => {
    //     dispatch(userSliceActions.searchUsers(query.trim()));
    // }, [query]);
    return (
        <>
            <div className='text'>Please enter id from 1 to 50</div>
            <div className='text'>Or part of the recipe name</div>
            <div className='box'>
                <form className='form' onSubmit={handleSubmit(handler)}>
                    <input className='inp' type="text" {...register('query', { required: "Field cannot be empty" })}></input>
                    <button className='button' type='submit' disabled={!query?.trim() || Number(query?.trim())>50}>Search Recipes</button>
                </form></div>
            {searchedRecipes.map(recipe => <RecipeComponent key={recipe.id} recipe={recipe}/>)}
            <hr/>
        </>
    );
};
