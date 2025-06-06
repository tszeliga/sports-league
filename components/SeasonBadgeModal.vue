<template>
  <div
    v-if="isVisible"
    class="modal-overlay"
    @click="handleOverlayClick"
  >
    <div class="modal-content">
      <button
        class="close-btn"
        @click="closeModal"
      >
        ×
      </button>
      
      <div v-if="loading" class="loading">
        Loading season badge...
      </div>
      
      <div v-else-if="error" class="error">
        {{ error }}
      </div>
      
      <div v-else-if="season">
        <h3>{{ season.strSeason }}</h3>
        <img
          v-if="season.strSeasonBadge"
          :src="season.strSeasonBadge"
          :alt="`${season.strSeason} badge`"
          class="badge-image"
          @error="handleImageError"
        />
        <p v-else>No badge image available</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Season {
  idSeason: string;
  strSeason: string;
  strSeasonBadge?: string;
}

interface Props {
  isVisible: boolean;
  season: Season | null;
  loading: boolean;
  error: string | null;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  close: []
}>();

const closeModal = () => {
  emit('close');
};

const handleOverlayClick = (event: MouseEvent) => {
  if (event.target === event.currentTarget) {
    closeModal();
  }
};

const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement;
  img.style.display = 'none';
};
</script>