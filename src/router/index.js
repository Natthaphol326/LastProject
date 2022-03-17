import Vue from "vue";
import VueRouter from "vue-router";
import ProductSure from "../views/ProductSure.vue";
import PageOne from "../views/PageOne.vue";
import ProductDetail from "../components/ProductDetail.vue";
import LoginZone from "../components/LoginZone.vue";
import RegisMem from "../components/RegisMem.vue";
import addData from "../components/addData.vue";
import LogInPage from "../components/LogInPage.vue";
// import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/product",
    component: ProductSure,
    children: [
      {
        path: "productdetail:id",
        name: "productdetail",
        component: ProductDetail,
      },
    ],
  },
  {
    path: "/home",
    name: "home",
    component: PageOne,
  },
  {
    path: "/login",
    name: "login",
    component: LoginZone,
  },
  {
    path: "/regis",
    name: "regis",
    component: RegisMem,
  },
  {
    path: "/admin",
    name: "admin",
    component: addData,
  },
  {
    path: "/logic",
    name: "logic",
    component: LogInPage,
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
