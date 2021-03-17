<template>
  <p>Delete {{task.title}}</p>
  <button @click="deleteTask" type="button" class="btn btn-secondary">Delete Task</button>
</template>

<script>
export default {
  props: ['task'],
  methods: {
    deleteTask () {
      console.log('Task Deleted')
      this.$router.push({
        name: 'TaskDetails'
      })
    }
  }
}
</script>
