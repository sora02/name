import { createWebHistory, createRouter } from "vue-router";
import HomeCom from '../src/components/HomeCom.vue';
import AboutMe from '../src/components/AboutMe.vue'
import EducationCom from '../src/components/Education.vue' 

const routes = [
    {path: "/", name: "Home", component: HomeCom},
    {path: "/about", name: "AboutMe", component: AboutMe},
    {path: "/education", name: "Education", component: EducationCom},

];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;