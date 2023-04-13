<template>
    <router-view></router-view>
</template>

<script>
import axios from 'axios'

export default {
    name: 'App',
    data() {
    },
    mounted() {
        axios.get('http://localhost:8000/api/users/').then((response) => {
            console.log(response.data)
        })
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
