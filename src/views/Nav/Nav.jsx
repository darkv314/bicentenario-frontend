import GamsLogoH from "../../assets/logos/gamsH.png";
import BicentenarioLogoH from "../../assets/logos/bicH.png";
import GamsLogoV from "../../assets/logos/gamsV.png";
import BicentenarioLogoV from "../../assets/logos/bicV.png";
import GamsLogoHWhite from "../../assets/logos/gamsHB.png";
import BicentenarioLogoHWhite from "../../assets/logos/bicHB.png";
import NavLogosH from "../../assets/logos/navLogosH.png";

import "./Nav.css";
import { useWindowWidth } from "@react-hook/window-size";
import { Link, useLocation } from "react-router-dom";
import { navLinkList, navLinkListProvisional } from "../../Helpers/Helpers";
import { IconoirProvider, Menu } from "iconoir-react";
import useNav from "../../hooks/useNav";
import { useEffect, useState } from "react";

function Nav({ setMenu }) {
    const location = useLocation();
    const width = useWindowWidth();
    const navRef = useNav();
    const navIconsStyle = {
        gridTemplateColumns: "repeat(2, 1.75rem)",
        gap: "1rem",
    };
    const [navList, setNavList] = useState(navLinkList);

    useEffect(() => {
        location.pathname.includes("historia")
            ? setNavList(navLinkList)
            : setNavList(navLinkListProvisional);
    }, [location.pathname]);

    return (
        <nav className="bicentenario-nav" ref={navRef}>
            <div className="nav-icons">
                <NavImg
                    alt={"Logo Bicentenario"}
                    hsrc={NavLogosH}
                    vsrc={GamsLogoV}
                    imgClass={"nav-img-container"}
                    width={width}
                    to={"/"}
                />
            </div>

            <div className="nav-links">
                {width <= 700 ? (
                    <button
                        className="nav-menu-button"
                        onClick={(e) => {
                            setMenu((menu) => !menu);
                        }}
                    >
                        <IconoirProvider
                            iconProps={{
                                color: "#fff",
                            }}
                        >
                            <Menu />
                        </IconoirProvider>
                    </button>
                ) : (
                    navList.map((link) => (
                        <Link key={link.path} to={link.path}>
                            {link.name}
                        </Link>
                    ))
                )}
                {}
            </div>
        </nav>
    );
}

export default Nav;

function NavImg({ hsrc, vsrc, imgClass, alt, width, to }) {
    return (
        <div className={imgClass}>
            <Link to={to}>
                <img src={hsrc} />
            </Link>
        </div>
    );
}
