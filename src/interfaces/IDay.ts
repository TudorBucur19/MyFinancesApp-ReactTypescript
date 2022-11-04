import { IDayItem } from "interfaces/ICalendar";
import { IOperation, IOperationData } from "interfaces/IOperation";

export interface IDay {
    day: IDayItem;
    dayData: IOperation[];
    onClick: () => void;
}

export interface IDayOperationDisplay {
    displayData: IOperationData;
}