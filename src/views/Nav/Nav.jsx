import GamsLogoH from "../../assets/logos/gamsH.png";
import BicentenarioLogoH from "../../assets/logos/bicH.png";
import GamsLogoV from "../../assets/logos/gamsV.png";
import BicentenarioLogoV from "../../assets/logos/bicV.png";
import "./Nav.css";
import { useWindowWidth } from "@react-hook/window-size";
import { Link } from "react-router-dom";
import { navLinkList } from "../../Helpers/Helpers";
import { IconoirProvider, Menu } from "iconoir-react";
import useNav from "../../hooks/useNav";

function Nav({ setMenu }) {
    const width = useWindowWidth();
    const navRef = useNav();
    const navIconsStyle = {
        gridTemplateColumns: "repeat(2, 1.75rem)",
        gap: "1rem",
    };
    return (
        <nav className="bicentenario-nav" ref={navRef}>
            <div
                className="nav-icons"
                style={width <= 520 ? navIconsStyle : null}
            >
                <NavImg
                    alt={"Logo GAMS"}
                    hsrc={GamsLogoH}
                    vsrc={GamsLogoV}
                    imgClass={"nav-img-container"}
                    width={width}
                    to={"/"}
                />
                <NavImg
                    alt={"Logo Bicentenario"}
                    hsrc={BicentenarioLogoH}
                    vsrc={BicentenarioLogoV}
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
                        <IconoirProvider>
                            <Menu />
                        </IconoirProvider>
                    </button>
                ) : (
                    navLinkList.map((link) => (
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
                <img src={width <= 520 ? vsrc : hsrc} alt={alt} />
            </Link>
        </div>
    );
}
