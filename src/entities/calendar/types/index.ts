import type {CalendarDate, Language} from "@/shared/types";

export interface CalendarState {
    currentDate: CalendarDate
    selectedDate: CalendarDate | null
    currentLanguage: Language
}

export interface PropsCalendarGrid {
    currentDate: CalendarDate
    selectedDate: CalendarDate | null
    firstDayWeekday: number
    daysInMonth: number
    currentLanguage: 'ru' | 'en'
}