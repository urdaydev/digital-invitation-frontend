<template>
  <section class="banner">
    <h1 class="banner__title">{{ $t("confirmGuests.title") }}</h1>
  </section>
  <main class="guests">
    <i class="fa-solid fa-users"></i>
    <div class="guests__wrapper">
      <article v-for="guest in guests" :key="guest.id" class="guest">
        <i class="fa-solid fa-heart"></i>
        <h2>{{ guest.fullName }}</h2>
      </article>
    </div>
  </main>
</template>

<script>
/* Options Api used because of it's using the global variable "api" */
import axios from "axios";

export default {
  data() {
    return {
      guests: [],
    };
  },
  methods: {
    async getGuests() {
      const response = await axios.get(`${this.api}`);
      this.guests = response.data;
    },
  },
  mounted() {
    this.getGuests();
  },
};
</script>

<style scoped>
.banner {
  position: relative;
  background: url("../assets/images/confirmguests-img.webp") no-repeat center
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
  font-size: 4rem;
  color: white;
  text-align: center;
}

.guests {
  display: grid;
  max-width: var(--container);
  min-height: 650px;
  margin: 0 auto;
  padding: 100px 20px;
  justify-content: center;
}

.guests > i {
  font-size: 4rem;
  color: var(--primary-color);
  text-align: center;
  margin-bottom: 28px;
}

.guests__wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 12px;
  column-gap: 16px;
}

.guest {
  border: 1px solid var(--primary-color);
  padding: 16px 20px;
  background-color: white;
}

.guest:hover {
  background-color: var(--primary-color);
  color: white;
}

.guest:hover i {
  color: white;
}

.guest {
  display: flex;
  align-items: center;
  gap: 14px;
}

.guest i {
  color: var(--primary-color);
}

.guest h2 {
  font-family: "Playfair Display", sans-serif;
  font-size: 1.05rem;
}

@media (max-width: 768px) {
  .banner__title {
    font-size: 3rem;
  }

  .guests {
    padding: 60px 20px;
  }

  .guests__wrapper {
    grid-template-columns: 1fr;
  }

  .guest h2 {
    font-size: 1rem;
  }
}
</style>
