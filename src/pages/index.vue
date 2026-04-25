<template>
  <div>
    <h1>Hello World</h1>

    <audio controls>
      <source :src="audio1" type="audio/mpeg" />
      <p>
        Ваш браузер не поддерживает HTML5 аудио. Вот взамен
        <a href="myAudio.mp4">ссылка на аудио</a>
      </p>
    </audio>
  </div>
</template>

<script setup>
import audio1 from './assets/audio/1.mp3'
</script>