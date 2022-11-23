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
  height: 100vh;
  justify-content: center;
}

.auth {
  flex-direction: column;

}
</style>