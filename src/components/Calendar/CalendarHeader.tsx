import React, { FC } from 'react';

import Button from 'components/common/Button/Button';
import { ICalendarHeader } from 'interfaces/ICalendar';

import styles from 'components/Calendar/Calendar.module.scss';

const CalendarHeader: FC<ICalendarHeader> = ({ nav, setNav, displayMonth }) => {
    const { header, header_changeMonth, header_changeMonth_monthDisplay } = styles; 

    return ( 
        <div className={header}>
           
            <div className={header_changeMonth}>
                <Button children="<" colorScheme="success" onClick={() => setNav(nav -= 1)}/>
                <div className={header_changeMonth_monthDisplay}>{displayMonth}</div>
                <Button children=">" colorScheme="success" onClick={() => setNav(nav += 1)}/>
            </div>
        </div>
     );
}
 
export default CalendarHeader;