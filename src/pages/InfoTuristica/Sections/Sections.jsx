import { Link } from "react-router-dom";
import Sucre from "../../../assets/timelineImages/sucre1.jpg";
import Sucre2 from "../../../assets/timelineImages/sucre2.jpg";
import "./Sections.css";
import { motion } from "framer-motion";
import { sections } from "./Data/Data";

export const Sections = () => {
    return (
        <div className="infoTuristica">
            {sections.map((section) => (
                <SectionBanner {...section} key={section.id} />
            ))}
        </div>
    );
};

function SectionBanner({ title, description, image, to, place }) {
    return (
        <div className="sectionBanner">
            <div className={`sectionBanner-content`}>
                <h2>{title}</h2>
                {description.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
                <Link to={to}>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{
                            scale: 0.9,
                        }}
                    >
                        Ver más
                    </motion.button>
                </Link>
            </div>
            <div className={`sectionBanner-img ${place}`}>
                <img src={image} alt="" />
            </div>
        </div>
    );
}
