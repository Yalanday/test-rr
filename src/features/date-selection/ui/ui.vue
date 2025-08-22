<script setup lang="ts">
import {computed, watch} from 'vue'
import {useI18n} from 'vue-i18n'
import {Button} from "@/shared/ui";
import { Language} from "@/shared/types";
import {dayNamesEn, dayNamesRu, monthNames} from "@/shared/utils";
import {PropsCalendar} from "@/features/date-selection";

const props = defineProps<PropsCalendar>()
const emit = defineEmits<{ previousMonth: [], nextMonth: [] }>()
const { t, locale } = useI18n()

// computed
const currentMonthName = computed(() => {
  return t(`months.${monthNames[props.currentDate.month - 1]}`)
})

const weekDays = computed(() => {
  const dayNames = props.currentLanguage === Language.RU ? dayNamesRu : dayNamesEn
  return dayNames.map(day => t(`days.${day}`))
})

// hooks
watch(() => props.currentLanguage, (newLanguage) => {
  locale.value = newLanguage
}, { immediate: true })
</script>

<template>
  <div :class="$style.dateSelector">
    <div :class="$style.monthNavigation">
      <Button @click="$emit('previousMonth')" :class="$style.navBtn">
        <div :class="[$style.arrow, $style.left]"></div>
      </Button>
      
      <div :class="$style.monthYear">
        {{ currentMonthName }} {{ currentDate.year }}
      </div>
      
      <Button @click="$emit('nextMonth')" :class="$style.navBtn">
        <div :class="[$style.arrow, $style.right]"></div>
      </Button>
    </div>

    <div :class="$style.weekdays">
      <div 
        v-for="day in weekDays" 
        :key="day" 
        :class="$style.weekday"
      >
        {{ day }}
      </div>
    </div>
  </div>
</template>

<style module lang="scss">
.dateSelector {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.monthNavigation {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
}

.navBtn {
  width: 40px;
  height: 40px;
  border: none;
  background: white;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  color: #6c757d;
}

.navBtn:hover {
  background: #e9ecef;
  color: #495057;
}

.monthYear {
  font-size: 18px;
  font-weight: 600;
  color: #212529;
}

.weekdays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  background: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
}

.weekday {
  padding: 12px 8px;
  text-align: center;
  font-weight: 500;
  color: #6c757d;
  font-size: 14px;
}

.arrow {
  width: 0;
  height: 0;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
}

.arrow {
  width: 0;
  height: 0;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;

  &.left {
    border-right: 8px solid currentColor;
  }

  &.right {
    border-left: 8px solid currentColor;
  }
}
</style>
