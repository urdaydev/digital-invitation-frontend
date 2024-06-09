<template>
  <section class="banner">
    <main class="banner__container">
      <h1 class="banner__title">Nuestra historia</h1>
      <div class="banner__video">
        <iframe
          src="https://www.youtube.com/embed/yvgMclz88Pw"
          title="Groom Knew He Would Marry Her Before They Ever Met - Love at First Sight | Emotional Wedding Film"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </main>
  </section>
</template>

<style scoped>
.banner {
  position: relative;
  background: url("../assets/images/story-img.webp") no-repeat center center;
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
  position: fixed;
}

.banner__title {
  font-family: "Playfair Display", sans-serif;
  font-size: 2rem;
  margin-top: 32px;
  margin-bottom: 16px;
  text-align: center;
  color: white;
}

.banner__video {
  width: 1200px;
  border-bottom: 1px solid white;
  padding-bottom: 4px;
}

.banner__video iframe {
  width: 100%;
  height: 500px;
}

@media screen and (max-width: 768px) {
  .banner__video {
    width: 85vw;
  }
}
</style>
