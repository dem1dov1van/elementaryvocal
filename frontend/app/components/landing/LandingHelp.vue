<template>
  <UPageSection
    id="help"
    orientation="horizontal"
    reverse
    :ui="{
      container: 'gap-8 lg:gap-12 !pt-0 lg:!pt-8 flex-col-reverse lg:flex-row',
      title: 'text-left text-xl sm:text-2xl lg:text-3xl font-medium',
      description: 'text-left mt-4 text-sm sm:text-base text-muted mt-1'
    }"
  >
    <template #description>
      <div class="space-y-6">
        <div>
          <ul class="list-disc ps-5 space-y-1">
            <li>Поиск причин дисфоний и&nbsp;бережное восстановление. Если голос устаёт, садится или пропадает&nbsp;&mdash; мы&nbsp;не&nbsp;будем терпеть. Мы&nbsp;разберёмся, что идёт не&nbsp;так, найдём корень проблемы и&nbsp;шаг за&nbsp;шагом вернём вашему голосу здоровье и&nbsp;выносливость.</li>
            <li>Анатомия голоса&nbsp;&mdash; простым языком. Вы&nbsp;поймёте, что именно происходит внутри, когда вы&nbsp;поёте. Это снимет кучу страхов и&nbsp;даст вам ощущение контроля: Вы&nbsp;будете управлять звуком осознанно, а&nbsp;не&nbsp;наугад.</li>
            <li>Современные вокальные приёмы. Тванг, микст/край, бэлтинг, штробас, вибрато, мелизматика&nbsp;&mdash; всё&nbsp;то, что звучит в&nbsp;любимых треках. Мы&nbsp;освоим эти техники аккуратно, без надрыва, чтобы они стали Вашими инструментами, а&nbsp;не&nbsp;источником напряжения.</li>
            <li>Репертуар, который нравится именно Вам. Мы&nbsp;будем работать с&nbsp;теми песнями, которые откликаются лично Вам. Вы&nbsp;расширите свой репертуар и&nbsp;сможете спеть&nbsp;то, о&nbsp;чём давно мечтали,&nbsp;&mdash; будь&nbsp;то для себя, для выступления на&nbsp;конкурсе, для концерта или для записи в&nbsp;студии.</li>
          </ul>
        </div>
      </div>
    </template>

    <img
      src="/images/tilda/why/why.jpg"
      width="600"
      height="450"
      alt="Занятия вокалом в Elementaryvocal"
      class="w-full rounded-lg object-cover max-h-[400px] lg:max-h-none hidden lg:block"
      loading="lazy"
    >
  </UPageSection>
</template>
