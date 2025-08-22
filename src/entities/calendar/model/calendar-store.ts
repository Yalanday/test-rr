import { defineStore } from 'pinia'
import type { CalendarDate, Language} from "@/shared/types";
import {
  getCurrentDate,
  getFirstDayOfMonth,
  getLastDayOfMonth,
  getDaysInMonth,
  getFirstDayWeekday
} from "@/shared/utils";
import {CalendarState} from "@/entities/calendar";

export const useCalendarStore = defineStore('calendar', {
  state: (): CalendarState => ({
    currentDate: getCurrentDate(),
    selectedDate: null,
    currentLanguage: 'ru'
  }),

  getters: {
    firstDayOfMonth: (state) => {
      return getFirstDayOfMonth(state.currentDate.year, state.currentDate.month)
    },

    lastDayOfMonth: (state) => {
      return getLastDayOfMonth(state.currentDate.year, state.currentDate.month)
    },

    daysInMonth: (state) => {
      return getDaysInMonth(state.currentDate.year, state.currentDate.month)
    },

    firstDayWeekday: (state) => {
      return getFirstDayWeekday(state.currentDate.year, state.currentDate.month)
    }
  },

  actions: {
    previousMonth() {
      if (this.currentDate.month === 1) {
        this.currentDate.year--
        this.currentDate.month = 12
      } else {
        this.currentDate.month--
      }
    },

    nextMonth() {
      if (this.currentDate.month === 12) {
        this.currentDate.year++
        this.currentDate.month = 1
      } else {
        this.currentDate.month++
      }
    },

    selectDate(day: number) {
      this.selectedDate = {
        year: this.currentDate.year,
        month: this.currentDate.month,
        day
      }
    },

    initializeWithDate(dateString: string) {
      const [year, month, day] = dateString.split('-').map(Number)
      if (year && month && day) {
        this.currentDate = { year, month, day }
        this.selectedDate = { year, month, day }
      }
    },

    changeLanguage(language: Language) {
      console.log('Смена языка на:', language)
      this.currentLanguage = language
    }
  }
})