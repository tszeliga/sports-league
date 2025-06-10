<template>
  <div
    v-if="isVisible"
    class="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-5 animate-fade-in"
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-title"
    @click="handleOverlayClick"
    @keydown.escape="closeModal"
  >
    <div class="glass-card p-10 max-w-2xl w-full text-center relative max-h-[80vh] overflow-y-auto animate-modal-slide-in">
      <button
        class="absolute top-5 right-6 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border-0 text-2xl cursor-pointer text-slate-600 flex items-center justify-center transition-all duration-300 hover:bg-red-100 hover:text-red-600 hover:scale-110 hover:rotate-90 focus:outline-none focus:ring-2 focus:ring-red-500"
        aria-label="Close modal"
        @click="closeModal"
      >
        ×
      </button>
      
      <div v-if="loading" class="py-15 text-slate-700 text-xl font-medium relative">
        Loading season badge...
        <div class="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-10 h-10 border-3 border-primary-300 border-t-primary-600 rounded-full animate-spin-slow"/>
      </div>
      
      <div v-else-if="error" class="bg-gradient-to-r from-red-500 to-red-600 text-white p-5 rounded-xl font-medium shadow-lg shadow-red-500/30 animate-shake">
        {{ error }}
      </div>
      
      <div v-else-if="season">
        <h3 id="modal-title" class="text-2xl font-bold text-slate-800 mb-6">{{ season.strSeason || 'Season Information' }}</h3>
        
        <div v-if="season.strBadge && season.strBadge !== 'null'" class="my-8 relative">
          <img
            :src="season.strBadge"
            :alt="`${season.strSeason || 'Season'} badge`"
            class="max-w-full h-auto rounded-xl mx-auto shadow-2xl shadow-black/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-black/25 animate-image-load"
            loading="lazy"
            @error="handleImageError"
            @load="handleImageLoad"
          >
        </div>
        
        <div v-else class="py-8 bg-gradient-to-r from-slate-50 to-slate-100 border-2 border-dashed border-slate-300 rounded-xl my-5 text-slate-600 font-medium">
          <p class="mb-2">No badge image available for this season</p>
          <p class="text-sm text-slate-500">Season ID: {{ season.idSeason }}</p>
        </div>
      </div>
      
      <div v-else class="py-6 bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-200 rounded-xl my-5 text-yellow-800 font-medium shadow-sm shadow-yellow-200/30">
        <p>No season data available for this league</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SeasonBadgeModalProps, SeasonBadgeModalEmits } from '../types/components';

const props = defineProps<SeasonBadgeModalProps>();
const emit = defineEmits<SeasonBadgeModalEmits>();

const closeModal = (): void => {
  emit('close');
};

const handleOverlayClick = (event: MouseEvent): void => {
  if (event.target === event.currentTarget) {
    closeModal();
  }
};

const handleImageError = (event: Event): void => {
  const img = event.target as HTMLImageElement;
  img.style.display = 'none';
  
  // Show error message
  const container = img.parentElement;
  if (container) {
    container.innerHTML = '<p class="text-red-600 italic font-medium">Failed to load badge image</p>';
  }
};

const handleImageLoad = (): void => {
  // Image loaded successfully - no action needed
};

// Handle keyboard navigation
onMounted(() => {
  if (props.isVisible) {
    // Focus trap for accessibility
    const modal = document.querySelector('[role="dialog"]');
    if (modal) {
      const focusableElements = modal.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      const handleTabKey = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              lastElement.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastElement) {
              firstElement.focus();
              e.preventDefault();
            }
          }
        }
      };

      document.addEventListener('keydown', handleTabKey);
      firstElement?.focus();

      onUnmounted(() => {
        document.removeEventListener('keydown', handleTabKey);
      });
    }
  }
});
</script>