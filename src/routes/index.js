import { createRouter, createWebHistory } from 'vue-router';
import Home from './Home';
import NotFound from './NotFound';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path:'/',
      component: Home
    },
    {
      path:'/:notFound(.*)',
      component: NotFound
    }
  ],
});