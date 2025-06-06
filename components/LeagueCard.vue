<template>
  <div
    class="league-card"
    @click="handleClick"
  >
    <h3 class="league-name">{{ league.strLeague }}</h3>
    <span class="league-sport">{{ league.strSport }}</span>
    <p
      v-if="league.strLeagueAlternate"
      class="league-alternate"
    >
      {{ league.strLeagueAlternate }}
    </p>
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
  league: League;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  click: [leagueId: string]
}>();

const handleClick = () => {
  emit('click', props.league.idLeague);
};
</script>