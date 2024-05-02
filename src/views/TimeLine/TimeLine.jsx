import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { AnimatePresence, motion } from "framer-motion";
import "./TimeLine.css";
import { timelineItems } from "./Data/Data";
import { ThemeProvider, createTheme } from "@mui/material";
import { useWindowWidth } from "@react-hook/window-size";
import useInfoCard from "../../hooks/useInfoCard";
import { useNavigate } from "react-router-dom";

const theme = createTheme({
    palette: {
        primary: {
            main: "#008ED5",
        },
        secondary: {
            main: "#f50057",
        },
    },
});

function TimeLine() {
    return (
        <div className="timeline">
            <AnimatePresence>
                <ThemeProvider theme={theme}>
                    <Timeline position="alternate">
                        {timelineItems.map((item) => (
                            <TimeLineItem key={item.id} {...item} />
                        ))}
                    </Timeline>
                </ThemeProvider>
            </AnimatePresence>
        </div>
    );
}

export default TimeLine;

function TimeLineItem({ icon, image, content, title, bgcolor, doc }) {
    const navigate = useNavigate();
    const windowWidth = useWindowWidth();
    const animation = {
        hidden: { x: 15, opacity: 0 },
        visible: { x: 0, opacity: 1 },
        exit: { x: 15, opacity: 0 },
    };
    const { setInfoCard } = useInfoCard();
    function handleClick() {
        if (windowWidth <= 500) {
            setInfoCard({ title, content, image, clicked: true });
            navigate(`${title.replace(/\s/g, "").toLowerCase()}`);
        }
    }

    function handleImgClick() {
        window.open(doc);
    }

    return (
        <TimelineItem>
            <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                align="right"
                variant="body2"
            >
                <AnimatePresence>
                    <motion.button
                        type="button"
                        onClick={handleImgClick}
                        variants={animation}
                        initial="hidden"
                        animate="visible"
                        transition={"1"}
                        exit="exit"
                        className="timeline-image"
                        tabIndex={0}
                    >
                        <img src={image} alt="" />
                    </motion.button>
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
                    <TimelineDot
                        sx={{
                            display: "grid",
                            placeItems: "center",
                            pt: "0.5rem",
                            bgcolor: bgcolor,
                        }}
                    >
                        {icon}
                        {/* <IconoirProvider
                            iconProps={{
                                width: "1.5rem",
                                height: "1.5rem",
                            }}
                        >
                            {icon}
                        </IconoirProvider> */}
                    </TimelineDot>
                </motion.button>

                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent
                sx={{
                    py: "2rem",
                    px: 2,
                    display: "grid",
                    alignItems: "center",
                }}
            >
                <span className="timeline-content">
                    <h3>{title}</h3>
                    {windowWidth > 500 &&
                        content.map((item, index) => (
                            <p
                                key={index}
                                style={{
                                    alignSelf: "center",
                                    fontFamily: `"Poppins", sans-serif`,
                                }}
                            >
                                {item}
                            </p>
                        ))}
                </span>
                {/* {isClicked && (
                    <InfoCard content={content} image={image} title={title} />
                )} */}
            </TimelineContent>
        </TimelineItem>
    );
}
