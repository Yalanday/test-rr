<script setup lang="ts">
import { ref } from 'vue'
import {CalendarWidget} from "@/widgets/ui";
import type { CalendarDate} from "@/shared/types";
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const lastSelectedDate = ref<CalendarDate | null>(null)

const handleDateSelected = (date: CalendarDate) => {
  lastSelectedDate.value = date
  console.log('Выбрана дата:', date)
}
</script>

<template>
  <div :class="$style.calendarPage">
    <div :class="$style.pageContainer">
      <header>
        <h1 :class="$style.headerTitle">{{t('calendar.title')}}</h1>
      </header>
      <main>
        <section :class="$style.exampleSection">
          <CalendarWidget @dateSelected="handleDateSelected" />
        </section>
      </main>
    </div>
  </div>
</template>


<style module lang="scss">
.calendarPage {
  min-height: 100vh;
  background: #283466;
  padding: 20px;
  font-family: 'Roboto', sans-serif;
}

.pageContainer {
  max-width: 1200px;
  margin: 0 auto;
}

.headerTitle {
  text-align: center;
  color: white;
  font-size: 48px;
  margin-bottom: 40px;
  font-weight: 400;
}

.exampleSection {
  background: white;
  border-radius: 16px;
  padding: 30px;
  margin-bottom: 30px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}
</style>
