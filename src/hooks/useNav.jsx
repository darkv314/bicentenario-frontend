import { useContext } from "react";
import NavRefContext from "../context/NavRefProvider";

const useNav = () => {
    return useContext(NavRefContext);
};

export default useNav;
