<template>
  <footer>
    <LanguageSwitcher />
    <p>
      &copy; {{ $t("footer.dev") }}
      <a :href="DiegoCV" target="_blank">Diego Urday</a>
      {{ $t("footer.to") }}
      <a href="https://rumba77.com" target="_blank">Rumba77</a>
      &nbsp;|&nbsp;
      <i class="fa-regular fa-heart"></i>
    </p>
    <div class="footer__github">
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
  </footer>
</template>

<script setup>
import LanguageSwitcher from "./LanguageSwitcher.vue";
import DiegoCV from "../assets/pdf/diegourday-cv.pdf";
</script>

<style scoped>
footer {
  background-color: var(--primary-color);
  color: white;
  text-align: center;
  padding: 16px 0;
  width: 100%;
  position: relative;
}

footer a {
  text-decoration: none;
  color: var(--primary-color-darker);
}

footer a:hover {
  text-decoration: underline;
}

footer a i {
  color: white;
}

footer a i:hover {
  color: var(--primary-color-darker);
}

.footer__github {
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  gap: 10px;
  font-size: 1.4rem;
}

@media (max-width: 768px) {
  footer {
    font-size: 0.9rem;
  }
  .footer__github {
    display: none;
  }
}
</style>
