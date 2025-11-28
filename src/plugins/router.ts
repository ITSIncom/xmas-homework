import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/pages/HomePage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomePage
        },
        {
            path: "/exercise/1/",
            name: "exercise-1",
            component: () => import("@/pages/exercises/Exercise1.vue")
        },
        {
            path: "/exercise/2/",
            name: "exercise-2",
            component: () => import("@/pages/exercises/Exercise2.vue")
        },
        {
            path: "/exercise/3/",
            name: "exercise-3",
            component: () => import("@/pages/exercises/Exercise3.vue")
        },
        {
            path: "/exercise/4/",
            name: "exercise-4",
            component: () => import("@/pages/exercises/Exercise4.vue")
        },
        {
            path: "/about",
            name: "about",
            component: () => import("@/pages/AboutPage.vue")
        }
    ]
});

export default router;
