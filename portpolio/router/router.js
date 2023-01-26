import { createWebHistory, createRouter } from "vue-router";
import HomeCom from '../src/components/HomeCom.vue';
import AboutMe from '../src/components/AboutMe.vue'
import EducationCom from '../src/components/Education.vue' 
import ProjectCom from '../src/components/Project.vue'
import ContactCom from '../src/components/Contact.vue'

const routes = [
    {path: "/", name: "Home", component: HomeCom},
    {path: "/about", name: "AboutMe", component: AboutMe},
    {path: "/education", name: "Education", component: EducationCom},
    {path: "/project", name: "Project", component: ProjectCom},
    {path: "/contact", name: "Contact", component: ContactCom},
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;