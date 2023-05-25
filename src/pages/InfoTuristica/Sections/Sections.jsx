import { Link } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
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

function SectionBanner({ title, description, video, to, place }) {
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
                <ReactPlayer url={video} height={"100%"} width={"100%"} />
                {/* <video src="https://youtu.be/jBK_XcoYdz0"></video> */}
                {/* <img src={image} alt="" /> */}
            </div>
        </div>
    );
}
