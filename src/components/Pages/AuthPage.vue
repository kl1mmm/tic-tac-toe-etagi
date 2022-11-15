<template>
  <div class="screen">
    <MyAuth class="auth"></MyAuth>
  </div>
</template>

<script>
import MyAuth from "@/components/UI/MyAuth";

export default {
  name: "AuthPage",
  components: {MyAuth}
}
</script>

<style scoped>
.screen {
  display: flex;
  width: 100%;
  height: 100%;
}

.auth {
  position: fixed;
}
</style>