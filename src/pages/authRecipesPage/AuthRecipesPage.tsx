import {PaginationComponent} from "../../components/pagination/PaginationComponent.tsx";
import {RecipesComponent} from "../../components/recipes/RecipesComponent.tsx";
import {SearchRecipeComponent} from "../../components/search/searchRecipes/SearchRecipesComponent.tsx";

export const AuthRecipesPage = () => {

    return (
        <>
            <SearchRecipeComponent/>
            <RecipesComponent/>
            <PaginationComponent lastPage={5}/>
        </>
    );
};