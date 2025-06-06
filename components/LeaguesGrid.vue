<template>
  <div class="leagues-grid">
    <LeagueCard
      v-for="league in leagues"
      :key="league.idLeague"
      :league="league"
      @click="$emit('league-click', $event)"
    />
  </div>
</template>

<script setup lang="ts">
interface League {
  idLeague: string;
  strLeague: string;
  strSport: string;
  strLeagueAlternate?: string;
}

interface Props {
  leagues: League[];
}

defineProps<Props>();
defineEmits<{
  'league-click': [leagueId: string]
}>();
</script>