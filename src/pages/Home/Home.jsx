import { Link, Outlet } from "react-router-dom";
import { Banner } from "../../views/VideoBanner/VideoBanner";
import TimeLine from "../../views/TimeLine/TimeLine";
import "./Home.css";
import About from "../../assets/homeImages/about.jpg";
import useInfoCard from "../../hooks/useInfoCard";
import { InfoCard } from "../../views/InfoCard/InfoCard";

function Home() {
    const { infoCard } = useInfoCard();
    return <Outlet />;
}

export default Home;
