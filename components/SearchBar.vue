<template>
  <input
    v-model="searchValue"
    type="text"
    placeholder="Search leagues by name..."
    class="search-input"
    @input="handleSearch"
  />
</template>

<script setup lang="ts">
const searchValue = ref('');
const emit = defineEmits<{
  search: [value: string]
}>();

const handleSearch = () => {
  emit('search', searchValue.value);
};
</script>