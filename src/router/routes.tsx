import {createBrowserRouter} from "react-router-dom";

createBrowserRouter([
    {path:'', element:<MainLayout/>, children:[
            {path:'login', element:<LoginPage/>},
            {path:'/auth/resources', element:<AuthResourcesPage/>}]
            }])