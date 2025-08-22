<script setup lang="ts">
import {Button} from "@/shared/ui";
import {Language} from "@/shared/types";

interface Props {
  currentLanguage: Language
}

defineProps<Props>()
defineEmits<{ languageChanged: [language: Language] }>()

</script>
<template>
  <div :class="$style.languageSwitcher">
    <Button
      text="RU"
      :active="currentLanguage === Language.RU"
      @click="$emit('languageChanged', Language.RU)"
    />
    <Button
      text="EN"
      :active="currentLanguage === Language.EN"
      @click="$emit('languageChanged', Language.EN)"
    />
  </div>
</template>

<style module lang="scss">
.languageSwitcher {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 20px;
}
</style>
