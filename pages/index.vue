<template>
  <div class="container">
    <AppHeader />

    <FilterSection
      :sports="allSports"
      @search="handleSearch"
      @sport-filter="handleSportFilter"
    />

    <LoadingState
      v-if="loading"
      message="Loading leagues..."
    />

    <ErrorState
      v-else-if="error"
      :message="error"
    />

    <NoResults
      v-else-if="filteredLeagues.length === 0"
      message="No leagues found matching your criteria."
    />

    <LeaguesGrid
      v-else
      :leagues="filteredLeagues"
      @league-click="handleLeagueClick"
    />

    <SeasonBadgeModal
      :is-visible="modalVisible"
      :season="selectedSeason"
      :loading="modalLoading"
      :error="modalError"
      @close="closeModal"
    />
  </div>
</template>

<script setup lang="ts">
// Composables
const { leagues, loading, error, loadLeagues } = useLeagues();
const { allSports, filteredLeagues, handleSearch, handleSportFilter } = useLeagueFilters(leagues);
const { modalVisible, modalLoading, modalError, selectedSeason, openModal, closeModal } = useSeasonModal();

// Methods
const handleLeagueClick = (leagueId: string) => {
  openModal(leagueId);
};

// Load leagues on mount
onMounted(() => {
  loadLeagues();
});

// Meta tags
useHead({
  title: 'Sports Leagues Directory',
  meta: [
    { name: 'description', content: 'Browse and filter sports leagues from around the world' }
  ]
});
</script>