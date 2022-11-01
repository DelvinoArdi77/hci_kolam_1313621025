import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import HomePage from "../views/HomePage.vue";
import PageSecond from "../views/Page2.vue";
import TabsPage from "../views/Tabs.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/Tabs/HomePage",
  },
  {
    path: "/Tabs/",
    component: TabsPage,
    children: [
      {
        path: "",
        redirect: "/Tabs/HomePage",
      },
      {
        path: "HomePage",
        component: HomePage,
      },
      {
        path: "Page2",
        component: PageSecond,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
