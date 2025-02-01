import {Link} from "react-router-dom";
import {IRecipe} from "../../models/IRecipe.ts";
import './RecipeComponent.css'
interface IRecipeProps {
    recipe:IRecipe
}
export const RecipeComponent = ({recipe}:IRecipeProps) => {
    return (
        <div className="recipeBox">
            <Link className='recipeLink' to={`/auth/recipes/${recipe.id}`}><h3>{recipe.id}. {recipe.name}</h3>
            <img className='recipeImage' src={recipe.image} alt={recipe.name}/></Link>
                <div className='linkToRecipesByTag'>{
                    recipe.tags.map((tag, index)=><div key={index}><Link  className='recipeLink' to={'/auth/recipes/tag/'+ tag}>{tag}</Link></div>)
                }</div>
        </div>
    );
};

