<script setup lang="ts">
type VideoItem = {
  src: string
  title: string
}

defineProps<{
  videos?: VideoItem[]
}>()

const requestURL = useRequestURL()
const sectionRef = ref<HTMLElement | null>(null)
const isVideoPlaying = ref(false)

const YOUTUBE_ORIGIN = 'https://www.youtube.com'
let widgetIdCounter = 0
let observer: MutationObserver | undefined

function embedSrc(src: string) {
  const url = new URL(src)
  url.searchParams.set('enablejsapi', '1')
  url.searchParams.set('origin', requestURL.origin)
  return url.toString()
}

function updatePlayingState(state: number) {
  if (state === 1 || state === 3) {
    isVideoPlaying.value = true
  } else if (state === 0 || state === 2 || state === 5) {
    isVideoPlaying.value = false
  }
}

function parseYoutubeMessage(data: unknown) {
  if (typeof data === 'string') {
    try {
      return JSON.parse(data) as Record<string, unknown>
    } catch {
      return null
    }
  }

  if (data && typeof data === 'object') {
    return data as Record<string, unknown>
  }

  return null
}

function handleYoutubeMessage(event: MessageEvent) {
  if (event.origin !== YOUTUBE_ORIGIN) {
    return
  }

  const data = parseYoutubeMessage(event.data)

  if (!data) {
    return
  }

  if (data.event === 'onStateChange' && typeof data.info === 'number') {
    updatePlayingState(data.info)
    return
  }

  const info = data.info as { playerState?: number } | undefined

  if (data.event === 'infoDelivery' && typeof info?.playerState === 'number') {
    updatePlayingState(info.playerState)
  }
}

function postToIframe(iframe: HTMLIFrameElement, payload: Record<string, unknown>) {
  iframe.contentWindow?.postMessage(JSON.stringify(payload), YOUTUBE_ORIGIN)
}

function subscribeToIframe(iframe: HTMLIFrameElement, widgetId: number) {
  postToIframe(iframe, {
    event: 'listening',
    id: widgetId,
    channel: 'widget'
  })

  postToIframe(iframe, {
    event: 'command',
    func: 'addEventListener',
    args: ['onStateChange'],
    id: widgetId,
    channel: 'widget'
  })
}

function registerIframe(iframe: HTMLIFrameElement) {
  if (iframe.dataset.widgetRegistered === 'true') {
    return
  }

  iframe.dataset.widgetRegistered = 'true'
  widgetIdCounter += 1

  const widgetId = widgetIdCounter
  const subscribe = () => subscribeToIframe(iframe, widgetId)

  subscribe()

  const intervalId = window.setInterval(subscribe, 500)
  window.setTimeout(() => window.clearInterval(intervalId), 5000)
}

function registerAllIframes() {
  sectionRef.value?.querySelectorAll('iframe[data-youtube-embed]').forEach((iframe) => {
    if (iframe instanceof HTMLIFrameElement) {
      registerIframe(iframe)
    }
  })
}

function onSectionFocusIn(event: FocusEvent) {
  if (event.target instanceof HTMLIFrameElement && event.target.dataset.youtubeEmbed !== undefined) {
    isVideoPlaying.value = true
  }
}

function onIframeLoad(event: Event) {
  const iframe = event.target

  if (iframe instanceof HTMLIFrameElement) {
    registerIframe(iframe)
  }
}

onMounted(() => {
  window.addEventListener('message', handleYoutubeMessage)
  sectionRef.value?.addEventListener('focusin', onSectionFocusIn, true)

  registerAllIframes()

  if (sectionRef.value) {
    observer = new MutationObserver(registerAllIframes)
    observer.observe(sectionRef.value, { childList: true, subtree: true })
  }
})

onUnmounted(() => {
  window.removeEventListener('message', handleYoutubeMessage)
  sectionRef.value?.removeEventListener('focusin', onSectionFocusIn, true)
  observer?.disconnect()
})
</script>

<template>
  <section
    v-if="videos?.length"
    ref="sectionRef"
    class="overflow-x-hidden py-8 sm:py-12"
  >
    <UMarquee
      pause-on-hover
      reverse
      class="video-marquee py-2 -mx-8 sm:-mx-12 lg:-mx-16 [--duration:48s]"
      :class="{ 'video-marquee-paused': isVideoPlaying }"
    >
      <Motion
        v-for="(video, index) in videos"
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
          :id="`landing-video-${index}`"
          data-youtube-embed
          class="rounded-lg aspect-[9/16] h-[320px] w-[180px] sm:h-[360px] sm:w-[203px] border border-default"
          :src="embedSrc(video.src)"
          :title="video.title"
          loading="lazy"
          referrerpolicy="strict-origin-when-cross-origin"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          @load="onIframeLoad"
        />
      </Motion>
    </UMarquee>
  </section>
</template>

<style scoped>
.video-marquee.video-marquee-paused :deep([data-slot='content']) {
  animation-play-state: paused !important;
}
</style>
