<template>
<div id="flashMessage" v-if="GStore.flashMessage">
  {{ GStore.flashMessage }}
</div>
  <div id="nav">
    <router-link class="home" :to="{name: 'TasksList'}">Tasks</router-link> |
    <router-link :to="{name: 'About'}">About</router-link>
  </div>
  <router-view/>
</template>

<script>
export default {
  inject: ['GStore']
}
</script>

<style>
@keyframes bluefade {
  from {
    background: lightblue;
  }
  to {
    background: transparent;
  }
}

#flashMessage{
  animation-name: bluefade;
  animation-duration: 5s;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.home{
  border: green solid 1px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
