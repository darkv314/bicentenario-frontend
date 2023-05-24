import "./InfoCard.css";
import useNav from "../../hooks/useNav";
import useInfoCard from "../../hooks/useInfoCard";
import { IconoirProvider, Cancel } from "iconoir-react";
import { Link } from "react-router-dom";

export function InfoCard() {
    const { infoCard, setInfoCard } = useInfoCard();
    const { title, content, image } = infoCard;
    return (
        <div className="infoCard">
            <div className="infoContent">
                <Link to="/..">
                    <button
                        className="infoCard-close"
                        onClick={() => {
                            setInfoCard({ clicked: false });
                        }}
                    >
                        <IconoirProvider>
                            <Cancel />
                        </IconoirProvider>
                    </button>
                </Link>
                <div className="infoCard-img">
                    <img src={image} alt="" />
                    <div className="infoCard-title">
                        <h2>{title}</h2>
                    </div>
                </div>
                <div className="infoCard-content">
                    <p>{content}</p>
                </div>
            </div>
        </div>
    );
}
