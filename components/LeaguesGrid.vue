<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
    <LeagueCard
      v-for="league in leagues"
      :key="league.idLeague"
      :league="league"
      class="group animation-delay-100"
      @click="$emit('league-click', $event)"
    />
  </div>
</template>

<script setup lang="ts">
import type { LeaguesGridProps, LeaguesGridEmits } from "../types/components";

defineProps<LeaguesGridProps>();
defineEmits<LeaguesGridEmits>();
</script>
