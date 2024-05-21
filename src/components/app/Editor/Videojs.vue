<template>
  <video class="video-js" controls playsinline preload="auto" crossorigin="anonymous" ref="videoEl">
    <source :src="currentSrc">

    <p class="vjs-no-js">
      Para ver este vídeo, ative o JavaScript e considere atualizar para um navegador que<a
        href="https://videojs.com/html5-video-support/" target="_blank">suporta vídeo HTML5</a>
    </p>
  </video>
</template>
<script setup>
/**
 * VideoJs component
 * @see https://github.com/videojs/video.js
 */
import videojs from './Video.js'
import { ref, onMounted, onUnmounted } from 'vue'
// declare a ref to hold the element reference
// the name must match template ref value
const videoEl = ref(null)
let player;
const props = defineProps({
  src: {
    type: String,
    required: true
  },
  poster: String,
  subtitleUrls: Object,
  mandatory: Boolean,
})
const emit = defineEmits(['loadeddata', 'end'])
const currentSrc = ref(props.src)
/**
 * Manually setup video.js player
 */
onMounted(() => {
  const options = {
    fluid: true,
    poster: props.poster,
    playbackRates: [0.5, 0.75, 1, 1.25, 1.5]
  };
  player = videojs(videoEl.value, options);

  player.on('loadeddata', (e) => emit('loadeddata', e));
  player.on('ended', function () {
    emit('end', props.src);
    if (player.isFullscreen()) {
      player.exitFullscreen();
    }
  });
})
/**
 * Destroys the video player and does any necessary cleanup.
 * @see https://docs.videojs.com/player
 */
onUnmounted(() => {
  if (player) {
    player.dispose();
  }
})
</script>