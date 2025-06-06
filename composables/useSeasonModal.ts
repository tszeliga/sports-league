interface Season {
  idSeason: string;
  strSeason: string;
  strSeasonBadge?: string;
}

export const useSeasonModal = () => {
  const { fetchSeasonBadge } = useApi();
  
  const modalVisible = ref(false);
  const modalLoading = ref(false);
  const modalError = ref<string | null>(null);
  const selectedSeason = ref<Season | null>(null);

  const openModal = async (leagueId: string) => {
    modalVisible.value = true;
    modalLoading.value = true;
    modalError.value = null;
    selectedSeason.value = null;

    try {
      const season = await fetchSeasonBadge(leagueId);
      selectedSeason.value = season;
    } catch (err) {
      modalError.value = 'Failed to load season badge. Please try again.';
      console.error('Error fetching season badge:', err);
    } finally {
      modalLoading.value = false;
    }
  };

  const closeModal = () => {
    modalVisible.value = false;
    selectedSeason.value = null;
    modalError.value = null;
  };

  return {
    modalVisible: readonly(modalVisible),
    modalLoading: readonly(modalLoading),
    modalError: readonly(modalError),
    selectedSeason: readonly(selectedSeason),
    openModal,
    closeModal
  };
};