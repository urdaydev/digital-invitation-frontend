<template>
  <Teleport to="body">
    <Transition name="modal-outer">
      <div v-show="modalActive" class="modal-backdrop">
        <Transition name="modal-inner">
          <div v-if="modalActive" class="modal">
            <form @submit.prevent="handleSubmit" class="modal__form">
              <div class="modal__input-wrapper">
                <label for="name">
                  <i class="fa-regular fa-user"></i>
                  <span>Escribe tu nombre:</span>
                </label>
                <input
                  v-model="fullName"
                  type="text"
                  id="name"
                  placeholder="Nombre"
                  required
                />
              </div>
              <div class="modal__input-wrapper">
                <label for="message">
                  <i class="fa-regular fa-user"></i>
                  <span>Escribe tu mensaje:</span>
                </label>
                <textarea
                  v-model="message"
                  id="message"
                  placeholder="Tu mensaje"
                />
              </div>
              <div class="modal__input-wrapper">
                <label for="email">
                  <i class="fa-regular fa-envelope"></i>
                  <span>Escribe tu email:</span>
                </label>
                <input
                  v-model="email"
                  type="email"
                  id="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div class="modal__input-wrapper">
                <label for="phone">
                  <i class="fa-solid fa-mobile-screen"></i>
                  <span>Escribe tu teléfono:</span>
                </label>
                <input
                  v-model="phoneNumber"
                  type="text"
                  id="phone"
                  placeholder="Teléfono"
                  required
                />
              </div>
              <div class="modal__button-wrapper">
                <button
                  type="button"
                  @click="$emit('close-modal')"
                  class="modal__close"
                >
                  Cancelar
                </button>
                <button type="submit" class="modal__submit">Confirmar</button>
              </div>
            </form>
          </div>
        </Transition>
      </div>
    </Transition>
    <Transition name="toast">
      <ToastNotification v-if="errorMessage" />
    </Transition>
  </Teleport>
</template>

<script setup>
import axios from "axios";
import { defineEmits, ref } from "vue";
import ToastNotification from "./ToastNotification.vue";

defineEmits(["close-modal"]);
defineProps({
  modalActive: {
    type: Boolean,
    required: true,
  },
});

const fullName = ref("");
const message = ref("");
const email = ref("");
const phoneNumber = ref("");
const errorMessage = ref(false);

const handleSubmit = async () => {
  try {
    const response = await axios.post("https://partylistpro.com/api/guests", {
      fullName: fullName.value,
      message: message.value,
      email: email.value,
      phoneNumber: phoneNumber.value,
    });

    console.log("Guest saved!:", response.data);
    resetForm();
  } catch (error) {
    if (error.response && error.response.status === 409) {
      errorMessage.value = true;
      setTimeout(() => (errorMessage.value = false), 3000);
    } else {
      console.log(error);
    }
  }
};

const resetForm = () => {
  fullName.value = "";
  message.value = "";
  email.value = "";
  phoneNumber.value = "";
};
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.3);
  display: grid;
  place-content: center;
}

.modal {
  position: relative;
  width: 500px;
  padding: 60px 48px;
  background-color: white;
  outline: 1px solid var(--primary-color);
  outline-offset: -6px;
}

.modal__form {
  display: grid;
  gap: 20px;
}

.modal__input-wrapper {
  display: grid;
}

.modal__input-wrapper label i {
  text-align: center;
  width: 20px;
}

.modal__input-wrapper label span {
  padding-left: 4px;
}

.modal__form label {
  padding-bottom: 6px;
}

.modal__form input {
  outline: none;
  padding: 12px;
  border: 1px solid #ccc;
  font-family: "Lato", sans-serif;
}

.modal__form textarea {
  font-family: "Lato", sans-serif;
  outline: none;
  padding: 12px;
  border: 1px solid #ccc;
  resize: none;
}

.modal__form textarea:hover {
  border-color: var(--primary-color);
}

.modal__form textarea::placeholder {
  font-family: "Lato", sans-serif;
}

.modal__form input:hover,
.modal__form input:focus {
  border-color: var(--primary-color);
}

.modal__button-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}

.modal__submit {
  background-color: var(--primary-color);
  color: white;
  border: none;
  cursor: pointer;
  outline: 1px solid transparent;
  outline-offset: -3px;
  transition: outline-color 0.2s ease;
}

.modal__submit:hover {
  outline-color: white;
}

.modal__close {
  padding: 12px;
  background-color: white;
  border: 1px solid var(--primary-color);
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.modal__close:hover {
  background-color: var(--primary-color);
  color: white;
}

/* Media Quearies */

@media (max-width: 768px) {
  .modal {
    width: 80vw;
    padding: 48px 36px;
  }
}

/* Modal Transitions */
.modal-outer-enter-from,
.modal-outer-leave-to {
  opacity: 0;
}
.modal-outer-enter-active,
.modal-outer-leave-active {
  transition: opacity 0.3s ease;
}

.modal-inner-enter-from {
  opacity: 0;
  transform: translateY(-24px);
}
.modal-inner-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
.modal-inner-enter-active,
.modal-inner-leave-active {
  transition: all 0.3s ease;
}

/* Toast Notification Transitions */
.toast-enter-from {
  opacity: 0;
  transform: translateY(-60px);
}
.toast-enter-active {
  transition: all 0.3s ease;
}
.toast-leave-to {
  opacity: 0;
  transform: translateY(-60px);
}
.toast-leave-active {
  transition: all 0.3s ease;
}
</style>
