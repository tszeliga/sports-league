<template>
  <div class="no-results">
    {{ message }}
  </div>
</template>

<script setup lang="ts">
interface Props {
  message?: string;
}

withDefaults(defineProps<Props>(), {
  message: 'No results found.'
});
</script>