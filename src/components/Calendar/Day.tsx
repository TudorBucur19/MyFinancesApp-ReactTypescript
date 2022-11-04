import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';

import Button from 'components/common/Button/Button';
import DayOperationDisplay from 'components/Calendar/DayOperationDisplay';
import { IDay } from 'interfaces/IDay';
import { IOperation } from 'interfaces/IOperation';
import { setModalStatus } from 'store/actions/generalActions';

import styles from 'components/Calendar/Calendar.module.scss';

const Day: FC<IDay> = ({ day, dayData, onClick }) => {
    const [ isVisible, setIsVisible ] = useState<boolean>(false);
    const isPaddingDay = day.value === 'padding';    
    const dispatch = useDispatch();
    const dayOperations = dayData?.filter((operation: IOperation) => operation.data.date === day.date); 
        
    const { 
        daySquare, 
        daySquare_header, 
        daySquare_header_dayNo, 
        daySquare_header_action, 
        paddingDay, 
        hidden, 
        visible,
    } = styles;

    return ( 
        <div 
        className={`${isPaddingDay ? paddingDay : ""} ${daySquare}`}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onClick={onClick}
        >
            {!isPaddingDay && 
            <>
            <div className={daySquare_header}>
                <span className={daySquare_header_dayNo}>
                    {day.value}                
                </span>
                <div className={daySquare_header_action}>                    
                    <span className={`${isVisible ? hidden : ""}`}>
                        9800
                    </span>                        
                </div>
                <span className={`${isVisible ? visible : ""} ${hidden}`}>
                    <Button
                    children="+"
                    // eslint-disable-next-line react/style-prop-object
                    style='round'
                    onClick={() => dispatch(setModalStatus(true))}
                    />
                </span>                
            </div>            
            </>
            }
            {dayOperations?.map((operation: IOperation) => (
                <DayOperationDisplay
                key={operation.id}
                displayData={operation.data}
                />
            ))}

        </div> 
    );
}
 
export default Day;