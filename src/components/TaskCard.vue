<template>
  <ul class="list-group list-group-flush">
    <router-link class="task-link" :to="{name: 'TaskDetails', params:{id: task.id}}">
    <li class="list-group-item">{{task.title}} on {{task.date}} @ {{task.time}}</li>
    </router-link>
  </ul>
</template>

<script>
export default {
  name: 'TaskCard',
  props: {
    task: Object
  }
}
</script>

<style scoped>
.task-link{
  text-decoration: none;
  color: black;
}
.list-group-item:hover{
  transform:scale(1.01);
  box-shadow: 0 3px 12px 0;
  margin:5px;
}
</style>
