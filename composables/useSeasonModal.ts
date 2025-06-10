import type { Season, UseSeasonModalReturn } from "~/types";

export const useSeasonModal = (): UseSeasonModalReturn => {
  const { fetchSeasonBadge } = useApi();

  const modalVisible = ref(false);
  const modalLoading = ref(false);
  const modalError = ref<string | null>(null);
  const selectedSeason = ref<Season | null>(null);

  const openModal = async (leagueId: string): Promise<void> => {
    modalVisible.value = true;
    modalLoading.value = true;
    modalError.value = null;
    selectedSeason.value = null;

    try {
      const season = await fetchSeasonBadge(leagueId);
      selectedSeason.value = season;
    } catch {
      modalError.value = "Failed to load season badge. Please try again.";
    } finally {
      modalLoading.value = false;
    }
  };

  const closeModal = (): void => {
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
    closeModal,
  };
};
