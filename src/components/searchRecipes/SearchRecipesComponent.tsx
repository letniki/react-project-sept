import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useAppSelector} from "../../redux/hooks/useAppelector.tsx";
import {useForm} from "react-hook-form";
import {RecipeComponent} from "../recipe/RecipeComponent.tsx";
import {recipeSliceActions} from "../../redux/recipeSlice/recipeSlice.tsx";


export const SearchRecipeComponent = () => {
    const {searchedRecipes} = useAppSelector(({recipeSlice})=>recipeSlice);
    const dispatch = useAppDispatch();
    const {register, handleSubmit, watch} = useForm<{query:string}>();

    const query = watch("query");

    const handler = ({query}:{query : string})=> {
        const trimmedQuery = query.trim();
        if(trimmedQuery){
            dispatch(recipeSliceActions.searchRecipes(trimmedQuery));
        }
    }
    // useEffect(() => {
    //     dispatch(userSliceActions.searchUsers(query.trim()));
    // }, [query]);
    return (
        <>
            <div>Please enter id from 1 to 50</div>
            <div>Or part of first Name, last Name, email</div>
            <form onSubmit={handleSubmit(handler)}>
                <div>
                    <input type="text" {...register('query', { required: "Field cannot be empty" })}></input>

                    <button type='submit' disabled={!query?.trim() || Number(query?.trim())>50}>Search Users</button></div>
            </form>
            {searchedRecipes.map(recipe => <RecipeComponent key={recipe.id} recipe={recipe}/>)}
            <hr/>
        </>
    );
};
