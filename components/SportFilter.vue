<template>
  <select
    v-model="selectedSport"
    class="filter-select"
    @change="handleFilter"
  >
    <option value="">All Sports</option>
    <option
      v-for="sport in uniqueSports"
      :key="sport"
      :value="sport"
    >
      {{ sport }}
    </option>
  </select>
</template>

<script setup lang="ts">
interface Props {
  sports: string[];
}

const props = defineProps<Props>();
const selectedSport = ref('');
const emit = defineEmits<{
  filter: [sport: string]
}>();

const uniqueSports = computed(() => {
  return [...new Set(props.sports)].sort();
});

const handleFilter = () => {
  emit('filter', selectedSport.value);
};
</script>