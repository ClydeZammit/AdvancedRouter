<template>
    <div v-if="task" class="task-details">
        <h1>{{task.title}}</h1>
        <h4>On {{task.date}} in {{task.location}} @ {{task.time}}</h4>
        <h6>{{task.description}}</h6>
        <button type="button" class="btn btn-secondary" @click="$router.go(-1)">Back</button>
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
