<template>
  <UPageSection
    id="why-elementary"
    title="На занятиях достигаем высот"
    orientation="horizontal"
    :ui="{
      container: 'gap-8 lg:gap-12 !pt-0',
      title: 'text-left text-xl sm:text-2xl lg:text-3xl font-medium',
      description: 'text-left mt-4 text-sm sm:text-base text-muted'
    }"
  >
    <template #description>
      <div class="space-y-6">
        <div>
          <p class="font-semibold text-highlighted mb-2">
            С чем помогаю:
          </p>
          <ul class="list-disc ps-5 space-y-1">
            <li>сглаживание регистров — те самые переходные ноты;</li>
            <li>развитие музыкального слуха, ритма и уверенного интонирования;</li>
            <li>деликатный переход из академа в эстраду;</li>
            <li>поиск причин дисфоний и восстановление голоса;</li>
            <li>освоение современных вокальных приёмов: тванг, микст/край, бэлтинг, фрай — штrobас, вибрато, мелизматика;</li>
            <li>разбор анатомии для детального понимания, как работает голос;</li>
            <li>расширение репертуара и работа по вашим музыкальным предпочтениям.</li>
          </ul>
        </div>
        <div>
          <p class="font-semibold text-highlighted mb-2">
            Что мы будем делать на занятиях:
          </p>
          <ul class="list-disc ps-5 space-y-1">
            <li>разбирать репертуар и вокальные техники ваших любимых исполнителей;</li>
            <li>учиться фразировке и динамике, чтобы песня «дышала» и звучала «вкусно»;</li>
            <li>готовиться к конкурсам, концертам и записям;</li>
            <li>работать над песнями, которые нравятся именно вам.</li>
          </ul>
        </div>
      </div>
    </template>

    <img
      src="/images/tilda/why/help.jpg"
      width="600"
      height="450"
      alt="Занятия вокалом в Elementaryvocal"
      class="w-full rounded-lg object-cover"
      loading="lazy"
    >
  </UPageSection>
</template>
