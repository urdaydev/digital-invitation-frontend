<template>
  <section class="banner">
    <h1 class="banner__title">Galería</h1>
  </section>
  <main class="gallery">
    <GalleryCard v-for="image in images" :key="image.id" :image="image" />
  </main>
</template>

<script setup>
import GalleryCard from "../components/GalleryCard.vue";
import pic1 from "../assets/images/pic1.webp";
import pic2 from "../assets/images/pic2.webp";
import pic3 from "../assets/images/pic3.webp";
import pic4 from "../assets/images/pic4.webp";
import pic5 from "../assets/images/pic5.webp";
import pic6 from "../assets/images/pic6.webp";

const images = [
  { id: 1, card: pic1, modal: [pic1, pic2, pic3, pic4, pic5, pic6] },
  { id: 2, card: pic2, modal: [pic2, pic3, pic4, pic5, pic6, pic1] },
  { id: 3, card: pic3, modal: [pic3, pic4, pic5, pic6, pic1, pic2] },
  { id: 4, card: pic4, modal: [pic4, pic5, pic6, pic1, pic2, pic3] },
  { id: 5, card: pic5, modal: [pic5, pic6, pic1, pic2, pic3, pic4] },
  { id: 6, card: pic6, modal: [pic6, pic1, pic2, pic3, pic4, pic5] },
];
</script>

<style scoped>
.banner {
  position: relative;
  background: url("../assets/images/gallery-img.webp") no-repeat center center;
  background-size: cover;
  height: 75vh;
  display: grid;
  place-items: center;
}

.banner::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
}

.banner__title {
  position: relative;
  font-family: "Playfair Display", sans-serif;
  font-size: 4rem;
  color: white;
  text-align: center;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  max-width: var(--container);
  margin: 0 auto;
  padding: 120px 20px;
  gap: 16px;
}

@media (max-width: 768px) {
  .gallery {
    padding: 80px 20px;
  }
}
</style>
