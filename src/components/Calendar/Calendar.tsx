import React from 'react';
import { useDispatch } from 'react-redux';

import CalendarHeader from 'components/Calendar/CalendarHeader';
import Day from 'components/Calendar/Day';
import useCalendar from 'hooks/useCalendar';

import { weekdays } from 'constants/calendar';
import { setClickedDay } from 'store/actions/generalActions';
import { IDayItem } from 'interfaces/ICalendar';
import { usePageData } from 'hooks/usePageData';

import style from 'components/Calendar/Calendar.module.scss';


const Calendar = () => {    
    const { nav, setNav, days, displayMonth } = useCalendar();
    const selectedMonth = displayMonth.split(' ')[0];
    console.log(selectedMonth);
    const { data: operationsList } = usePageData(selectedMonth);        
    console.log(operationsList);

    const dispatch = useDispatch();
    
    const dayClickHandler = (day: IDayItem) => {
        if (day.value !== 'padding') {
            dispatch(setClickedDay(day.date))            
        }
    }

    const { container, dayNames, dayNames_day, calendar } = style;    

    return ( 
        <div className={container}>
            <CalendarHeader {...{nav, setNav, displayMonth}}/>            
            <div className={dayNames}>                           
                {weekdays.map(day => (
                    <div className={dayNames_day} key={day}>{day}</div>
                ))}
            </div>            
            <div className={calendar}>                
                {days.map((day, index) => (
                    <Day
                    key={index}
                    day={day}
                    dayData={operationsList || []}
                    onClick={() => dayClickHandler(day)}
                    />
                ))}
            </div>
        </div> 
    );
}
 
export default Calendar;