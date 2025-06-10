<template>
  <div class="min-h-screen bg-gradient-to-br from-red-500 via-red-600 to-red-700 flex items-center justify-center p-5">
    <div class="glass-card p-10 max-w-md w-full text-center">
      <div class="text-6xl mb-6">😵</div>
      <h1 class="text-2xl font-bold text-slate-800 mb-4">
        Oops! Something went wrong
      </h1>
      <p class="text-slate-600 mb-6">
        {{ error?.statusMessage || 'An unexpected error occurred' }}
      </p>
      <div class="space-y-3">
        <button 
          class="btn-primary w-full"
          @click="handleError"
        >
          Try Again
        </button>
        <NuxtLink 
          to="/"
          class="block text-slate-600 hover:text-slate-800 transition-colors"
        >
          Go Home
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface ErrorProps {
  error: {
    statusCode?: number;
    statusMessage?: string;
    message?: string;
  };
}

const props = defineProps<ErrorProps>();

const handleError = () => {
  clearError({ redirect: '/' });
};

// Set appropriate status code for SEO
if (props.error?.statusCode) {
  setResponseStatus(props.error.statusCode);
}

// Meta tags for error page
useHead({
  title: `Error ${props.error?.statusCode || 500} - Sports Leagues Directory`,
  meta: [
    { name: 'robots', content: 'noindex, nofollow' }
  ]
});
</script>