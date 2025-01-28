import {Outlet} from "react-router-dom";
import {Menu} from "../components/menu/Menu.tsx";
import {LoginPage} from "../pages/loginPage/LoginPage.tsx";

export const MainLayout = () => {
    return (
        <>
            {
                localStorage.getItem('user') && <><Menu/><Outlet/></>
            }
            {
                !localStorage.getItem('user') && <><LoginPage/></>
            }

        </>
    );
};

