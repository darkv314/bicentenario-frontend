import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";
import "./Layout.css";

function Layout() {
    return (
        <main className="App">
            <div className="layout">
                <Nav />
                <div className="content">
                    <Outlet />
                </div>
            </div>
        </main>
    );
}

export default Layout;
