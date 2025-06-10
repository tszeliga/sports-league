<template>
  <div 
    class="text-center py-15 text-white text-xl font-medium relative"
    role="status"
    aria-live="polite"
  >
    <div class="flex items-center justify-center gap-3 mb-4">
      <div class="w-8 h-8 border-3 border-white/30 border-t-white rounded-full animate-spin-slow"></div>
      <span>{{ message }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { LoadingStateProps } from '~/types';

withDefaults(defineProps<LoadingStateProps>(), {
  message: 'Loading...'
});
</script>