import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home/Home.vue";
import Gallery from "../views/Gallery.vue";
import PlaceDate from "../views/PlaceDate/PlaceDate.vue";
import ConfirmedGuests from "../views/ConfirmedGuests.vue";
import Story from "../views/Story.vue";
import ConfirmAssistance from "../views/ConfirmAssistance.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/lugar-y-fecha",
      name: "placeAndDate",
      component: PlaceDate,
    },
    {
      path: "/historia",
      name: "story",
      component: Story,
    },
    {
      path: "/galeria",
      name: "gallery",
      component: Gallery,
    },
    {
      path: "/confirmar-asistencia",
      name: "confirmAssistance",
      component: ConfirmAssistance,
    },
    {
      path: "/invitados-confirmados",
      name: "confirmedGuests",
      component: ConfirmedGuests,
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: { name: "home" },
    },
  ],
});

export default router;
