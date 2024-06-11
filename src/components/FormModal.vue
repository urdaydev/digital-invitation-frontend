<template>
  <Teleport to="body">
    <Transition name="modal-outer">
      <div v-show="modalActive" class="modal-backdrop">
        <Transition name="modal-inner">
          <div v-if="modalActive" class="modal">
            <form @submit.prevent="handleSubmit" class="modal__form">
              <div class="modal__input-wrapper">
                <label for="fullName">
                  <i class="fa-regular fa-user"></i>
                  <span>{{ $t("form.lblName") }}</span>
                </label>
                <input
                  ref="fullNameInput"
                  v-model="fullName"
                  type="text"
                  maxlength="50"
                  id="fullName"
                  placeholder=". . ."
                />
              </div>
              <div class="modal__input-wrapper">
                <label for="message">
                  <i class="fa-regular fa-user"></i>
                  <span>{{ $t("form.lblMessage") }}</span>
                </label>
                <textarea
                  v-model="message"
                  id="message"
                  maxlength="100"
                  placeholder=". . ."
                />
              </div>
              <div class="modal__input-wrapper">
                <label for="email">
                  <i class="fa-regular fa-envelope"></i>
                  <span>{{ $t("form.lblEmail") }}</span>
                </label>
                <input
                  v-model="email"
                  type="email"
                  id="email"
                  maxlength="50"
                  placeholder=". . ."
                />
              </div>
              <div class="modal__input-wrapper">
                <label for="phoneNumber">
                  <i class="fa-solid fa-mobile-screen"></i>
                  <span>{{ $t("form.lblPhone") }}</span>
                </label>
                <input
                  v-model="phoneNumber"
                  type="text"
                  inputmode="tel"
                  id="phoneNumber"
                  maxlength="12"
                  placeholder=". . ."
                />
              </div>
              <div class="modal__button-wrapper">
                <button
                  type="button"
                  @click="$emit('close-modal')"
                  class="modal__close"
                >
                  {{ $t("form.cancel") }}
                </button>
                <button type="submit" class="modal__submit">
                  {{ $t("form.submit") }}
                </button>
              </div>
            </form>
          </div>
        </Transition>
      </div>
    </Transition>
    <Transition name="toast">
      <ToastNotification
        v-if="toast"
        :type="toast.type"
        :message="toast.message"
      />
    </Transition>
  </Teleport>
</template>

<script>
import axios from "axios";
import ToastNotification from "./ToastNotification.vue";

export default {
  components: {
    ToastNotification,
  },
  props: {
    modalActive: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      fullName: "",
      message: "",
      email: "",
      phoneNumber: "",
      toast: null,
    };
  },
  watch: {
    modalActive(val) {
      if (val) {
        this.$nextTick(() => this.$refs.fullNameInput.focus());
      }
    },
  },
  methods: {
    async handleSubmit() {
      if (!this.fullName || !this.email || !this.phoneNumber) {
        this.showToast("error", "Por favor, llena los campos necesarios.");
        return;
      }
      try {
        const response = await axios.post(`${this.api}`, {
          fullName: this.fullName,
          message: this.message,
          email: this.email,
          phoneNumber: this.phoneNumber,
        });
        console.log("Guest saved!:", response.data);
        this.resetForm();
        this.showToast("success", "¡Gracias por confirmar tu asistencia!");
        this.$emit("close-modal");
      } catch (error) {
        console.log(error.response.data);
        if (error.response && error.response.status === 409) {
          this.showToast("error", "Ya has confirmado tu asistencia.");
        } else {
          console.log(error);
        }
      }
    },
    resetForm() {
      this.fullName = "";
      this.message = "";
      this.email = "";
      this.phoneNumber = "";
    },
    showToast(type, message) {
      this.toast = {
        type: type,
        message: message,
      };
      setTimeout(() => (this.toast = null), 2000);
    },
  },
  emits: ["close-modal"],
};
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 5;
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

.modal__form textarea::placeholder {
  font-family: "Lato", sans-serif;
}

.modal__form input:hover,
.modal__form input:focus,
.modal__form textarea:hover,
.modal__form textarea:focus {
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

.modal__submit:hover,
.modal__submit:focus {
  outline-color: white;
}

.modal__close {
  padding: 12px;
  background-color: white;
  border: 1px solid var(--primary-color);
  outline: 0;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.modal__close:hover,
.modal__close:focus {
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
