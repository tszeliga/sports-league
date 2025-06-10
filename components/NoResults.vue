<template>
  <div class="text-center py-15 text-white text-xl font-medium opacity-90">
    {{ message }}
  </div>
</template>

<script setup lang="ts">
import type { NoResultsProps } from '../types/components';

withDefaults(defineProps<NoResultsProps>(), {
  message: 'No results found.'
});
</script>