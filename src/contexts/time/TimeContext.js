import React, { createContext, useContext, useState } from 'react'

export const TimeContext = createContext()

export function TimeProvider({ children }) {

    const [currentTime, setCurrentTime] = useState(false);
    const [loading, setLoading] = useState(false);
    const [logged, setLogged] = useState(false);

    const value = {
        logged
    }

    return (
        <TimeContext.Provider value={{ logged, setLogged }}>
            {children}
        </TimeContext.Provider>
    )
}


export function useTime() {
    const context = useContext(TimeContext);
    if (!context) throw new Error("useTheme must be used within a ThemeProvider");
    const { logged, setLogged } = context;
    return { logged, setLogged };
}