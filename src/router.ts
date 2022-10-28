import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Dashboard from "./views/Dashboard.vue";
import Forms from "./views/Forms.vue";
import Tables from "./views/Tables.vue";
import UIElements from "./views/UIElements.vue";
import Login from "./views/Login.vue";
import Modal from "./views/Modal.vue";
import Card from "./views/Card.vue";
import Sales from"./views/Sales.vue"

import NotFound from "./views/NotFound.vue";
import ActivitiesForm from "./views/ActivitiesForm.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Login",
    component: Login,
    meta: { layout: "empty" },
  },
 
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
   
  {
    path: "/sales",
    name: "Sales",
    component: Sales,
  },
  {
    path: "/forms",
    name: "Forms",
    component: Forms,
  },
  {
    path: "/cards",
    name: "Cards",
    component: Card,
  },
  {
    path: "/tables",
    name: "Tables",
    component: Tables,
  },
  {
    path: "/ui-elements",
    name: "UIElements",
    component: UIElements,
  },
  {
    path: "/modal",
    name: "Modal",
    component: Modal,
  },
  {
    path: "/activitiesForm",
    name: "ActivitiesForm",
    component: ActivitiesForm,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
