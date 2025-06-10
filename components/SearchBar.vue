<template>
  <div class="relative flex-1 min-w-[200px]">
    <div class="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary-600/60 text-lg pointer-events-none z-10">
      🔍
    </div>
    <input
      v-model="searchValue"
      type="text"
      placeholder="Search leagues by name..."
      class="glass-input w-full pl-12 pr-12"
      maxlength="100"
      autocomplete="off"
      spellcheck="false"
      @input="handleSearch"
      @keydown.escape="clearSearch"
    />
    <div 
      v-if="searchValue" 
      class="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center cursor-pointer text-sm text-primary-600 transition-all duration-300 hover:bg-primary-200 hover:scale-110"
      @click="clearSearch"
      @keydown.enter="clearSearch"
      @keydown.space="clearSearch"
      tabindex="0"
      role="button"
      aria-label="Clear search"
    >
      ✕
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SearchBarEmits } from '~/types';

const searchValue = ref('');
const emit = defineEmits<SearchBarEmits>();

// Debounce search to improve performance
let searchTimeout: NodeJS.Timeout | null = null;

const handleSearch = (): void => {
  if (searchTimeout) {
    clearTimeout(searchTimeout);
  }
  
  searchTimeout = setTimeout(() => {
    emit('search', searchValue.value.trim());
  }, 300);
};

const clearSearch = (): void => {
  searchValue.value = '';
  if (searchTimeout) {
    clearTimeout(searchTimeout);
  }
  emit('search', '');
};

// Cleanup timeout on unmount
onUnmounted(() => {
  if (searchTimeout) {
    clearTimeout(searchTimeout);
  }
});
</script>