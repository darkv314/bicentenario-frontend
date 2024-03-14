import { Outlet } from "react-router-dom";
import "./Home.css";
import useInfoCard from "../../hooks/useInfoCard";
import { useEffect } from "react";

function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const { infoCard } = useInfoCard();
    return <Outlet />;
}

export default Home;
