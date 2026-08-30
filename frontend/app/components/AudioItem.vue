<template>
  <div class="flex flex-col gap-4 md:p-4 py-4 transition hover:shadow-md ">
    <div class="px-5">
      <div class="flex items-baseline justify-between gap-2">
        <h4 class="text-lg font-semibold text-gray-900 dark:text-white">
          {{ track.title }}
        </h4>

        <p
          class="text-sm text-gray-500 cursor-pointer flex items-center gap-1"
          @click="toggleDescription"
        >
          Подробнее
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-4 h-4 transition-transform translate-y-[2px] duration-200"
            :class="{ 'rotate-180': showDescription }"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </p>
      </div>
      <div
        v-if="showDescription"
        class="text-sm text-gray-500 mb-2 mt-1"
      >
        {{ track.description }}
      </div>
      <div
        v-show="showDescription && track.tags?.length"
        class="flex items-center gap-2"
      >
        <TrackTag
          v-for="tag in track.tags"
          :key="tag"
          :tag="tag"
        />
      </div>
    </div>

    <!-- Нативный аудиоплеер -->
    <audio
      :src="track.src"
      controls
      class="w-full rounded-md"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  track: {
    title: string
    src: string
    description?: string
    tags?: string[]
  }
}>()

const showDescription = ref(false)

const toggleDescription = () => {
  showDescription.value = !showDescription.value
}
</script>
