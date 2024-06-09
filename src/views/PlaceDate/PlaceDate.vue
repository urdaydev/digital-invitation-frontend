<template>
  <section class="banner">
    <h1 class="banner__title">¿Dónde y Cuándo?</h1>
  </section>
  <DateSection />
  <PlaceSection />
</template>

<script setup>
import DateSection from "../PlaceDate/DateSection.vue";
import PlaceSection from "../PlaceDate/PlaceSection.vue";
</script>

<style scoped>
.banner {
  position: relative;
  background: url("../../assets/images/placedate-img.webp") no-repeat center
    center;
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
  font-size: 3.5rem;
  color: white;
  text-align: center;
}
</style>
