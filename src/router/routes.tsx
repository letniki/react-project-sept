import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {LoginPage} from "../pages/loginPage/LoginPage.tsx";
import {AuthUsersPage} from "../pages/authUsersPage/AuthUsersPage.tsx";
import {UserCard} from "../components/userCard/UserCard.tsx";

export const routes = createBrowserRouter([
    {path:'', element:<MainLayout/>, children:[
            {path:'login', element:<LoginPage/>},
            {path:'/auth/users', element:<AuthUsersPage/>},
            {path:'/auth/users/:id', element:<UserCard/>}
        ]
    }]);