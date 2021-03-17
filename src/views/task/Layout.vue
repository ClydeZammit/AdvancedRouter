<template>
    <div v-if="task" class="task-details">
        <h1>{{task.title}}</h1>
        <div class="nav">
          <router-link :to="{name: 'TaskDetails', params: {id}}">Details|</router-link>
          <router-link :to="{name: 'TaskEdit', params: {id}}">Edit|</router-link>
          <router-link :to="{name: 'TaskDelete', params: {id}}">Delete</router-link>
        </div>
    <router-view :task="task"/>
    </div>
</template>

<script>
import TasksService from '@/services/TasksService.js'
export default {
  props: ['id'],
  data () {
    return {
      task: null
    }
  },

  created () {
    TasksService.getTask(this.id)
      .then(response => {
        console.log('task: ', response.data)
        this.task = response.data
      })
      .catch(error => {
        console.log('ERRORS' + error)
      })
  }
}
</script>

<style scoped>
.task-details{
    border:1px solid black;
    width:40%;
    margin:15px auto;
    padding:10px;
}
</style>
