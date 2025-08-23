<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useCalendarStore} from "@/entities/calendar";
import { DateSelection, LanguageSwitcher } from '@/features';
import { CalendarGrid} from "@/entities/calendar";
import {formatDate, getCurrentDate} from "@/shared/utils";
import type {CalendarProps, CalendarDate, Language} from "@/shared/types";
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = withDefaults(defineProps<CalendarProps>(), {
  initialDate: undefined
})

const emit = defineEmits<{
  dateSelected: [date: CalendarDate]
}>()

const calendarStore = useCalendarStore()

// computed
const currentDate = computed(() => calendarStore.currentDate)
const selectedDate = computed(() => calendarStore.selectedDate)
const currentLanguage = computed(() => calendarStore.currentLanguage)
const firstDayWeekday = computed(() => calendarStore.firstDayWeekday)
const daysInMonth = computed(() => calendarStore.daysInMonth)

// methods
const previousMonth = () => {
  calendarStore.previousMonth()
}

const nextMonth = () => {
  calendarStore.nextMonth()
}

const handleDateSelected = (day: number) => {
  calendarStore.selectDate(day)
  emit('dateSelected', {
    year: currentDate.value.year,
    month: currentDate.value.month,
    day
  })
}

const handleLanguageChange = (language: Language) => {
  calendarStore.changeLanguage(language)
}

const formatSelectedDate = () => {
  if (!selectedDate.value) return ''
  return formatDate(selectedDate.value)
}

// hooks
onMounted(() => {
  if (props.initialDate) {
    calendarStore.initializeWithDate(props.initialDate)
  } else {
    const currentDate = getCurrentDate()
    calendarStore.currentDate = currentDate
    calendarStore.selectedDate = currentDate
  }
})
</script>

<template>
  <div :class="$style.calendarWidget">
    <LanguageSwitcher
        :current-language="currentLanguage"
        @language-changed="handleLanguageChange"
    />

    <div :class="$style.calendar">
      <DateSelection
          :current-date="currentDate"
          :current-language="currentLanguage"
          @previous-month="previousMonth"
          @next-month="nextMonth"
      />

      <CalendarGrid
          :current-date="currentDate"
          :selected-date="selectedDate"
          :first-day-weekday="firstDayWeekday"
          :days-in-month="daysInMonth"
          :current-language="currentLanguage"
          @date-selected="handleDateSelected"
      />
    </div>

    <div  :class="$style.selectedInfo">
      {{ t('calendar.selectedDate') }}
      <span v-if="selectedDate">{{ formatSelectedDate() }}</span>
    </div>
  </div>
</template>

<style module lang="scss">
.calendarWidget {
  max-width: 400px;
  margin: 0 auto;

}

.calendar {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.selectedInfo {
  margin-top: 20px;
  padding: 16px;
  background: #e3f2fd;
  border-radius: 8px;
  text-align: center;
  color: #1976d2;
  font-weight: 500;
}
</style>
