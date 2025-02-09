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
};

const closeModal = () => {
  modalActive.value = false;
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
  transform: scale(1.1);
}
</style>
