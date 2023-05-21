import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";
import "./Layout.css";

function Layout() {
    return (
        <div className="layout">
            <Nav />
            <div className="content">
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;
