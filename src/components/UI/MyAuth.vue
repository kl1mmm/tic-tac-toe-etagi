<template>
  <div class="screen">
  <div class="block">
    <img alt="Авторизация" class="dog" src="@/components/UI/pics/AuthDog.svg">
    <div class="text">
      Войдите в игру
    </div>
    <div class="login">
      <InputText class="inp" type="text" placeholder="Логин" style="margin-top: 1.25em;"></InputText>
      <InputText class="inp" type="password" placeholder="Пароль" style="margin-top: 0.75em"></InputText>
    </div>
    <MyButton class="logBtn">Войти</MyButton>
  </div>
  </div>
</template>

<script>
import InputText from "@/components/UI/InputText";
import MyButton from "@/components/UI/MyButton";

export default {
  name: "MyAuth",
  components: {MyButton, InputText}
}
</script>

<style scoped>
.screen {
  display: flex;
  justify-content: center;
  align-items: center;
}
.block {
  width: 25em;
  height: 29em;
  box-shadow: 0 0.25em 1.25em rgba(44, 57, 121, 0.09);
  border-radius: 16px;
}

.dog {
  background: url("@/components/UI/pics/AuthDog.svg");
  width: 8.25em;
  height: 8.25em;
  margin-top: 2.5em;
}

.text {
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 24px;
  line-height: 150%;
  text-align: center;
  margin-top: 1.25em;
}

.inp {
  width: 22em;
  height: 3em;
}

.logBtn {
  margin-top: 1.25em;
  width: 22em;
  height: 3em;
}

</style>