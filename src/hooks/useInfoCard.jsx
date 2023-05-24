import { useContext } from "react";
import InfoCardContext from "../context/InfoCardContext";

const useInfoCard = () => {
    return useContext(InfoCardContext);
};

export default useInfoCard;
