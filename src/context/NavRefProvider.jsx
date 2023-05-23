import { createContext, useRef } from "react";

const NavRefContext = createContext({});

export const NavRefProvider = ({ children }) => {
    const navRef = useRef(null);

    return (
        <NavRefContext.Provider value={navRef}>
            {children}
        </NavRefContext.Provider>
    );
};

export default NavRefContext;
