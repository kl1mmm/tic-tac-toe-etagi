<template>
  <div class="screen">
    <div class="block">
      <img alt="Авторизация" class="dog" src="@/components/UI/pics/AuthDog.svg">
      <div class="text">
        Войдите в игру
      </div>
      <div class="login">
        <InputText id="login" class="inp" type="text" placeholder="Логин" style="margin-top: 1.25em;" v-bind:value="login"
                   @input="login = $event.target.value"></InputText>
        <InputText id="passwd" class="inp" type="password" placeholder="Пароль" style="margin-top: 0.75em"
                   v-bind:value="password"
                   @input="password = $event.target.value"></InputText>
      </div>
      <MyButton class="logBtn" @click="isLogin">Войти</MyButton>
    </div>
  </div>
</template>

<script>
import InputText from "@/components/UI/InputText";
import MyButton from "@/components/UI/MyButton";
import router from "@/components/Router/router";

export default {
  name: "MyAuth",
  components: {MyButton, InputText},
  data() {
    return {
      login: '',
      password: ''
    }
  },
  methods: {
    isLogin() {
      if (this.login === 'admin' && this.password === 'admin') {
        router.push('/sessions/')
      } else {
        document.getElementById('login').reset()
        document.getElementById('passwd').reset()
      }
    }
  }
}
</script>

<style scoped>
.block {
  margin: auto auto;
  width: 25em;
  height: 29em;
  box-shadow: 0 0.25em 1.25em rgba(44, 57, 121, 0.09);
  border-radius: 16px;
  background: #FFFFFF;
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