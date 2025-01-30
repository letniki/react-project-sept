import {createRoot} from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import {Provider} from "react-redux";
import {routes} from "./router/routes.tsx";
import {store} from "./redux/store.ts";
import {RefreshComponent} from "./components/auth/refresh/RefreshComponent.tsx";

createRoot(document.getElementById('root')!).render(<Provider store={store}>
        <RefreshComponent/>
        <RouterProvider router={routes}/>
</Provider>
)
