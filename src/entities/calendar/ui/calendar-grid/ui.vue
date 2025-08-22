<script setup lang="ts">
import { computed } from 'vue'
import {PropsCalendarGrid} from "@/entities/calendar";
import {Language} from "@/shared/types";

const props = defineProps<PropsCalendarGrid>()
const emit = defineEmits<{ dateSelected: [day: number] }>()

const emptyDays = computed(() => {
  if (!props.firstDayWeekday && props.firstDayWeekday !== 0) return []

  let adjustedWeekday = props.firstDayWeekday

  if (props.currentLanguage === Language.RU) {
    adjustedWeekday = props.firstDayWeekday === 0 ? 6 : props.firstDayWeekday - 1
  }

  return adjustedWeekday > 0 ? Array.from({ length: adjustedWeekday }, (_, i) => i) : []
})

const isSelected = (day: number) => {
  if (!props.selectedDate) return false
  return props.selectedDate.year === props.currentDate.year &&
      props.selectedDate.month === props.currentDate.month &&
      props.selectedDate.day === day
}

const isToday = (day: number) => {
  const today = new Date()
  return today.getFullYear() === props.currentDate.year &&
      today.getMonth() + 1 === props.currentDate.month &&
      today.getDate() === day
}
</script>

<template>
  <div :class="$style.calendarGrid">
    <div
        v-for="i in emptyDays"
        :key="`empty-${i}`"
        :class="[$style.day, $style.empty]"
    ></div>

    <div
        v-for="day in daysInMonth"
        :key="day"
        @click="$emit('dateSelected', day)"
        :class="[
        $style.day,
         isSelected(day) ? $style.selected: '',
         isToday(day) ? $style.today: '',
      ]"
    >
      {{ day }}
    </div>
  </div>
</template>

<style module lang="scss">
.calendarGrid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1px;
  background: #e9ecef;
}

.day {
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.2s;
  position: relative;
}

.day:hover {
  background: #f8f9fa;
}

.day.selected {
  background: #007bff;
  color: white;
  font-weight: 600;
}

.day.today:not(.selected) {
  background: #e3f2fd;
  color: #1976d2;
  font-weight: 600;
}

.day.empty {
  background: white;
  cursor: default;
}
</style>