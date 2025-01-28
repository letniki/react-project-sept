import {IRecipe} from "./IRecipe.ts";

export type IRecipesResponseModelType = {
    total: number;
    skip: number;
    limit: number;
    recipes: IRecipe[];
}