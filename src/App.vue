<template>
  <div style="font-size: 64px; font-weight: bolder;">Project in work.</div>
  <MyStatus class="Free M" style="width: 100px; height: 32px;">Готов</MyStatus>
</template>

<script>
import MyStatus from "@/components/UI/MyStatus";
export default {
  components: {MyStatus}
}
</script>

<style>
* {
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
}
</style>
