import { Link, Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";
import "./Layout.css";
import { useState } from "react";
import { navLinkList } from "../../Helpers/Helpers";
import { Cancel } from "../../assets/icons/cancel";

function Layout() {
    const [menu, setMenu] = useState(false);
    return (
        <main className="App">
            <div
                className="layout"
                onClick={(e) => {
                    if (menu) setMenu(false);
                }}
            >
                <div className="content">
                    <Nav setMenu={setMenu} />
                    {menu ? <Menu setMenu={setMenu} /> : null}
                    <Outlet />
                </div>
            </div>
        </main>
    );
}

export default Layout;

function Menu({ setMenu }) {
    return (
        <div
            onClick={(e) => {
                e.stopPropagation();
            }}
            className="nav-menu"
        >
            <div className="nav-menu-link-container">
                <button
                    className="nav-menu-button cancel-button"
                    onClick={() => setMenu(false)}
                >
                    <Cancel />
                </button>
                {navLinkList.map((link) => (
                    <Link key={link.path} to={link.path}>
                        {link.name}
                    </Link>
                ))}
            </div>
        </div>
    );
}
