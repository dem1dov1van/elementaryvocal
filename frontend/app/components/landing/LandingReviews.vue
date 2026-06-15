<script setup lang="ts">
const reviews = [
  { src: '/images/tilda/reviews/01.jpeg', alt: 'Отзыв ученика 1' },
  { src: '/images/tilda/reviews/02.jpeg', alt: 'Отзыв ученика 2' },
  { src: '/images/tilda/reviews/03.jpeg', alt: 'Отзыв ученика 3' },
  { src: '/images/tilda/reviews/04.jpeg', alt: 'Отзыв ученика 4' },
  { src: '/images/tilda/reviews/05.jpeg', alt: 'Отзыв ученика 5' },
  { src: '/images/tilda/reviews/06.jpeg', alt: 'Отзыв ученика 6' }
]
</script>

<template>
  <UPageSection
    id="reviews"
    title="Отзывы учеников и рецензии"
    :ui="{
      container: 'gap-6 sm:gap-8'
    }"
  >
    <UMarquee
      pause-on-hover
      class="py-2 -mx-8 sm:-mx-12 lg:-mx-16 [--duration:45s]"
    >
      <img
        v-for="(review, index) in reviews"
        :key="index"
        :src="review.src"
        :alt="review.alt"
        width="280"
        height="373"
        class="rounded-lg aspect-[3/4] h-[280px] sm:h-[320px] w-auto object-cover shrink-0"
        :class="Number(index) % 2 === 0 ? '-rotate-1' : 'rotate-1'"
        loading="lazy"
        decoding="async"
      >
    </UMarquee>
  </UPageSection>
</template>
