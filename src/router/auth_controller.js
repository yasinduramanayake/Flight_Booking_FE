// import notification from "@/ApiConstance/toast";

// export default {
//   init(router, store) {
//     router.beforeEach(async (to, _, next) => {
//       await store.dispatch("autoLogin");

//       //   if (!canNavigate(to)) {
//       //     if (!isLoggedIn) return next({ name: 'auth-login' })
//       //     return next({ name: 'misc-not-authorized' })
//       //   }

//       const { isLogedIn } = store.getters;

//       if (to.meta.requiresAuth && isLogedIn) {
//         next();
//       }
//       if (!to.meta.requiresAuth && isLogedIn) {
//         next({
//           path: "/admin",
//           replace: true,
//         });
//       }
//       if (to.meta.requiresAuth && !isLogedIn) {
//         next({
//           path: "/",
//           replace: true,
//         });
//       }
//       if (!to.meta.requiresAuth && !isLogedIn) {
//         next();
//       }
//       next();
//       return next();
//     });
//   },
// };
