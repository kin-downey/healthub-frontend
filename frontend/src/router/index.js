import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

import Graph from "../views/GraphView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Top",
    component: () =>
      import("../views/Top.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import("../views/About.vue"),
  },
  {
    path: "/graph",
    name: "Graph",
    component: Graph,
  },
  {
    path: "/auth",
    name: "Auth",
    component: () =>
      import("../views/Auth.vue"),
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
