import { IButton } from 'interfaces/IButton';
import { IKeyStringValueString } from 'interfaces/IGeneral';
import React, { FC } from 'react';
import styles from './Button.module.scss';

const Button: FC<IButton> = ({ children, onClick, colorScheme = "", type, style = 'outlined' }) => {
    const { basicBtn, success, danger, round } = styles;

    const btnColor: IKeyStringValueString = {
        success: success,
        danger: danger
    }

    const btnStyle: IKeyStringValueString = {
        round: round,
        outlined: 'outlined'
    }
    
    return ( 
        <button 
        className={`${basicBtn} ${btnColor[colorScheme]} ${btnStyle[style]}`} 
        onClick={onClick}  
        type={type}
        >
            {children}
        </button>
     );
}
 
export default Button;