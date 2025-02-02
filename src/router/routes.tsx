import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {LoginPage} from "../pages/loginPage/LoginPage.tsx";
import {AuthUsersPage} from "../pages/authUsersPage/AuthUsersPage.tsx";
import {AuthRecipesPage} from "../pages/authRecipesPage/AuthRecipesPage.tsx";
import {UserCardComponent} from "../components/userCard/UserCardComponent.tsx";
import {RecipeCard} from "../components/recipeCard/RecipeCard.tsx";
import {RecipesByTagComponent} from "../components/recipesByTag/RecipesByTagComponent.tsx";
import {ErrorComponent} from "../components/error/ErrorComponent.tsx";

export const routes = createBrowserRouter([
    {path:'', element:<MainLayout/>, errorElement:<ErrorComponent/>, children:[
            {path:'/auth/users', element:<AuthUsersPage/>},
            {path:'/login', element:<LoginPage/>},
            {path:'/auth/users/:id', element:<UserCardComponent/>},
            {path:'/auth/recipes', element:<AuthRecipesPage/>},
            {path:'/auth/recipes/:id', element:<RecipeCard/>},
            {path:'/auth/recipes/tag/:tag', element:<RecipesByTagComponent/>}
        ]
    }]);