import Vue from "vue";
import Router from "vue-router";
import Examples from "./views/Examples.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Examples",
      component: Examples
    },
    {
      path: "/game",
      name: "Game",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
      component: () =>
        import("./views/Game.vue")
    }
  ]
});
