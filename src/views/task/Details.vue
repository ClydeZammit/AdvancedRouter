<template>
  <p>On {{task.date}} @ {{task.time}} @ {{task.location}}</p>
  <p>{{task.description}}</p>
  <button @click="BackToTasksList" type="button" class="btn btn-secondary">Back to Tasks List</button>
</template>

<script>
export default {
  props: ['task'],
  methods: {
    BackToTasksList () {
      console.log('Task Deleted')
      this.$router.push({
        name: 'TasksList'
      })
    }
  }
}
</script>
