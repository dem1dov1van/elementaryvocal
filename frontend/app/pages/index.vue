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
        color: 'neutral'
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
    ]
  },
  faq: {
    title: 'Частые вопросы',
    description: 'Ответы на вопросы о формате занятий, записи и обучении.',
    categories: [
      {
        title: 'Формат занятий',
        questions: [
          {
            label: 'Кому подойдут занятия?',
            content: 'Занятия будут полезны как начинающим, так и профессиональным вокалистам.'
          },
          {
            label: 'Что будем делать на уроках?',
            content: 'На уроках мы работаем над свободным и комфортным звучанием, дыханием, интонацией и подачей материала. *'
          },
          {
            label: 'Можно ли заниматься онлайн?',
            content: 'Да, занятия проходят онлайн в удобное время по предварительной записи. *'
          }
        ]
      },
      {
        title: 'Запись и условия',
        questions: [
          {
            label: 'Как записаться на первое занятие?',
            content: 'Записывайтесь на первое занятие: https://t.me/rodinaalexandra'
          },
          {
            label: 'Где можно следить за новостями школы?',
            slot: 'telegram'
          },
          {
            label: 'Куда отправлять коммерческие предложения?',
            content: 'Коммерческие предложения присылайте на Elementaryvocal@ya.ru'
          },
          {
            label: 'Сколько длится урок?',
            content: 'Стандартная продолжительность занятия — 60 минут. *'
          },
          {
            label: 'Есть ли пробный формат?',
            content: 'Да, на первом занятии знакомимся, определяем цель и подбираем индивидуальный план развития голоса. *'
          },
          {
            label: 'Нужна ли музыкальная подготовка?',
            content: 'Нет, начать можно с любого уровня. Программа подстраивается под ваш текущий опыт. *'
          }
        ]
      }
    ]
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
    content: 'Занятия будут полезны как начинающим, так и профессиональным вокалистам.'
  },
  {
    label: 'Что будем делать на уроках?',
    icon: 'i-lucide-plus',
    content: 'На уроках мы работаем над свободным и комфортным звучанием, дыханием, интонацией и подачей материала. *'
  },
  {
    label: 'Можно ли заниматься онлайн?',
    icon: 'i-lucide-plus',
    content: 'Да, занятия проходят онлайн в удобное время по предварительной записи. *'
  }
])

const itemsRecord = ref([
  {
    label: 'Как записаться на первое занятие?',
    icon: 'i-lucide-plus',
    slot: 'link'
  },
  {
    label: 'Где можно следить за новостями школы?',
    icon: 'i-lucide-plus',
    slot: 'telegram'
  }
])

const itemsAdditional = ref([
  {
    label: 'Есть ли пробный формат?',
    icon: 'i-lucide-plus',
    content: 'Да, на первом занятии знакомимся, определяем цель и подбираем индивидуальный план развития голоса. *'
  },
  {
    label: 'Нужна ли музыкальная подготовка?',
    icon: 'i-lucide-plus',
    content: 'Нет, начать можно с любого уровня. Программа подстраивается под ваш текущий опыт. *'
  }
])

const tabs = ref([
  {
    label: 'Формат занятий',
    slot: 'format'
  },
  {
    label: 'Запись и условия',
    slot: 'record'
  }
])
</script>

<template>
  <UPage class="overflow-x-hidden">
    <LandingHero :page />
    <LandingAboutMe />
    <LandingWhyElementary />
    <LandingPhilosophy />
    <LandingBonuses />
    <LandingReviews />
    <LandingPricing />

    <UPageSection title="Частые вопросы">
      <div class="overflow-x-auto">
        <UTabs
          :unmount-on-hide="false"
          :items="tabs"
          class="w-full"
        >
          <template #format>
            <UAccordion
              :items="itemsFormat"
              :ui="{
                trigger: 'gap-3',
                leadingIcon: 'block size-5 shrink-0 text-primary'
              }"
            />
          </template>
          <template #record>
            <UAccordion
              :items="itemsRecord"
              :ui="{
                trigger: 'gap-3',
                leadingIcon: 'block size-5 shrink-0 text-primary'
              }"
            >
              <template #link>
                <p>
                  Записывайтесь на первое занятие: <a
                    href="https://n2254899.yclients.com"
                    target="_blank"
                    class="link"
                  >к записи</a>
                </p>
              </template>

              <template #telegram>
                <p>
                  Больше интересного в <a
                    href="https://t.me/rodinaalexandra"
                    target="_blank"
                    class="link"
                  >Telegram-канале</a>. Присоединяйтесь! *
                </p>
              </template>
            </UAccordion>
          </template>
          <template #additional>
            <UAccordion
              :items="itemsAdditional"
              :ui="{
                trigger: 'gap-3',
                leadingIcon: 'block size-5 shrink-0 text-primary'
              }"
            />
          </template>
        </UTabs>
      </div>
    </UPageSection>
    <MapSection />
  </UPage>
</template>
