<template>
  <section class="hero">
    <div class="hero__container">
      <h1 class="hero__title">
        Te invitamos <br />
        a nuestra boda
      </h1>
      <p class="hero__text">Muy pronto</p>
      <CountdownTimer />
    </div>
  </section>
</template>

<script setup>
import CountdownTimer from "./CountdownTimer.vue";
</script>

<style scoped>
.hero {
  position: relative;
  background: url("../assets/images/hero-img.webp") no-repeat center center;
  background-size: cover;
  height: 100svh;
  display: grid;
  place-items: center;
  color: white;
}

.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
}

.hero__container {
  margin-top: 50px;
  position: relative;
  max-width: 800px;
  text-align: center;
}

.hero__title {
  font-family: "Playfair Display", sans-serif;
  font-size: 5.2rem;
  line-height: 6rem;
  margin-bottom: 50px;
}

.hero__text {
  font-family: "Playfair Display", sans-serif;
  font-size: 2.2rem;
  font-weight: bold;
  margin-bottom: 12px;
}

@media screen and (max-width: 768px) {
  .hero__container {
    width: 100%;
    padding: 0 20px;
  }

  .hero__title {
    font-size: 2.7rem;
    padding: 0 25px;
    line-height: 3rem;
  }

  .hero__text {
    font-size: 1.6rem;
  }
}
</style>
