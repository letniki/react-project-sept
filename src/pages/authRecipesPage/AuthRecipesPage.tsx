import {PaginationComponent} from "../../components/pagination/PaginationComponent.tsx";
import {RecipesComponent} from "../../components/recipes/RecipesComponent.tsx";
import {SearchRecipesComponent} from "../../components/search/searchRecipes/SearchRecipesComponent.tsx";
import {Link} from "react-router-dom";

export const AuthRecipesPage = () => {

    return (
        <>
        <SearchRecipesComponent/>
        <h2 className='text'><Link className='Link' to='search'>Click Here To Search Recipes</Link></h2>
    <h2 className='text'>All Recipes</h2>
            <RecipesComponent/>
            <PaginationComponent lastPage={5}/>
        </>
    );
};