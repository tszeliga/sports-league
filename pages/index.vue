<template>
  <div class="container-custom">
    <AppHeader :total-leagues="leagues.length" />

    <FilterSection
      :sports="allSports"
      @search="handleSearch"
      @sport-filter="handleSportFilter"
    />

    <LoadingState v-if="loading" message="Loading leagues..." />

    <ErrorState v-else-if="error" :message="error" />

    <NoResults
      v-else-if="filteredLeagues.length === 0 && leagues.length > 0"
      message="No leagues found matching your criteria."
    />

    <div v-else-if="leagues.length === 0 && !loading" class="text-center py-15">
      <div class="text-white/90 text-xl font-medium">
        <span class="text-4xl mb-4 block">🏆</span>
        <p>No leagues data available</p>
        <button class="btn-primary mt-4" @click="retryLoad">Try Again</button>
      </div>
    </div>

    <template v-else-if="filteredLeagues.length > 0">
      <div class="mb-5 text-center">
        <p
          class="text-white/90 text-base font-medium bg-white/10 backdrop-blur-sm px-5 py-2 rounded-full inline-block border border-white/20"
        >
          Showing {{ filteredLeagues.length }} of {{ leagues.length }} leagues
        </p>
      </div>

      <LeaguesGrid
        :leagues="filteredLeagues"
        @league-click="handleLeagueClick"
      />
    </template>

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
const { allSports, filteredLeagues, handleSearch, handleSportFilter } =
  useLeagueFilters(leagues);
const {
  modalVisible,
  modalLoading,
  modalError,
  selectedSeason,
  openModal,
  closeModal,
} = useSeasonModal();

// Methods
const handleLeagueClick = async (leagueId: string): Promise<void> => {
  try {
    await openModal(leagueId);
  } catch (err) {
    // Error is handled in the modal composable
  }
};

const retryLoad = async (): Promise<void> => {
  await loadLeagues();
};

// Load leagues on mount
onMounted(async () => {
  await loadLeagues();
});

// Meta tags
useHead({
  title: 'Sports Leagues Directory - Browse Global Sports Leagues',
  meta: [
    {
      name: 'description',
      content:
        'Discover and explore sports leagues from around the world. Search and filter by sport type to find your favorite leagues.',
    },
    {
      name: 'keywords',
      content:
        'sports, leagues, football, basketball, soccer, baseball, hockey, tennis',
    },
    { property: 'og:title', content: 'Sports Leagues Directory' },
    {
      property: 'og:description',
      content: 'Browse and filter sports leagues from around the world',
    },
  ],
});
</script>
