<template>
  <router-view></router-view>
</template>

<script>
import axios from "axios";

export default {
  name: 'App',
  data() {
    return {
      status: 'disconnected',
      statusSocket: '',
    }
  },
  beforeCreate() {
    this.$store.commit('initializeStore')

    const token = this.$store.state.token

    if (token) {
      axios.defaults.headers.common['Authorization'] = "Token" + token
    } else {
      axios.defaults.headers.common['Authorization'] = ''
    }
  }
}
</script>

<style>
* {
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  text-align: center;
}
</style>
