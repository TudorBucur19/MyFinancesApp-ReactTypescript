export interface IDayItem {
    value: number | string;
    isCurrentDay: boolean;
    date: string;
}

export interface ICalendarHeader {
    nav: number;
    displayMonth: string;
    setNav: (nav: number) => void;
}
