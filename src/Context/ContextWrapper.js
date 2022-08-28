import GlobalContext from "./GlobalContext";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

export default function ContextWrapper(props) {
    const [monthIndex, setMonthIndex] = useState(dayjs().month())
    const [smallCalendarMonthIndex, setSmallCalendarMonthIndex] = useState(null)
    const [daySelected, setDaySelected] = useState(dayjs())


    useEffect(() => {
        if (smallCalendarMonthIndex) {
            setMonthIndex(smallCalendarMonthIndex)
        }
    }, [smallCalendarMonthIndex])
    

    return (
        <GlobalContext.Provider
            value={{
                monthIndex,
                setMonthIndex,
                smallCalendarMonthIndex,
                setSmallCalendarMonthIndex
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    )
}
