import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { AnimatePresence, motion } from "framer-motion";
import "./TimeLine.css";
import { IconoirProvider, Book } from "iconoir-react";
import { useState } from "react";
import Sucre1 from "../../assets/timelineImages/sucre1.jpg";

function TimeLine() {
    return (
        <div className="timeline">
            <AnimatePresence>
                <Timeline position="alternate">
                    <TimeLineItem
                        icon={<Book />}
                        content={"Hola"}
                        title={"Titulo"}
                        image={Sucre1}
                    />
                    <TimeLineItem
                        icon={<Book />}
                        content={"Hola"}
                        title={"Titulo"}
                    />
                    <TimeLineItem
                        icon={<Book />}
                        content={"Hola"}
                        title={"Titulo"}
                    />
                    <TimeLineItem
                        icon={<Book />}
                        content={"Hola"}
                        title={"Titulo"}
                    />
                </Timeline>
            </AnimatePresence>
        </div>
    );
}

export default TimeLine;

function TimeLineItem({ icon, image, content, title }) {
    const [isClicked, setIsClicked] = useState(false);

    const animation = {
        hidden: { x: 15, opacity: 0 },
        visible: { x: 0, opacity: 1 },
        exit: { x: 15, opacity: 0 },
    };

    function handleClick() {
        console.log("click");
        setIsClicked(!isClicked);
    }

    return (
        <TimelineItem>
            <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                align="right"
                variant="body2"
            >
                <AnimatePresence>
                    {isClicked && image && (
                        <motion.div
                            variants={animation}
                            initial="hidden"
                            animate="visible"
                            transition={"1"}
                            exit="exit"
                            className="timeline-image"
                        >
                            <img src={image} alt="" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </TimelineOppositeContent>

            <TimelineSeparator>
                <TimelineConnector />
                <motion.button
                    onClick={handleClick}
                    type="button"
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                    style={{
                        display: "grid",
                        placeItems: "center",
                        border: "none",
                        backgroundColor: "transparent",
                    }}
                >
                    <TimelineDot>
                        <IconoirProvider
                            iconProps={{
                                width: "1.5rem",
                                height: "1.5rem",
                            }}
                        >
                            {icon}
                        </IconoirProvider>
                    </TimelineDot>
                </motion.button>

                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "2rem", px: 2 }}>
                <h3
                    style={{
                        fontFamily: `"Poppins", sans-serif`,
                    }}
                >
                    {title}
                </h3>
                <p
                    style={{
                        fontFamily: `"Poppins", sans-serif`,
                        fontSize: "0.75rem",
                    }}
                >
                    {content}
                </p>
            </TimelineContent>
        </TimelineItem>
    );
}
