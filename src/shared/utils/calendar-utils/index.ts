import { CalendarDate} from "@/shared/types";

export const formatDate = (date: CalendarDate): string => {
    return `${date.year}-${String(date.month).padStart(2, '0')}-${String(date.day).padStart(2, '0')}`
}

export const getCurrentDate = (): CalendarDate => {
    const now = new Date()
    return {
        year: now.getFullYear(),
        month: now.getMonth() + 1,
        day: now.getDate()
    }
}

export const getFirstDayOfMonth = (year: number, month: number): Date => {
    return new Date(year, month - 1, 1)
}

export const getLastDayOfMonth = (year: number, month: number): Date => {
    return new Date(year, month, 0)
}

export const getDaysInMonth = (year: number, month: number): number => {
    return getLastDayOfMonth(year, month).getDate()
}

export const getFirstDayWeekday = (year: number, month: number): number => {
    return getFirstDayOfMonth(year, month).getDay()
}

export const monthNames = [
    'january', 'february', 'march', 'april', 'may', 'june',
    'july', 'august', 'september', 'october', 'november', 'december'
]

export const dayNamesRu = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
export const dayNamesEn = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']