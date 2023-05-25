import { Link, Outlet } from "react-router-dom";
import { Banner } from "../../views/VideoBanner/VideoBanner";
import TimeLine from "../../views/TimeLine/TimeLine";
import "./Home.css";
import About from "../../assets/homeImages/about.jpg";
import useInfoCard from "../../hooks/useInfoCard";
import { InfoCard } from "../../views/InfoCard/InfoCard";
import { useEffect } from "react";

function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const { infoCard } = useInfoCard();
    return <Outlet />;
}

export default Home;
