import {Link} from "react-router-dom";
import {IRecipe} from "../../models/IRecipe.ts";

interface IRecipeProps {
    recipe:IRecipe
}
export const RecipeComponent = ({recipe}:IRecipeProps) => {
    return (
        <div>
            <Link to={`${recipe.id}`}><h2>{recipe.id}. {recipe.name}</h2>
            <h3>{recipe.image}</h3></Link>
            <Link to={'/'}>{recipe.tags}</Link>
        </div>
    );
};

