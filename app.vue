<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
// Global error handling
onErrorCaptured((error) => {
  console.error('Global error captured:', error);
  return false;
});

// Set up global meta tags
useHead({
  htmlAttrs: {
    lang: 'en'
  },
  meta: [
    { name: 'theme-color', content: '#667eea' }
  ]
});
</script>