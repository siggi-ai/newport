import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",

    component: () => import("../views/About.vue"),
  },
  {
    path: "/bored",
    name: "Bored",

    component: () => import("../views/Bored.vue"),
  },
  {
    path: "/websites",
    name: "Websites",

    component: () => import("../views/Websites.vue"),
  },
  {
    path: "/animation",
    name: "Animation",

    component: () => import("../views/Animation.vue"),
  },
  {
    path: "/pictures",
    name: "Pictures",

    component: () => import("../views/Pictures.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;