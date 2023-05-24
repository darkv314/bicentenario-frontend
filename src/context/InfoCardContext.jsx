import { createContext, useRef } from "react";
import { useState } from "react";

const InfoCardContext = createContext({});

export const InfoCardProvider = ({ children }) => {
    const [infoCard, setInfoCard] = useState({ clicked: false });

    return (
        <InfoCardContext.Provider value={{ infoCard, setInfoCard }}>
            {children}
        </InfoCardContext.Provider>
    );
};

export default InfoCardContext;
