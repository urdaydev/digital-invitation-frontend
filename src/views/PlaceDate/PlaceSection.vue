<template>
  <section class="place">
    <div class="place__article-wrapper">
      <article
        class="place__article"
        :class="{ selected: selectedMap === 'ceremony' }"
        @click="selectMap('ceremony')"
      >
        <i class="fa-solid fa-church"></i>
        <h2>La ceremonia</h2>
        <p>11:30 AM - 01:00 PM</p>
        <p>Iglesia Señor de Luren</p>
        <p>Av Ayacucho 1057, Ica 11001</p>
      </article>
      <article
        class="place__article"
        :class="{ selected: selectedMap === 'reception' }"
        @click="selectMap('reception')"
      >
        <i class="fa-solid fa-champagne-glasses"></i>
        <h2>La recepción</h2>
        <p>03:00 PM - 05:00 PM</p>
        <p>Hotel Real Ica</p>
        <p>Av de los Maestros 422, Ica 11004</p>
      </article>
    </div>
    <div class="place__map">
      <div v-show="!selectedMap" class="place__select-wrap">
        <i class="fa-solid fa-map-location-dot"></i>
        <p>Selecciona una dirección para ver la ubicación en el mapa.</p>
      </div>
      <iframe
        v-show="selectedMap === 'ceremony'"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3870.1109073502344!2d-75.72818492486289!3d-14.070627582878592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9110e29758412403%3A0x2e39885d69e235bb!2sSantuario%20del%20Se%C3%B1or%20de%20Luren!5e0!3m2!1ses-419!2spe!4v1717881081845!5m2!1ses-419!2spe"
        style="border: 0"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <iframe
        v-show="selectedMap === 'reception'"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3870.1014536664666!2d-75.74203702486285!3d-14.071185982890851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9110e2eb73eefb4f%3A0x4987a5c3cd6e5c21!2sReal%20Hotel%20Ica!5e0!3m2!1ses-419!2spe!4v1717881011844!5m2!1ses-419!2spe"
        style="border: 0"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const selectedMap = ref(null);

const selectMap = (map) => {
  selectedMap.value = map;
};
</script>

<style scoped>
.place {
  display: grid;
  max-width: var(--container);
  margin: 0 auto;
  padding: 80px 20px 120px;
}

.place__article-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 1px solid var(--primary-color);
}

.place__article {
  padding: 30px;
  text-align: center;
  display: grid;
  gap: 10px;
  cursor: pointer;
  outline: 1px solid transparent;
  outline-offset: -6px;
  transition-property: background-color, color, outline-color;
  transition-duration: 0.2s;
  transition-timing-function: ease;
}

.place__article:first-child {
  border-right: 1px solid var(--primary-color);
}

.place__article:hover {
  outline-color: var(--primary-color);
}

.place__article i {
  font-size: 4rem;
  color: var(--primary-color);
}

.place__article.selected {
  background-color: var(--primary-color);
  color: white;
}

.place__article.selected i {
  color: white;
}

.place__map {
  display: grid;
}

.place__select-wrap {
  margin-top: 70px;
  text-align: center;
}

.place__select-wrap p {
  padding: 0 20px;
  line-height: var(--line-height-text);
}

.place__map i {
  color: var(--primary-color);
  font-size: 4rem;
  text-align: center;
  margin-bottom: 16px;
}

.place__map iframe {
  width: 100%;
  height: 600px;
  box-shadow: 0 6px 12px -10px var(--primary-color);
}

@media (max-width: 768px) {
  .place {
    padding: 40px 20px 80px;
  }

  .place__article-wrapper {
    grid-template-columns: 1fr;
  }

  .place__article:first-child {
    border-right: none;
    border-bottom: 1px solid var(--primary-color);
  }
}
</style>
