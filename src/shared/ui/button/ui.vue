<script setup lang="ts">
import {PropsButton} from "@/shared/ui/button";

defineProps<PropsButton>()
defineEmits<{ click: [] }>()
</script>

<template>
  <button
      :class="[
      $style.button,
      $style[`button${variant}`],
      { [$style.buttonActive]: active }
    ]"
    @click="$emit('click')"
  >
    <slot>{{ text }}</slot>
  </button>
</template>


<style module lang="scss">
.button {
  padding: 8px 16px;
  border: 1px solid #ddd;
  background: white;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
  font-family: inherit;
}

.button:hover {
opacity: 0.6;
}

.buttonPrimary {
  background: #007bff;
  color: white;
  border-color: #007bff;
}

.buttonActive {
  background: #007bff;
  color: white;
  border-color: #007bff;
}
</style>
