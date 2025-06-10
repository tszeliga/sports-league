<template>
  <div class="glass-card p-6 mb-10 flex flex-wrap gap-5 items-center animate-slide-in-up">
    <SearchBar @search="$emit('search', $event)" />
    <SportFilter
      :sports="sports"
      @filter="$emit('sport-filter', $event)"
    />
  </div>
</template>

<script setup lang="ts">
import type { FilterSectionProps, FilterSectionEmits } from '~/types';

defineProps<FilterSectionProps>();
defineEmits<FilterSectionEmits>();
</script>