<template>
  <header :class="{ 'scrolled-nav': scrolledNav }">
    <nav>
      <ul v-show="!mobile">
        <li>
          <RouterLink :to="{ name: 'story' }">{{ $t("nav.story") }}</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'placeAndDate' }">{{
            $t("nav.place")
          }}</RouterLink>
        </li>
        <li>
          <RouterLink id="nav__names" :to="{ name: 'home' }">
            Lucía & Antonio
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'gallery' }">{{
            $t("nav.gallery")
          }}</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'confirmAssistance' }" class="nav__confirm">
            {{ $t("nav.confirm") }}
          </RouterLink>
        </li>
      </ul>
      <div @click="toggleMobileNav" class="icon" v-show="mobile">
        <i class="fa-solid fa-plus" :class="{ 'icon-active': mobileNav }"></i>
      </div>

      <RouterLink id="nav__names--mobile" :to="{ name: 'home' }">
        Lucía & Antonio
      </RouterLink>
      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav">
          <li>
            <RouterLink :to="{ name: 'story' }">
              <i class="fa-solid fa-heart"></i>
              <span>{{ $t("nav.story") }}</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'placeAndDate' }">
              <i class="fa-solid fa-location-dot"></i>
              <span>{{ $t("nav.place") }}</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'gallery' }">
              <i class="fa-solid fa-images"></i>
              <span>{{ $t("nav.gallery") }}</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink
              :to="{ name: 'confirmAssistance' }"
              id="dropdown-nav__confirm"
            >
              <i class="fa-solid fa-hand"></i>
              <span>{{ $t("nav.confirm") }}</span>
            </RouterLink>
          </li>
          <div class="mobile__github">
            <a
              href="https://github.com/diegourday/digital-invitation-frontend/tree/master"
              target="_blank"
            >
              <i class="fa-brands fa-github"></i>
            </a>
            <a
              href="https://github.com/diegourday/digital-invitation-backend/tree/master"
              target="_blank"
            >
              <i class="fa-brands fa-github"></i>
            </a>
          </div>
        </ul>
      </transition>
    </nav>
  </header>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import { RouterLink, useRouter } from "vue-router";

const scrolledNav = ref(false);
const mobile = ref(true);
const mobileNav = ref(false);
const windowWidth = ref(false);

const toggleMobileNav = () => {
  mobileNav.value = !mobileNav.value;
};

const checkScreen = () => {
  windowWidth.value = window.innerWidth;
  if (windowWidth.value <= 768) {
    mobile.value = true;
    return;
  }
  mobile.value = false;
  mobileNav.value = false;
  return;
};

const updateScroll = () => {
  scrolledNav.value = window.scrollY > 0;
};

const router = useRouter();

onMounted(() => {
  window.addEventListener("resize", checkScreen);
  checkScreen();

  window.addEventListener("scroll", updateScroll);

  router.beforeEach((to, from, next) => {
    mobileNav.value = false;
    next();
  });
});

onBeforeUnmount(() => {
  router.beforeEach(() => {});
});
</script>

<style scoped>
header {
  position: fixed;
  z-index: 2;
  width: 100%;
  color: white;
  transition: background-color 0.3s ease;
}

nav {
  padding: 32px 0;
  transition: all 0.3s ease;
  max-width: 800px;
  margin: 0 auto;
}

nav ul {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
}

nav ul li {
  list-style: none;
}

nav ul li a {
  color: white;
  text-decoration: none;
  font-size: 0.8rem;
  transition: color 0.3s ease;
  padding: 8px 0;
  position: relative;
}

nav ul li:not(:nth-child(3)):not(:last-child) a::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 1px;
  left: 0;
  bottom: 0;
  background-color: var(--primary-color);
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.3s ease;
}

nav ul li:not(:nth-child(3)):not(:last-child) a:hover::after {
  transform: scaleX(1);
}

.icon {
  display: grid;
  place-items: center;
  position: fixed;
  bottom: 60px;
  right: 20px;
  background-color: var(--primary-color);
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.icon i {
  cursor: pointer;
  font-size: 1.8rem;
  transition: all 0.8s ease;
}

.icon-active {
  transform: rotate(180deg);
}

#nav__names {
  font-family: "Tangerine", sans-serif;
  font-size: 2.5rem;
  transition: color 0.3s ease;
}

#nav__names:hover {
  color: var(--primary-color);
}

.nav__confirm {
  color: white;
  padding: 12px;
  border: 1px solid var(--primary-color);
  display: block;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.nav__confirm:hover {
  background-color: var(--primary-color);
  color: white;
}

.dropdown-nav {
  position: fixed;
  display: grid;
  justify-content: start;
  align-content: start;
  gap: 20px;
  padding: 60px 0 0 20px;
  width: 250px;
  height: 100%;
  background-color: white;
  top: 0;
  left: 0;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}

.dropdown-nav li a {
  color: black;
  font-size: 1rem;
  padding: 16px;
  display: block;
  transition: background-color 0.2s ease;
}

.dropdown-nav li a i {
  width: 15px;
  text-align: center;
  margin-right: 10px;
  color: var(--primary-color);
}

#dropdown-nav__confirm {
  padding: 16px;
  border: 1px solid var(--primary-color);
}

#nav__names--mobile {
  display: none;
  font-family: "Tangerine", sans-serif;
  font-size: 3rem;
  color: white;
  text-decoration: none;
  text-align: center;
  transition: color 0.3s ease;
}

.mobile__github {
  position: absolute;
  left: 20px;
  bottom: 20px;
  display: flex;
  gap: 10px;
  font-size: 1.6rem;
  color: var(--primary-color);
}

.mobile__github a i {
  color: var(--primary-color);
}

/* Style Active Routes */
.router-link-active {
  color: var(--primary-color);
}

.dropdown-nav .router-link-active {
  background-color: var(--primary-color);
  color: white;
}
.dropdown-nav .router-link-active i {
  color: white;
}

/* Scroll Animation */

.scrolled-nav {
  background-color: white;
}

.scrolled-nav nav {
  padding: 12px 0;
}

.scrolled-nav a {
  color: black;
}

.scrolled-nav #nav__names {
  color: var(--primary-color);
}

/* Animation Properties */

.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: 0.5s ease all;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to {
  transform: translateX(-250px);
}

.mobile-nav-enter-to {
  transform: translateX(0);
}

/* Media Queries */

@media (min-width: 1140px) {
  nav {
    max-width: 1140px;
  }
}

@media (max-width: 768px) {
  #nav__names--mobile {
    display: block;
  }

  .scrolled-nav nav {
    padding: 8px 0;
  }

  .scrolled-nav #nav__names--mobile {
    color: var(--primary-color);
  }
}
</style>
