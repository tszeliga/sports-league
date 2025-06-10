<template>
  <div class="relative flex-1 min-w-[200px]">
    <div
      class="absolute left-4 top-1/2 transform -translate-y-1/2 text-lg pointer-events-none z-10 text-primary-600/60"
    >
      🏃
    </div>
    <select
      v-model="selectedSport"
      class="glass-input w-full pl-12 pr-11 appearance-none cursor-pointer"
      @change="handleFilter"
    >
      <option value="">All Sports</option>
      <option v-for="sport in uniqueSports" :key="sport" :value="sport">
        {{ sport }}
      </option>
    </select>
    <div
      class="absolute right-4 top-1/2 transform -translate-y-1/2 text-xs text-primary-600/60 pointer-events-none transition-transform duration-300"
    >
      ▼
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SportFilterProps, SportFilterEmits } from '../types/components';

const props = defineProps<SportFilterProps>();
const selectedSport = ref('');
const emit = defineEmits<SportFilterEmits>();

const uniqueSports = computed((): string[] => {
  return [...new Set(props.sports)].sort();
});

const handleFilter = (): void => {
  emit('filter', selectedSport.value);
};
</script>
