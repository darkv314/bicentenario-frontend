import { Link, Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";
import "./Layout.css";
import { useState } from "react";
import { navLinkList } from "../../Helpers/Helpers";
import { IconoirProvider, Cancel } from "iconoir-react";
import { motion, AnimatePresence } from "framer-motion";

function Layout() {
    const [menu, setMenu] = useState(false);
    return (
        <main className="App">
            <div
                className="layout"
                onClick={() => {
                    if (menu) setMenu(false);
                }}
            >
                <Nav setMenu={setMenu} />
                <div className="content">
                    <AnimatePresence>
                        {menu && <Menu setMenu={setMenu} />}
                    </AnimatePresence>
                    <Outlet />
                </div>
            </div>
        </main>
    );
}

export default Layout;

function Menu({ setMenu }) {
    const animation = {
        hidden: { x: 125, opacity: 0 },
        visible: { x: 0, opacity: 1 },
        exit: { x: 125, opacity: 0 },
    };
    return (
        <div className="background-menu">
            <motion.div
                variants={animation}
                initial="hidden"
                animate="visible"
                transition={"0.45"}
                exit="exit"
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
                        <IconoirProvider
                            iconProps={{
                                color: "#fff",
                            }}
                        >
                            <Cancel />
                        </IconoirProvider>
                    </button>
                    {navLinkList.map((link) => (
                        <Link
                            onClick={() => setMenu(false)}
                            key={link.path}
                            to={link.path}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
