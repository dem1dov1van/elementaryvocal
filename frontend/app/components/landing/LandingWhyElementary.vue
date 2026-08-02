<template>
  <UPageSection
    id="why-elementary"
    title="Вот что изменится, когда мы&nbsp;начнём работать вместе:"
    orientation="horizontal"
    :ui="{
      container: 'gap-8 lg:gap-12 !pt-0 !pb-0 !lg:pb-8 flex-col-reverse lg:flex-row',
      title: 'text-left text-xl sm:text-2xl lg:text-3xl font-medium',
      description: 'text-left mt-4 text-sm sm:text-base text-muted'
    }"
  >
    <template #description>
      <div class="space-y-6">
        <div>
          <ul class="list-disc ps-5 space-y-1">
            <li>Сглаживание регистров. Те&nbsp;самые переходные ноты, которые сейчас, возможно, &laquo;ломаются&raquo; или вызывают неуверенность, станут ровными и&nbsp;послушными. Вы&nbsp;перестанете бояться верхов и&nbsp;научитесь проходить их&nbsp;с&nbsp;лёгкостью.</li>
            <li>Опора и&nbsp;дыхание. Вы&nbsp;почувствуете, что такое настоящее пение на&nbsp;опоре. Голос перестанет уставать, а&nbsp;дыхания будет хватать на&nbsp;самые длинные фразы&nbsp;&mdash; и&nbsp;Вы будете распределять его естественно, не&nbsp;задумываясь.</li>
            <li>Музыкальный слух, ритм, интонирование. Даже если сейчас Вам кажется, что &laquo;медведь на&nbsp;ухо наступил&raquo;,&nbsp;&mdash; слух можно и&nbsp;нужно развивать. Вы&nbsp;начнёте чисто попадать в&nbsp;ноты и&nbsp;чувствовать ритм лучше.</li>
            <li>Деликатный переход из&nbsp;академа в&nbsp;эстраду. Если у&nbsp;Вас академическая база, мы&nbsp;научим мышцы работать по&nbsp;другому и&nbsp;постараемся сохраните всё ценное, что&nbsp;Вы уже умеете.</li>
          </ul>
        </div>
      </div>
    </template>

    <img
      src="/images/tilda/why/help.jpg"
      width="600"
      height="450"
      alt="Занятия вокалом в Elementaryvocal"
      class="w-full rounded-lg object-cover max-h-[400px] lg:max-h-none"
      loading="lazy"
    >
  </UPageSection>
</template>
