<template>
  <div @click="openModal" class="gallery-card">
    <div class="gallery-card__image-wrapper">
      <img :src="image.card" :alt="image.title" class="gallery-card__image" />
    </div>
  </div>
  <GalleryModal
    :image="image"
    :modalActive="modalActive"
    @close-modal="closeModal"
  />
</template>

<script setup>
import { ref } from "vue";
import GalleryModal from "./GalleryModal.vue";
import { Howl } from "howler";
import song from "../assets/music/song.mp3";

defineProps({
  image: {
    type: Object,
    required: true,
  },
});

/* Toggle Modal */
const modalActive = ref(false);

const openModal = () => {
  modalActive.value = true;
  playMusic();
};

const closeModal = () => {
  modalActive.value = false;
  stopMusic();
};

/* Music Player */
const music = ref(null);

const playMusic = () => {
  music.value = new Howl({
    src: song,
    volume: 0.0,
    onend: () => {
      playMusic();
    },
  });
  music.value.play();
  music.value.fade(0.0, 0.5, 500);
};

const stopMusic = () => {
  music.value.fade(0.5, 0.0, 500);
  setTimeout(() => {
    music.value.stop();
  }, 500);
};
</script>

<style scoped>
.gallery-card {
  border: 1px solid #ddd;
  padding: 6px;
  overflow: hidden;
  cursor: pointer;
  transition: border-color 0.2s ease;
}

.gallery-card:hover {
  border-color: var(--primary-color);
}

.gallery-card__image-wrapper {
  overflow: hidden;
  height: 100%;
}

.gallery-card__image {
  max-width: 100%;
  height: 100%;
  transition: transform 0.5s ease;
}

.gallery-card:hover .gallery-card__image {
  transform: scale(1.1) rotate(-2deg);
}
</style>
