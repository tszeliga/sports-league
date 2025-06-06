<template>
  <div class="filters">
    <SearchBar @search="$emit('search', $event)" />
    <SportFilter
      :sports="sports"
      @filter="$emit('sport-filter', $event)"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  sports: string[];
}

defineProps<Props>();
defineEmits<{
  search: [query: string];
  'sport-filter': [sport: string];
}>();
</script>