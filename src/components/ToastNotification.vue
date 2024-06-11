<template>
  <p class="toast" :style="{ backgroundColor: toastColor }">
    <i :class="`fa-solid ${toastIcon}`"></i>&nbsp;
    {{ message }}
  </p>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  type: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const toastColors = {
  error: "#e14d45",
  warning: "#ed991d",
  success: "#2ecc71",
  default: "#3c90d1",
};

const toastIcons = {
  error: "fa-times",
  warning: "fa-exclamation",
  success: "fa-check",
  default: "fa-info",
};

const toastColor = computed(
  () => toastColors[props.type] || toastColors.default
);
const toastIcon = computed(() => toastIcons[props.type] || toastIcons.default);
</script>

<style scoped>
.toast {
  position: fixed;
  top: 24px;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 4;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  text-align: center;
  width: 400px;
  padding: 20px 24px;
  color: white;
  font-weight: bold;
}

@media (max-width: 768px) {
  .toast {
    top: 0;
    width: 100%;
  }
}
</style>
