<script setup lang="ts">
type HeroImage = {
  src: string
  alt: string
}

type HeroPage = {
  title: string
  description: string
  hero: {
    links?: Record<string, unknown>[]
    images: HeroImage[]
    videos?: {
      src: string
      title: string
    }[]
  }
}

type AppGlobal = {
  available?: boolean
  meetingLink?: string
  picture?: {
    light?: string
    dark?: string
    alt?: string
  }
}

type AppFooter = {
  links?: Record<string, unknown>[]
}

const { footer, global } = useAppConfig()
const appGlobal = global as AppGlobal
const footerLinks = ((footer as AppFooter)?.links) ?? []

defineProps<{
  page: HeroPage
}>()
</script>

<template>
  <UPageHero
    :ui="{
      headline: 'flex items-center justify-center',
      title: 'text-shadow-md max-w-lg mx-auto',
      links: 'mt-4 flex-col justify-center items-center'
    }"
  >
    <template #headline>
      <Motion
        :initial="{
          scale: 1.1,
          opacity: 0,
          filter: 'blur(20px)'
        }"
        :animate="{
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)'
        }"
        :transition="{
          duration: 0.6,
          delay: 0.1
        }"
      >
        <UColorModeAvatar
          class="size-18 ring ring-default ring-offset-3 ring-offset-bg"
          :light="appGlobal.picture?.light!"
          :dark="appGlobal.picture?.dark!"
          :alt="appGlobal.picture?.alt!"
        />
      </Motion>
    </template>

    <template #title>
      <Motion
        :initial="{
          scale: 1.1,
          opacity: 0,
          filter: 'blur(20px)'
        }"
        :animate="{
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)'
        }"
        :transition="{
          duration: 0.6,
          delay: 0.1
        }"
      >
        {{ page.title }}
      </Motion>
    </template>

    <template #description>
      <Motion
        :initial="{
          scale: 1.1,
          opacity: 0,
          filter: 'blur(20px)'
        }"
        :animate="{
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)'
        }"
        :transition="{
          duration: 0.6,
          delay: 0.3
        }"
      >
        {{ page.description }}
      </Motion>
    </template>

    <template #links>
      <Motion
        :initial="{
          scale: 1.1,
          opacity: 0,
          filter: 'blur(20px)'
        }"
        :animate="{
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)'
        }"
        :transition="{
          duration: 0.6,
          delay: 0.5
        }"
      >
        <div
          v-if="page.hero.links"
          class="flex items-center gap-2"
        >
          <UButton v-bind="page.hero.links[0]" />
          <UButton
            :color="appGlobal.available ? 'success' : 'error'"
            variant="ghost"
            class="gap-2"
            :to="appGlobal.available ? appGlobal.meetingLink : ''"
            :label="appGlobal.available ? 'Идет запись на занятия' : 'Набор временно закрыт'"
          >
            <template #leading>
              <span class="relative flex size-2">
                <span
                  class="absolute inline-flex size-full rounded-full opacity-75"
                  :class="appGlobal.available ? 'bg-success animate-ping' : 'bg-error'"
                />
                <span
                  class="relative inline-flex size-2 scale-90 rounded-full"
                  :class="appGlobal.available ? 'bg-success' : 'bg-error'"
                />
              </span>
            </template>
          </UButton>
        </div>
      </Motion>

      <div class="gap-x-4 inline-flex mt-4">
        <Motion
          v-for="(link, index) of footerLinks"
          :key="index"

          :initial="{
            scale: 1.1,
            opacity: 0,
            filter: 'blur(20px)'
          }"
          :animate="{
            scale: 1,
            opacity: 1,
            filter: 'blur(0px)'
          }"
          :transition="{
            duration: 0.6,
            delay: 0.5 + Number(index) * 0.1
          }"
        >
          <UButton
            v-bind="{ size: 'md', color: 'neutral', variant: 'ghost', ...link }"
          />
        </Motion>
      </div>
    </template>

    <UMarquee
      pause-on-hover
      class="py-2 -mx-8 sm:-mx-12 lg:-mx-16 [--duration:40s]"
    >
      <Motion
        v-for="(img, index) in page.hero.images"
        :key="index"
        :initial="{
          scale: 1.1,
          opacity: 0,
          filter: 'blur(20px)'
        }"
        :animate="{
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)'
        }"
        :transition="{
          duration: 0.6,
          delay: Number(index) * 0.1
        }"
      >
        <img
          width="234"
          height="234"
          class="rounded-lg aspect-square object-cover"
          :class="Number(index) % 2 === 0 ? '-rotate-2' : 'rotate-2'"
          :src="img.src"
          :alt="img.alt"
          loading="lazy"
          decoding="async"
        >
      </Motion>
    </UMarquee>

    <UMarquee
      v-if="page.hero.videos?.length"
      pause-on-hover
      reverse
      class="py-2 -mx-8 sm:-mx-12 lg:-mx-16 [--duration:48s]"
    >
      <Motion
        v-for="(video, index) in page.hero.videos"
        :key="`${video.src}-${index}`"
        :initial="{
          scale: 1.06,
          opacity: 0,
          filter: 'blur(20px)'
        }"
        :animate="{
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)'
        }"
        :transition="{
          duration: 0.6,
          delay: Number(index) * 0.1
        }"
      >
        <iframe
          class="rounded-lg aspect-[9/16] h-[320px] w-[180px] sm:h-[360px] sm:w-[203px] border border-default"
          :src="video.src"
          :title="video.title"
          loading="lazy"
          referrerpolicy="strict-origin-when-cross-origin"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />
      </Motion>
    </UMarquee>
  </UPageHero>
</template>
