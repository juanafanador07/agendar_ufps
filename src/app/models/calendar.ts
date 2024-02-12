export interface CreatedBy {
    id_user: number;
    email: string;
}

export interface Interval {
    date_start: string;
    date_end: string;
}

export interface WeekDay {
    nombre: string;
    state: Boolean;
    intervals: Interval[];
}

export interface Calendar {
    nombre: string;
    createdBy?: CreatedBy;
    weekDays?: WeekDay[];
}
