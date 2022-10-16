import { createRouter, createWebHistory } from 'vue-router';
import home from '../view/home.vue';
import create from '../view/create.vue';
import edit from '../view/edit.vue';

const routes = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: home,
    },
    {
      path: '/create',
      component: create,
    },
    {
      path: '/edit',
      component: edit,
    },
  ],
});

export default routes;
