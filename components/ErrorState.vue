<template>
  <div 
    class="bg-gradient-to-r from-red-500 to-red-600 text-white p-5 rounded-xl text-center font-medium shadow-lg shadow-red-500/30 animate-shake"
    role="alert"
    aria-live="polite"
  >
    <div class="flex items-center justify-center gap-2 mb-2">
      <span class="text-xl">⚠️</span>
      <span class="font-semibold">Error</span>
    </div>
    <p>{{ message }}</p>
  </div>
</template>

<script setup lang="ts">
import type { ErrorStateProps } from '~/types';

defineProps<ErrorStateProps>();
</script>