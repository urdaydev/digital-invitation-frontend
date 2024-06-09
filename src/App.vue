<template>
  <Navbar />
  <RouterView v-slot="{ Component }">
    <transition name="fade" :duration="250" mode="out-in">
      <keep-alive>
        <div :key="$route.path">
          <component :is="Component" />
        </div>
      </keep-alive>
    </transition>
  </RouterView>
  <Footer />
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import { RouterView } from "vue-router";
</script>

<style scoped>
/* Page Transitions */

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
