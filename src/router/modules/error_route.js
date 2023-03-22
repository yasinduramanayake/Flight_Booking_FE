export default [
  {
    path: "/error-404",
    name: "error-404",
    component: () => import("@/views/error/Error404.vue"),
    meta: {
      layout: "full",
      requiresAuth: false,
    },
  },
  {
    path: "*",
    redirect: "error-404",
  },
];
