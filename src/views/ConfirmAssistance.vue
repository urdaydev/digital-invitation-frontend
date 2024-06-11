<template>
  <section class="banner">
    <main class="banner__container">
      <h1 class="banner__title">{{ $t("confirm.title") }}</h1>
      <div class="banner__options-wrapper">
        <button @click="toggleModal" class="banner__option">
          <i class="fa-solid fa-pen-nib"></i>
          <span>{{ $t("confirm.op1") }}</span>
        </button>
        <a
          href="https://wa.me/51938318881?text=¡Hola! Asistiré a tu boda. Muchas gracias por la invitación. 💛🤗"
          target="_blank"
          class="banner__option"
        >
          <i class="fa-brands fa-whatsapp"></i>
          <span>{{ $t("confirm.op2") }}</span>
        </a>
        <a
          href="mailto:diegourday@outlook.com.pe?subject=Confirmación de mi Asistencia a la boda.&body=¡Hola! Asistiré a tu boda. Muchas gracias por la invitación. 💛🤗"
          class="banner__option"
        >
          <i class="fa-regular fa-envelope"></i>
          <span>{{ $t("confirm.op3") }}</span>
        </a>
      </div>
      <div class="banner__message">
        <p>{{ $t("confirm.msg") }}</p>
        <p>
          <span>{{ $t("confirm.ty") }}</span
          ><br />
          <i class="fa-solid fa-heart"></i>
        </p>
        <RouterLink :to="{ name: 'confirmedGuests' }" class="banner__info">
          {{ $t("confirm.see") }}
        </RouterLink>
      </div>
    </main>
  </section>
  <FormModal :modalActive="modalActive" @close-modal="toggleModal" />
</template>

<script setup>
import { ref } from "vue";
import FormModal from "../components/FormModal.vue";

const modalActive = ref(false);
const toggleModal = () => {
  modalActive.value = !modalActive.value;
};
</script>

<style scoped>
.banner {
  position: relative;
  background: url("../assets/images/confirm-img.webp") no-repeat center center;
  background-size: cover;
  height: 100vh;
  display: grid;
  place-items: center;
}

.banner::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
}

.banner__container {
  margin: 90px 30px 0 30px;
  position: relative;
  padding: 50px 40px 20px;
  text-align: center;
  background-color: white;
  outline: 1px solid white;
  outline-offset: 4px;
  backdrop-filter: blur(5px);
  border: 1px solid white;
}

.banner__title {
  font-family: "Playfair Display", sans-serif;
  font-size: 2rem;
  margin-bottom: 50px;
}

.banner__options-wrapper {
  display: grid;
  justify-content: center;
  gap: 20px;
  margin-bottom: 36px;
}

.banner__option {
  border: 1px solid var(--primary-color);
  padding: 16px 28px;
  font-size: 1.2rem;
  background-color: white;
  position: relative;
  z-index: 1;
  cursor: pointer;
  text-decoration: none;
  color: var(--secondary-color);
  outline: 1px solid transparent;
  outline-offset: 3px;
  transition: background-color 0.2s ease, outline-color 0.2s ease;
}

.banner__option:hover {
  background-color: var(--primary-color);
  outline-color: var(--primary-color);
}

span,
i {
  transition: color 0.2s ease;
}

.banner__option:hover span,
.banner__option:hover i {
  color: white;
}

.banner__option i {
  margin-right: 8px;
  color: var(--primary-color);
}

.banner__message {
  display: grid;
  gap: 20px;
  margin-bottom: 20px;
}

.banner__message span {
  font-weight: bold;
}

.banner__message i {
  color: var(--primary-color);
  margin-top: 5px;
}

.banner__info {
  color: var(--primary-color);
  text-decoration: none;
}

.banner__info:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .banner {
    height: 95vh;
  }

  .banner__container {
    margin-top: 70px;
  }
}
</style>
