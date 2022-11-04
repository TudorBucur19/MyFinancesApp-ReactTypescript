import { useState, useEffect } from "react";

import { monthNames, weekdays } from 'constants/calendar';
import { IDayItem } from "interfaces/ICalendar";

const useCalendar = () => {
    const initialMonth = new Date().getMonth();
    const [ nav, setNav ] = useState(0);
    const [ days, setDays ] = useState<IDayItem[]>([]);
    const [ displayMonth, setDisplayMonth ] = useState(monthNames[initialMonth]);
    const [ clicked, setClicked] = useState(null);

    // const [events, setEvents] = useState(
    //     localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : []
    // );

    // const eventForDate = date => events.find(e => e.date === date);

    // useEffect(() => {
    //     localStorage.setItem('events', JSON.stringify(events));
    // }, [events]);
   
    useEffect(() => {
        const dt = new Date();

        if (nav !== 0) {
            dt.setMonth(new Date().getMonth() + nav)
        }

        const day = dt.getDate();
        const month = dt.getMonth();                
        const year = dt.getFullYear();

        const firstDayOfMonth = new Date(year, month, 1);
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        
        const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
            weekday: 'long',
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
        });

        const selectedMonth = dt.toLocaleDateString('en-us', {month: 'long'});      
        setDisplayMonth(`${selectedMonth} ${year}`);
        const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);
        const daysArray: IDayItem[] = [];

        for (let i = 1; i <= paddingDays + daysInMonth; i++) {
            const dayString = `${month + 1}/${i - paddingDays}/${year}`;

            if (i > paddingDays) {
                daysArray.push({
                    value: i - paddingDays,
                    //event: eventForDate(dayString),
                    isCurrentDay: i - paddingDays === day && nav === 0,
                    date: dayString,
                });
            }
            
            if(i <= paddingDays) {
                daysArray.push({
                    value: 'padding',
                    //event: null,
                    isCurrentDay: false,
                    date: '',
                }) 
            }
        }

        setDays(daysArray);
    }, [nav]);

    return { nav, setNav, days, setDays, displayMonth, clicked, setClicked };
}
 
export default useCalendar;