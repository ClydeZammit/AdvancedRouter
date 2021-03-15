<template>
  <div class="tasks">
    <div class="card" style="width:24rem;">
      <div class="card-header"><strong>Tasks</strong></div>
      <TaskCard v-for="task in tasks" :key="task.id" :task="task"/>
      <div class="pagination">
        <router-link class="prev"
        :to="{ name: 'TasksList', query: { page: page - 1}}"
        v-if="page != 1"> Previous
        </router-link>
      </div>

      <div class="pagination">
        <router-link class="next"
          :to="{ name: 'TasksList', query: { page: page + 1}}"
          v-if="hasNextPage">Next
        </router-link>
      </div>
  </div>
  </div>
</template>

<script>
import TaskCard from '@/components/TaskCard.vue'
import TasksService from '@/services/TasksService'
import { watchEffect } from 'vue'
export default {
  name: 'TasksList',
  props: ['page'],
  data () {
    return {
      tasks: null,
      totalTasks: 0
    }
  },
  components: {
    TaskCard
  },
  created () {
    watchEffect(() => {
      console.log('Page is: ' + this.page)
      TasksService.getTasks(2, this.page)
        .then(response => {
          this.tasks = response.data
          this.totalTasks = response.headers['x-total-count']
        })
        .catch(error => {
          console.log('Errors:' + error)
        })
    })
  },
  computed: {
    hasNextPage () {
      var totalPages = Math.ceil(this.totalTasks / 2)
      return this.page < totalPages
    }
  }
}
</script>

<style scoped>
.tasks{
  width:22%;
  margin:0px auto;
}
.pagination a{
  flex:1;
  text-decoration: none;
  color:green;
  border: grey dashed 1px;
}
.pagination a:hover{
  transform:scale(1.01);
  box-shadow: 0 3px 12px 0;
  color:red;
}
</style>
