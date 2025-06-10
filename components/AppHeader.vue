<template>
  <header class="text-center mb-10 animate-fade-in-down">
    <h1 class="text-white text-5xl font-bold mb-4 relative">
      <span class="inline-block mr-4 text-4xl animate-bounce-slow">🏆</span>
      <span class="text-gradient">Sports Leagues Directory</span>
      <div
        class="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent rounded-full"
      />
    </h1>
    <p class="text-white/95 text-xl font-light tracking-wide">
      Discover sports leagues from around the world
    </p>
    <div v-if="totalLeagues" class="mt-5 flex justify-center">
      <div class="flex flex-col items-center text-white/90">
        <span class="text-3xl font-bold text-white drop-shadow-md">{{
          totalLeagues
        }}</span>
        <span class="text-sm uppercase tracking-widest opacity-80"
          >Leagues</span
        >
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import type { AppHeaderProps } from '~/types';

defineProps<AppHeaderProps>();
</script>
