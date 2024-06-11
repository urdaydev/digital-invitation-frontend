<template>
  <div class="language-wrapper">
    <button
      @click="changeLanguage('es')"
      :disabled="i18next.resolvedLanguage === 'es'"
      :class="[
        'language-button',
        { disabled: i18next.resolvedLanguage === 'es' },
      ]"
    >
      {{ $t("es") }}
    </button>
    |
    <button
      @click="changeLanguage('en')"
      :disabled="i18next.resolvedLanguage === 'en'"
      :class="[
        'language-button',
        { disabled: i18next.resolvedLanguage === 'en' },
      ]"
    >
      {{ $t("en") }}
    </button>
  </div>
</template>

<script setup>
import { useTranslation } from "i18next-vue";

const { i18next } = useTranslation();

const changeLanguage = (lang) => {
  i18next.changeLanguage(lang);
  console.log(i18next.resolvedLanguage);
};
</script>

<style scoped>
.language-wrapper {
  position: fixed;
  z-index: 4;
  bottom: 0;
  left: 0;
  display: flex;
  gap: 12px;
  background-color: var(--primary-color);
  padding: 12px 16px;
  gap: 12px;
  outline: 1px solid var(--primary-color);
  outline-offset: 3px;
}

.language-button {
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;
  color: white;
}

.language-button:hover {
  color: var(--primary-color-darker);
}

.language-button.disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.language-button.disabled:hover {
  color: white;
}

@media (max-width: 768px) {
  .language-wrapper {
    left: initial;
    right: 0;
  }
}
</style>
