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
    path: "/login",
    name: "Login",
    component: () =>
      import("../views/Login.vue"),
  },
  {
    path: "/signup",
    name: "Signup",
    component: () =>
      import("../views/Signup.vue"),
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import("../views/WaitEmail.vue"),
  },
  {
    path: "/registed",
    name: "Registed",
    component: () =>
      import("../views/Registed.vue"),
  },
  {
    path: "/registererror",
    name: "RegisterError",
    component: () =>
      import("../views/RegisterError.vue"),
  },
  {
    path: "/friends",
    name: "Friends",
    component: () =>
      import("../views/Friends.vue"),
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
