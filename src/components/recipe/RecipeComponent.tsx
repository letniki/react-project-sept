import {Link} from "react-router-dom";
import {IRecipe} from "../../models/IRecipe.ts";
import './RecipeComponent.css'
interface IRecipeProps {
    recipe:IRecipe
}
export const RecipeComponent = ({recipe}:IRecipeProps) => {
    return (
        <div>
            <Link to={`/auth/recipes/${recipe.id}`}><h2>{recipe.id}. {recipe.name}</h2>
            <img className='image' src={recipe.image} alt={recipe.name}/></Link>
                {
                    recipe.tags.map((tag, index)=><div key={index}><Link  to={'/auth/recipes/tag/'+ tag}>{tag}</Link></div>)
                }
        </div>
    );
};

