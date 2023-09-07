import { createRouter, createWebHistory } from 'vue-router';
import NotFound from './views/NotFound.vue';

export const router = createRouter({
history: createWebHistory(),
routes: [
    {
        path: '/',
        redirect: '/dashboard',
      },
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('./features/dashboard/Dashboard.vue'),
      },
      {
        path: '/missions',
        name: 'Missions',
        component: () => import('./features/missions/components/Mission.vue'),
      },
      {
        path: '/factures',
        name: 'Factures',
        component: () => import('./features/factures/Facture.vue'),
      },
      {
        path: '/devis',
        name: 'Devis',
        component: () => import('./features/devis/Devis.vue'),
      },
      {
        path: '/agenda',
        name: 'Agenda',
        component: () => import('./features/agenda/components/calendar.vue'),
      },
      {
        path: '/admin/données',
        name: 'Données admin',
        component: () => import('./features/Admin/Donnees.vue'),
      },
      {
        path: '/admin/nouveau',
        name: 'Nouveau compte',
        component: () => import('./features/Admin/AjouterUnCompte.vue'),
      },
      {
        path: '/:notFound(.*)*',
        component: NotFound,
      },
]
})




