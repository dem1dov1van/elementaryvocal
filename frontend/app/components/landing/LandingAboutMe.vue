<template>
  <UPageSection
    id="about-me"
    title="Обо мне"
    orientation="horizontal"
    reverse
    :ui="{
      container: 'gap-8 lg:gap-12',
      title: 'text-left text-xl sm:text-2xl lg:text-3xl font-medium',
      description: 'text-left mt-4 text-sm sm:text-base text-muted space-y-4'
    }"
  >
    <template #description>
      <p>
        Я педагог с вокальным опытом 20+ лет, сценический опыт 15+ лет. Провела больше 100 живых выступлений, участвовала в конкурсах и фестивалях.
      </p>
      <p>
        Записала и выпустила три полноформатных альбома и несколько синглов в разных коллективах.
      </p>
      <p>
        Владею приёмами современного эстрадного и академического вокала. Ежегодно прохожу дополнительное обучение: посещаю курсы, мастер-классы по различным техникам вокала.
      </p>
      <p>
        С 2008 по 2021 гг. выступала солисткой в группах «3/4 Неба» и «Strontium», была на разогреве у «Lacrimas Profundere» и «Blaze Bayley».
      </p>
    </template>

    <img
      src="/images/tilda/about/photo.jpg"
      width="352"
      height="647"
      alt="Александра Родина — преподаватель вокала"
      class="w-full rounded-lg object-cover"
      loading="lazy"
    >
  </UPageSection>
</template>
