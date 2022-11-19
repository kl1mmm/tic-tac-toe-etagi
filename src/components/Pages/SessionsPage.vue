<template>
  <div class="wrapper">
    <MyNavbar style="width: 100%;"></MyNavbar>
    <div class="screen">
      <div class="block">
        <div class="table-naming">
          Рейтинг игроков
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyNavbar from "@/components/UI/MyNavbar";

export default {
  name: "SessionsPage",
  components: {MyNavbar}
}
</script>

<style scoped>
.wrapper {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.screen {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.block {
  background: #ffffff;
  width: 48.5%;
  height: 90%;
  box-shadow: 0 4px 20px rgba(44, 57, 121, 0.09);
  border-radius: 40px;
}

.table-naming {
  font-weight: 700;
  font-size: 1.5em;
  line-height: 150%;
  margin: 4% 0 0 5%;
  text-align: left;
}
</style>