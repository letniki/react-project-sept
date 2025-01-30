import {PaginationComponent} from "../../components/pagination/PaginationComponent.tsx";
import {RecipesComponent} from "../../components/recipes/RecipesComponent.tsx";

export const AuthRecipesPage = () => {

    return (
        <>
            <RecipesComponent/>
            <PaginationComponent lastPage={5}/>
        </>
    );
};