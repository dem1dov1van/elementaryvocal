<template>
  <div class="flex flex-col gap-3 p-4 shadow-sm transition hover:shadow-md ">
    <div class="flex items-start justify-between gap-2">
      <h4 class="truncate text-lg font-semibold text-gray-900 dark:text-white pl-5">
        {{ track.title }}
      </h4>
    </div>

    <!-- Нативный аудиоплеер -->
    <audio :src="track.src" controls class="w-full rounded-md" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  track: {
    title: string
    src: string
  }
}>()
</script>