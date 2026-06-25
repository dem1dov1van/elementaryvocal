<script setup lang="ts">
const page = {
  seo: {
    title: 'Школа вокала Александры Родиной — Elementaryvocal',
    description: 'Пой легко и с удовольствием. Обучение для начинающих и профессионалов от эксперта с 20-летним опытом.'
  },
  title: 'Школа вокала Александры Родиной',
  description: 'Пой легко и с удовольствием. Обучение для начинающих и профессионалов от эксперта с 20-летним опытом.',
  hero: {
    links: [
      {
        label: 'Записаться на занятие',
        to: 'https://n2254899.yclients.com',
        target: '_blank',
        color: 'primary'
      }
    ],
    images: [
      { src: '/images/slider/1.png', alt: 'Фото с занятия 1 *' },
      { src: '/images/slider/2.png', alt: 'Фото с занятия 2 *' },
      { src: '/images/slider/3.png', alt: 'Фото с занятия 3 *' },
      { src: '/images/slider/4.png', alt: 'Фото с занятия 4 *' },
      { src: '/images/slider/5.png', alt: 'Фото с занятия 5 *' },
      { src: '/images/slider/6.png', alt: 'Фото с занятия 6 *' },
      { src: '/images/slider/7.png', alt: 'Фото с занятия 7 *' },
      { src: '/images/slider/8.png', alt: 'Фото с занятия 8 *' },
      { src: '/images/slider/9.png', alt: 'Фото с занятия 9 *' }
    ],
    videos: [
      {
        src: 'https://www.youtube.com/embed/8SyQkawL2Bc',
        title: 'YouTube Shorts 1'
      },
      {
        src: 'https://www.youtube.com/embed/A5jTYjskIag',
        title: 'YouTube Shorts 2'
      },
      {
        src: 'https://www.youtube.com/embed/0RhAR6RC3ZY',
        title: 'YouTube Shorts 3'
      },
      {
        src: 'https://www.youtube.com/embed/bIrHcqiuAss',
        title: 'YouTube Shorts 4'
      },
      {
        src: 'https://www.youtube.com/embed/lmYWxkr9Akk',
        title: 'YouTube Shorts 5'
      },
      {
        src: 'https://www.youtube.com/embed/qSZ540mMYJM',
        title: 'YouTube Shorts 6'
      },
      {
        src: 'https://www.youtube.com/embed/vhKiqoJT4IY',
        title: 'YouTube Shorts 7'
      }
    ]
  },
  faq: {
    title: 'Частые вопросы',
    description: 'Ответы на вопросы о формате занятий, записи и обучении.'
  }
}

useSeoMeta({
  title: page.seo.title || page.title,
  ogTitle: page.seo.title || page.title,
  description: page.seo.description || page.description,
  ogDescription: page.seo.description || page.description
})

const itemsFormat = ref([
  {
    label: 'Кому подойдут занятия?',
    icon: 'i-lucide-plus',
    slot: 'who'
  },
  {
    label: 'Что будем делать на уроках?',
    icon: 'i-lucide-plus',
    slot: 'lessons'
  },
  {
    label: 'Можно ли заниматься онлайн?',
    icon: 'i-lucide-plus',
    slot: 'online'
  }
])
</script>

<template>
  <UPage class="overflow-x-hidden">
    <!-- <MainHero /> -->
    <LandingHero :page />
    <LandingAboutMe />
    <LandingWhyElementary />
    <LandingPhilosophy />
    <LandingVideoSlider :videos="page.hero.videos" />
    <LandingBonuses />
    <LandingReviews />
    <LandingPricing />

    <UPageSection title="Частые вопросы">
      <div class="overflow-x-auto">
        <UAccordion
          :items="itemsFormat"
          :ui="{
            trigger: 'gap-3',
            leadingIcon: 'block size-5 shrink-0 text-primary',
            label: 'lg:text-lg'
          }"
        >
          <template #who>
            <div>
              <p class="text-sm pb-3.5">
                <span class="font-semibold">Начинающие.</span> Только начинаете? Не&nbsp;знаете, с&nbsp;чего начать? Мы&nbsp;начнём с&nbsp;самого простого: дыхание, опора, первые ноты. Без страха и&nbsp;оценки.
              </p>
              <p class="text-sm pb-3.5">
                <span class="font-semibold">Любители.</span> Поёте в&nbsp;душе, в&nbsp;машине, под гитару? Мечтаете звучать увереннее? Покажем возможности Вашего голоса и&nbsp;добавим техники.
              </p>
              <p class="text-sm pb-3.5">
                <span class="font-semibold">Профессионалы.</span> Уже выступаете или работаете с&nbsp;голосом? Значит готовы к&nbsp;сложным задачам и&nbsp;тонкой настройке. Разберем зажимы, проработаем переходы, регистры и&nbsp;поможем освоить трудные приёмы.
              </p>
              <p class="text-sm pb-3.5">
                <span class="font-semibold">И&nbsp;просто все, кто хочет петь</span>&nbsp;&mdash; никаких условий, только Ваше желание
              </p>
            </div>
          </template>
          <template #lessons>
            <p class="text-sm pb-3.5">
              В моей школе вокала работаем над разными задачами учеников:
            </p>
            <ul class="list-disc ps-5 space-y-1 text-sm">
              <li>Разбираем репертуар и&nbsp;вокальные техники Ваших любимых исполнителей;</li>
              <li>Учимся фразировке и&nbsp;динамике (чтобы песня «дышала» и&nbsp;звучала «вкусно»);</li>
              <li>Готовимся к&nbsp;конкурсам, концертам и&nbsp;записям или просто кайфовать от&nbsp;занятий;</li>
              <li>Работаем над&nbsp;песнями, которые нравятся именно Вам;</li>
              <li>Сглаживаем регистры — те самые переходные ноты;</li>
              <li>Осваиваем современные вокальные приёмы: тванг, микст/край, бэлтинг, фрай — штробас, вибрато, мелизматику;</li>
              <li>Развиваем музыкальный слух, ритм и&nbsp;уверенное интонирование;</li>
              <li>Переходим из&nbsp;академа в&nbsp;эстраду деликатно;</li>
              <li>Ищем причины дисфоний и&nbsp;восстанавливаем голос;</li>
              <li>Разбираем анатомию, чтобы понять, как работает голос.</li>
            </ul>
          </template>
          <template #online>
            <p class="text-sm pb-3.5">
              Да, занятия проходят как офлайн, так и онлайн в удобное время по предварительной записи.
            </p>
            <p class="text-sm pb-3.5">
              Формат офлайн: студия находится в Санкт-Петербурге, в 5 минутах от м. Московские ворота. На студии есть зона ожидания с диваном. Для Вас всегда в наличии горячая вода, чай/кофе, тапочки, туалетная комната. Аренда студии включена в стоимость занятий.
              А также у нас топовая аппаратура, хорошая звукоизоляция и почти нет соседей😉
            </p>
            <p class="text-sm pb-3.5">
              Формат онлайн: занятия проходят на платформе <a
                href="https://mooz.pro/ru"
                target="_blank"
                class="link"
              >Mooz</a>
            </p>
            <p class="text-sm pb-3.5">
              Преимущества:
              <ul class="list-disc ps-5 space-y-1 text-sm">
                <li>Достаточно чистый звук, минимальная задержка</li>
                <li>Инструменты внутри приложения (виртуальное пианино, метроном, транспонирование минусовки)</li>
                <li>У тебя всегда постоянная ссылка для подключения</li>
                <li>Из любой точки мира с хорошим интернетом</li>
              </ul>
            </p>
          </template>
        </UAccordion>
      </div>
    </UPageSection>
    <MapSection />
  </UPage>
</template>
