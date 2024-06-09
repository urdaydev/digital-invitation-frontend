<template>
  <div class="countdown">
    <div class="countdown__item">
      <p class="countdown__value">{{ days }}</p>
      <p>Días</p>
    </div>
    <div class="countdown__item">
      <p class="countdown__value">{{ hours }}</p>
      <p>Horas</p>
    </div>
    <div class="countdown__item">
      <p class="countdown__value">{{ minutes }}</p>
      <p>Minutos</p>
    </div>
    <div class="countdown__item">
      <p class="countdown__value">{{ seconds }}</p>
      <p>Segundos</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// Fecha y hora objetivo
const targetDate = new Date("2024-07-20T23:59:59").getTime();

const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);

const updateCountdown = () => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    days.value = 0;
    hours.value = 0;
    minutes.value = 0;
    seconds.value = 0;
    return;
  }

  days.value = Math.floor(distance / (1000 * 60 * 60 * 24));
  hours.value = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  seconds.value = Math.floor((distance % (1000 * 60)) / 1000);
};

let interval = null;

onMounted(() => {
  updateCountdown();
  interval = setInterval(updateCountdown, 1000);
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<style scoped>
.countdown {
  display: grid;
  grid-template-columns: repeat(4, auto);
  justify-content: center;
}

.countdown__item {
  padding: 0 30px;
  position: relative;
  display: grid;
  justify-content: center;
}

.countdown__item:not(:last-child)::after {
  content: "";
  position: absolute;
  right: 0;
  top: 15%;
  bottom: 15%;
  width: 1px;
  background-color: white;
  opacity: 0.5;
}

.countdown__value {
  font-size: 3rem;
}

@media screen and (max-width: 768px) {
  .countdown {
    grid-template-columns: repeat(2, auto);
    row-gap: 15px;
  }

  .countdown__item {
    padding: 0 10px;
  }

  .countdown__item:not(:last-child)::after {
    display: none;
  }

  .countdown__value {
    font-size: 2.5rem;
  }
}
</style>
