import { createRouter, createWebHistory } from 'vue-router'
import TasksList from '../views/TasksList.vue'
import TaskDetails from '../views/task/Details.vue'
import TaskLayout from '../views/task/Layout.vue'
import TaskEdit from '../views/task/Edit.vue'
import TaskDelete from '../views/task/Delete.vue'

const routes = [
  {
    path: '/',
    name: 'TasksList',
    component: TasksList,
    // if page exists parse the string to an integer otherwise return 1
    props: route => ({ page: parseInt(route.query.page) || 1 })
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/tasks/:id',
    name: 'TaskLayout',
    props: true,
    component: TaskLayout,
    children: [
      {
        path: '',
        name: 'TaskDetails',
        component: TaskDetails
      },
      {
        path: '/tasks/:id/edit',
        name: 'TaskEdit',
        props: true,
        component: TaskEdit
      },
      {
        path: '/tasks/:id/delete',
        name: 'TaskDelete',
        props: true,
        component: TaskDelete
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
