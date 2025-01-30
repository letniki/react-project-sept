import {Outlet} from "react-router-dom";
import {Menu} from "../components/menu/Menu.tsx";
import {RefreshComponent} from "../components/auth/refresh/RefreshComponent.tsx";

export const MainLayout = () => {
    return (
        <>
            <Menu/>
            <RefreshComponent/>
            <Outlet/>
        </>
    );
};

