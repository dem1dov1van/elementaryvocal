<script setup lang="ts">
const page = {
  seo: {
    title: 'Elementaryvocal - уроки эстрадного вокала',
    description: 'Добро пожаловать на канал вокальной школы Elementeryvocal. Меня зовут Александра Родина, я преподаватель эстрадного вокала с опытом в вокальной сфере более 20 лет.'
  },
  title: 'Добро пожаловать в вокальную школу Elementeryvocal',
  description: 'Меня зовут Александра Родина. На протяжении многих лет я помогаю вокалистам звучать свободнее и комфортнее, петь легко и с удовольствием. Мои уроки и знания будут полезны как начинающим, так и профессиональным вокалистам.',
  hero: {
    links: [
      {
        label: 'Записаться на первое занятие',
        to: 'https://t.me/rodinaalexandra',
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
        src: 'https://www.youtube.com/embed/A2AeFGOcSEI',
        title: 'YouTube Shorts 3'
      },
      {
        src: 'https://www.youtube.com/embed/bIrHcqiuAss',
        title: 'YouTube Shorts 4'
      },
      {
        src: 'https://www.youtube.com/embed/lmYWxkr9Akk',
        title: 'YouTube Shorts 5'
      }
    ]
  },
  about: {
    title: 'О преподавателе',
    description: `Меня зовут Александра Родина, я преподаватель эстрадного вокала с опытом в вокальной сфере более 20 лет.
На протяжении многих лет я помогаю вокалистам звучать свободнее и комфортнее, петь легко и с удовольствием.
Мои уроки и знания будут полезны как начинающим, так и профессиональным вокалистам.`
  },
  experience: {
    title: 'Опыт и направления',
    items: [
      {
        position: 'Преподаватель эстрадного вокала',
        date: 'Более 20 лет практики',
        company: {
          name: 'Elementaryvocal',
          logo: 'i-simple-icons-nuxtdotjs',
          url: 'https://t.me/rodinaalexandra',
          color: '#00DC82'
        }
      },
      {
        position: 'Подготовка начинающих вокалистов',
        date: 'Еще одно место',
        company: {
          name: 'Частная практика',
          logo: 'i-simple-icons-raycast',
          url: 'https://t.me/rodinaalexandra',
          color: '#FF6363'
        }
      },
      {
        position: 'Онлайн-занятия*',
        date: 'Еще одно место',
        company: {
          name: 'Вокальная школа',
          logo: 'i-simple-icons-linear',
          url: 'https://t.me/rodinaalexandra',
          color: '#5E6AD2'
        }
      }
    ]
  },
  testimonials: [
    {
      quote: 'После нескольких занятий я перестала зажиматься и впервые почувствовала, что могу петь свободно и уверенно. Уроки проходят очень бережно и понятно. *',
      author: {
        name: 'Марина',
        description: 'Ученица вокальной школы *',
        avatar: {
          src: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=40&h=40&q=80',
          srcset: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=80&h=80&q=80 2x'
        }
      }
    },
    {
      quote: 'Мне нравится, что на уроках есть система: дыхание, опора, работа с диапазоном и эмоцией. Я стала намного увереннее на выступлениях. *',
      author: {
        name: 'Илья',
        description: 'Вокалист и автор песен *',
        avatar: {
          src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=40&h=40&q=80',
          srcset: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=80&h=80&q=80 2x'
        }
      }
    },
    {
      quote: 'Даже после долгого перерыва в пении я быстро вернулась в форму. Уроки помогают снять зажимы и получать удовольствие от процесса. *',
      author: {
        name: 'Екатерина',
        description: 'Исполнительница и преподаватель музыки *',
        avatar: {
          src: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=40&h=40&q=80',
          srcset: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=80&h=80&q=80 2x'
        }
      }
    }
  ],
  blog: {
    title: 'Полезные материалы',
    description: 'Советы, практики и разборы по вокалу *'
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
            content: 'Больше интересного в Telegram-канале. Присоединяйтесь! *'
          },
          {
            label: 'Куда отправлять коммерческие предложения?',
            content: 'Коммерческие предложения присылайте на Elementaryvocal@ya.ru'
          },
          {
            label: 'Сколько длится урок?',
            content: 'Стандартная продолжительность занятия — 60 минут. *'
          }
        ]
      },
      {
        title: 'Дополнительно',
        questions: [
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
</script>

<template>
  <UPage>
    <LandingHero :page />
    <UPageSection
      :ui="{
        container: 'pt-0! lg:grid lg:grid-cols-2 lg:gap-8'
      }"
    >
      <LandingAbout :page />
      <LandingWorkExperience :page />
    </UPageSection>
    <LandingBlog :page />
    <LandingTestimonials :page />
    <LandingFAQ :page />

    <MapSection />
  </UPage>
</template>
