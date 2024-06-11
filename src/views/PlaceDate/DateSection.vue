<template>
  <section class="date">
    <div>
      <h2 class="date__title">{{ $t("place.subtitle") }}</h2>
      <p class="date__date">- {{ $t("place.date") }} -</p>
      <p class="date__description">
        {{ $t("place.text1") }}
      </p>
      <p class="date__hope">
        {{ $t("place.text2") }}
      </p>
    </div>
    <div class="date__calendar">
      <i class="fa-regular fa-calendar-days"></i>
      <p>{{ $t("place.text3") }}</p>
      <a
        class="date__button"
        href="https://calendar.app.google/gZvjn84nJYd4imha9"
        target="_blank"
        >{{ $t("place.add") }}</a
      >
    </div>
  </section>
</template>

<style scoped>
.date {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  max-width: var(--container);
  margin: 0 auto;
  padding: 80px 40px 0;
}

.date__title {
  font-family: "Playfair Display", sans-serif;
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.date__date {
  font-size: 1.3rem;
  color: var(--primary-color);
  margin-bottom: 24px;
}

.date__description {
  margin-bottom: 24px;
  line-height: var(--line-height-text);
  text-wrap: pretty;
}

.date__hope {
  line-height: var(--line-height-text);
  text-wrap: pretty;
}

.date__calendar {
  display: grid;
  place-items: center;
  align-content: center;
  gap: 16px;
  text-align: center;
}

.date__calendar p {
  line-height: 1.5;
}

.date__calendar i {
  font-size: 5rem;
  color: var(--primary-color);
}

.date__button {
  display: inline-block;
  padding: 12px 24px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  text-decoration: none;
  font-weight: 700;
  outline: 1px solid transparent;
  outline-offset: 3px;
  transition: transform 0.2s ease, outline-color 0.2s ease;
}

.date__button:hover {
  transform: scale(1.05);
  outline-color: var(--primary-color);
}

@media (max-width: 768px) {
  .date {
    grid-template-columns: 1fr;
    gap: 32px;
    padding: 60px 40px 0;
  }

  /* .date__calendar {
    grid-template-columns: 1fr;
    gap: 16px;
  } */
}
</style>
