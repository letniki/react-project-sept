import {PaginationComponent} from "../../components/pagination/PaginationComponent.tsx";
import {RecipesComponent} from "../../components/recipes/RecipesComponent.tsx";
import {SearchRecipesComponent} from "../../components/search/searchRecipes/SearchRecipesComponent.tsx";

export const AuthRecipesPage = () => {

    return (
        <>
        <SearchRecipesComponent/>
    <h2 className='text'>All Recipes</h2>
            <RecipesComponent/>
            <PaginationComponent lastPage={5}/>
        </>
    );
};