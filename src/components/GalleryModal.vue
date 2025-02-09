<template>
  <Teleport to="body">
    <Transition name="modal-outer">
      <div v-if="modalActive" class="modal-backdrop">
        <Transition name="modal-inner">
          <div v-if="modalActive" class="modal">
            <img
              :src="image.modal[imageIndex]"
              :alt="image.id"
              class="modal__image"
            />
            <div class="modal__button-wrapper">
              <button @click="previousImage" class="modal__previous">
                <i class="fa-solid fa-chevron-left"></i>
              </button>
              <button @click="togglePlayPause">
                <i v-if="isPlaying" class="fa-regular fa-circle-pause"></i>
                <i v-else class="fa-regular fa-circle-play"></i>
              </button>
              <button @click="nextImage" class="modal__next">
                <i class="fa-solid fa-chevron-right"></i>
              </button>
            </div>
            <button @click="$emit('close-modal')" class="modal__close">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { onUnmounted, ref, watch } from "vue";
import { Howl } from "howler";
import song from "../assets/music/song.mp3";

defineEmits(["close-modal"]);
const props = defineProps({
  modalActive: {
    type: Boolean,
    required: true,
  },
  image: {
    type: Object,
    required: true,
  },
});

/* Music Player */
const music = ref(null);
let isPlaying = ref(false);

const createMusic = () => {
  if (!music.value) {
    music.value = new Howl({
      src: song,
      volume: 0.0,
      onplay: () => {
        music.value.fade(0.0, 0.5, 500);
      },
    });
  }
};

const togglePlayPause = () => {
  createMusic();
  isPlaying.value = !isPlaying.value;
  if (isPlaying.value) {
    music.value.play();
  } else {
    music.value.pause();
  }
};

watch(
  () => props.modalActive,
  (val) => {
    if (!val && music.value) {
      music.value.fade(0.5, 0.0, 500);
      music.value.once("fade", () => {
        music.value.stop();
        music.value = null;
        isPlaying.value = false;
      });
    }
  }
);

/* Gallery Function */
let imageIndex = ref(0);

const fadeImage = (callback) => {
  const imgElement = document.querySelector(".modal__image");
  imgElement.classList.add("fade-out");

  imgElement.addEventListener(
    "transitionend",
    () => {
      callback();
      imgElement.classList.remove("fade-out");
    },
    { once: true }
  );
};

const previousImage = () => {
  fadeImage(() => {
    imageIndex.value =
      (imageIndex.value - 1 + props.image.modal.length) %
      props.image.modal.length;
  });
};

const nextImage = () => {
  fadeImage(() => {
    imageIndex.value = (imageIndex.value + 1) % props.image.modal.length;
  });
};
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.7);
  display: grid;
  place-content: center;
}

.modal {
  position: relative;
  max-width: 1000px;
  height: 90vh;
  margin: 16px;
}

.modal__image {
  max-width: 100%;
  height: 100%;
  outline: 1px solid white;
  outline-offset: -5px;
  transition: opacity 0.4s ease;
  opacity: 1;
}

.modal__image.fade-out {
  opacity: 0;
}

.modal__button-wrapper {
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  gap: 16px;
}

.modal__button-wrapper button {
  background: none;
  border: none;
  padding: 20px 16px;
  cursor: pointer;
  color: white;
  font-size: 1.8rem;
  transition: transform 0.5s ease;
}

.modal__previous:active {
  transform: translateX(-8px);
}

.modal__next:active {
  transform: translateX(8px);
}

.modal__close {
  position: absolute;
  bottom: 0;
  right: -30px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.8rem;
  color: white;
}

@media (max-width: 768px) {
  .modal {
    height: auto;
  }

  .modal__button-wrapper {
    bottom: -65px;
  }

  .modal__close {
    right: 6px;
    bottom: -45px;
  }
}

/* Transitions */

.modal-outer-enter-active,
.modal-outer-leave-active {
  transition: opacity 0.3s ease;
}

.modal-outer-enter-from,
.modal-outer-leave-to {
  opacity: 0;
}

.modal-inner-enter-active {
  transition: all 0.3s ease 0.2s;
}

.modal-inner-leave-active {
  transition: all 0.3s ease;
}

.modal-inner-enter-from {
  opacity: 0;
  transform: scale(0.9);
}

.modal-inner-leave-to {
  transform: scale(0.9);
}
</style>
