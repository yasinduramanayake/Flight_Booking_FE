export default [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home.vue"),
    meta: {
      layout: "full",
      requiresAuth: false ,
    },
  },
];
