import React, { FC } from 'react';

import styles from 'components/Calendar/Calendar.module.scss';
import { IDayOperationDisplay } from 'interfaces/IDay';

const DayOperationDisplay: FC<IDayOperationDisplay> = ({ displayData }) => {
    const { description, type, amount } = displayData;
    const { operationContainer } = styles;

    return ( 
        <div className={operationContainer}>
            <p>{description}</p>
            <div>
                <span>{type === "expense" ? "-" : "+"}</span>
                <span>{amount}</span>
            </div>
        </div>
     );
}
 
export default DayOperationDisplay;