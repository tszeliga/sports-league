<template>
  <div
    class="glass-card p-6 cursor-pointer card-hover shimmer relative overflow-hidden animate-fade-in-scale"
    @click="handleClick"
  >
    <div class="flex items-center gap-3 mb-4">
      <span
        class="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide shadow-lg shadow-primary-500/30 transition-transform duration-300 hover:scale-105"
      >
        {{ league.strSport }}
      </span>
    </div>

    <h3
      class="text-slate-800 text-xl font-bold mb-3 leading-tight transition-colors duration-300 hover:text-primary-600"
    >
      {{ league.strLeague }}
    </h3>

    <p
      v-if="league.strLeagueAlternate"
      class="text-slate-600 italic text-base leading-relaxed opacity-80 transition-opacity duration-300 hover:opacity-100"
    >
      {{ league.strLeagueAlternate }}
    </p>

    <div
      class="flex items-center justify-between mt-5 pt-4 border-t border-black/10 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
    >
      <span class="text-primary-600 text-sm font-medium"
        >Click to view badge</span
      >
      <div
        class="text-primary-600 text-xl transition-transform duration-300 group-hover:translate-x-1"
      >
        →
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { LeagueCardProps, LeagueCardEmits } from '~/types';

const props = defineProps<LeagueCardProps>();
const emit = defineEmits<LeagueCardEmits>();

const handleClick = (): void => {
  emit('click', props.league.idLeague);
};
</script>

<style scoped>
.group:hover .group-hover\:opacity-100 {
  opacity: 1;
}

.group:hover .group-hover\:translate-y-0 {
  transform: translateY(0);
}

.group:hover .group-hover\:translate-x-1 {
  transform: translateX(0.25rem);
}
</style>
