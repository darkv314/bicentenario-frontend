import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";

function InfoTuristica() {
    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, []);
    return (
        <div>
            <Outlet />
        </div>
    );
}

export default InfoTuristica;
