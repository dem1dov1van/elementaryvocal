<script setup lang="ts">
type Testimonial = {
  quote: string
  author: {
    name: string
    description: string
    avatar: {
      src: string
      srcset?: string
    }
  }
}

type TestimonialsPage = {
  testimonials: Testimonial[]
}

defineProps<{
  page: TestimonialsPage
}>()
</script>

<template>
  <UPageSection
    title="Отзывы"
    :ui="{
      container: 'gap-6'
    }"
  >
    <UPageCard
      v-for="(testimonial, index) in page.testimonials"
      :key="index"
      :description="testimonial.quote"
      :ui="{
        description: 'text-sm sm:text-base'
      }"
    >
      <template #footer>
        <div class="flex items-center gap-3">
          <UAvatar
            :src="testimonial.author.avatar.src"
            :alt="testimonial.author.name"
            size="md"
          />
          <div>
            <p class="font-medium text-sm">
              {{ testimonial.author.name }}
            </p>
            <p class="text-muted text-xs">
              {{ testimonial.author.description }}
            </p>
          </div>
        </div>
      </template>
    </UPageCard>
  </UPageSection>
</template>
