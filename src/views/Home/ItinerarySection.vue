<template>
  <section class="itinerary">
    <div class="itinerary__container">
      <h2 class="itinerary__title">
        {{ $t("itinerary.title") }}
      </h2>
      <p class="itinerary__description">
        {{ $t("itinerary.subtitle") }}
      </p>
      <div class="itinerary__article-wrapper">
        <article class="itinerary__article">
          <span v-motion-roll-visible-left>11:30 AM - 01:00 PM</span>
          <div class="itinerary__text" v-motion-slide-visible-bottom>
            <h3>
              <i class="fa-solid fa-church"></i
              ><strong>{{ $t("itinerary.lbl1") }}</strong>
            </h3>
            <p>{{ $t("itinerary.text1") }}</p>
          </div>
        </article>

        <article class="itinerary__article">
          <span v-motion-roll-visible-left>01:30 PM - 03:00 PM</span>
          <div class="itinerary__text" v-motion-slide-visible-bottom>
            <h3>
              <i class="fa-solid fa-cocktail"></i
              ><strong>{{ $t("itinerary.lbl2") }}</strong>
            </h3>
            <p>{{ $t("itinerary.text2") }}</p>
          </div>
        </article>

        <article class="itinerary__article">
          <span v-motion-roll-visible-left>03:30 PM - 05:30 PM</span>
          <div class="itinerary__text" v-motion-slide-visible-bottom>
            <h3>
              <i class="fa-solid fa-utensils"></i
              ><strong>{{ $t("itinerary.lbl3") }}</strong>
            </h3>
            <p>{{ $t("itinerary.text3") }}</p>
          </div>
        </article>

        <article class="itinerary__article">
          <span v-motion-roll-visible-left>06:00 PM - 09:00 PM</span>
          <div class="itinerary__text" v-motion-slide-visible-bottom>
            <h3>
              <i class="fa-solid fa-music"></i
              ><strong>{{ $t("itinerary.lbl4") }}</strong>
            </h3>
            <p>{{ $t("itinerary.text4") }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.itinerary {
  padding: 100px 20px;
}

.itinerary__container {
  max-width: 600px;
  margin: 0 auto;
}

.itinerary__title {
  font-family: "Playfair Display", sans-serif;
  font-size: 2.5rem;
  margin-bottom: 10px;
  color: var(--primary-color);
  text-align: center;
}

.itinerary__description {
  line-height: var(--line-height-text);
  text-align: center;
  text-wrap: pretty;
  margin-bottom: 40px;
}

.itinerary__article-wrapper {
  display: grid;
  gap: 42px;
}

.itinerary__article {
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  justify-content: center;
}

.itinerary__article span {
  text-align: center;
  font-weight: bold;
}

.itinerary__text {
  margin-left: 42px;
  position: relative;
  line-height: var(--line-height-text);
}

.itinerary__text::before {
  content: "";
  position: absolute;
  left: -52px;
  top: 50%;
  width: 35px;
  height: 1px;
  background-color: var(--primary-color);
  transform: translateY(-50%);
}

.itinerary__text h3 {
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 6px;
}

.itinerary__text h3 i {
  color: var(--primary-color);
  margin-right: 8px;
}

@media (max-width: 768px) {
  .itinerary {
    padding: 60px 20px;
  }

  .itinerary__article-wrapper {
    padding: 0 20px;
    gap: 56px;
  }

  .itinerary__article {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 20px;
    text-align: center;
  }

  .itinerary__text:before {
    width: 1px;
    height: 32px;
    left: 50%;
    top: -36px;
    transform: translateX(-50%);
  }

  .itinerary__text {
    margin-left: 0;
    margin-top: 24px;
  }
}
</style>
