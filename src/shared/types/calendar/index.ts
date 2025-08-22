export interface CalendarDate {
    year: number
    month: number
    day: number
}

export enum Language {
    RU = 'ru',
    EN = 'en',
}

export interface CalendarProps {
    initialDate?: string
}

export interface DateSelectedEvent {
    date: CalendarDate
}