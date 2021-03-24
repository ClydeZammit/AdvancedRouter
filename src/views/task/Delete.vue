<template>
  <p>Delete {{task.title}}</p>
  <button @click="deleteTask" type="button" class="btn btn-secondary" data-toggle="modal" data-target="#exampleModal" >Delete Task</button>
</template>

<script>
export default {
  props: ['task'],
  inject: ['GStore'],
  methods: {
    deleteTask () {
      console.log('Task Deleted')
      this.GStore.flashMessage = this.task.title + ' was deleted'
      this.$router.push({
        name: 'TaskDetails'
      })
    }
  }
}
</script>
