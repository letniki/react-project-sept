import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.tsx";

export const routes = createBrowserRouter([
    {path:'', element:<MainLayout/>, children:[
            {path:'login', element:<LoginPage/>},
            {path:'/auth/resources', element:<AuthResourcesPage/>}]
            }]);