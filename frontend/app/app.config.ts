export default defineAppConfig({
  global: {
    picture: {
      dark: '/images/avatar.png',
      light: '/images/avatar.png',
      alt: 'Фото Александры Родиной'
    },
    meetingLink: 'https://t.me/elementaryvocal',
    email: 'Elementaryvocal@ya.ru',
    available: true
  },
  ui: {
    colors: {
      primary: 'green',
      neutral: 'neutral'
    },
    button: {
      compoundVariants: [
        {
          color: 'primary',
          variant: 'solid',
          class: '!text-white'
        }
      ]
    },
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description: 'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    }
  },
  footer: {
    author: {
      name: 'dem1dov1van',
      url: 'https://t.me/dem1dov1van'
    },
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-youtube',
      'to': 'https://www.youtube.com/@elementaryvocal',
      'target': '_blank',
      'aria-label': 'Наш YouTube-канал'
    }, {
      'icon': 'i-simple-icons-twitch',
      'to': 'https://www.twitch.tv/elementaryvocal',
      'target': '_blank',
      'aria-label': 'Наш Twitch-канал'
    }, {
      'icon': 'i-simple-icons-instagram',
      'to': 'https://instagram.com/elementaryvocal/',
      'target': '_blank',
      'aria-label': 'Наш Instagram'
    },
    {
      'icon': 'i-simple-icons-telegram',
      'to': 'https://t.me/elementaryvocal',
      'target': '_blank',
      'aria-label': 'Наш Telegram'
    }
    ]
  }
})
