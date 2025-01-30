import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {LoginPage} from "../pages/loginPage/LoginPage.tsx";
import {AuthUsersPage} from "../pages/authUsersPage/AuthUsersPage.tsx";
import {AuthRecipesPage} from "../pages/authRecipesPage/AuthRecipesPage.tsx";
import {UserComponent} from "../components/user/UserComponent.tsx";
import {RecipeCard} from "../components/recipeCard/RecipeCard.tsx";

export const routes = createBrowserRouter([
    {path:'', element:<MainLayout/>, children:[
            {path:'/auth/users', element:<AuthUsersPage/>},
            {path:'/login', element:<LoginPage/>},
            {path:'/auth/users/:id', element:<UserComponent/>},
            {path:'/auth/recipes', element:<AuthRecipesPage/>},
            {path:'/auth/recipes/:id', element:<RecipeCard/>},
        ]
    }]);