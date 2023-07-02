<template>
  <div class="screen">
    <div class="block">
      <img alt="Авторизация" class="dog" src="@/components/UI/pics/AuthDog.svg">
      <div class="text">
        Войдите в игру
      </div>
      <div class="login">
        <InputText id="login" class="inp" type="text" placeholder="Логин" style="margin-top: 1.25em;"
                   v-bind:value="username"
                   @change="username = $event.target.value" @input="toggleBtn"></InputText>
        <div id="invalidLoginText">Неверный логин</div>
        <InputText id="passwd" class="inp" type="password" placeholder="Пароль" style="margin-top: 0.75em"
                   v-bind:value="password"
                   @change="password = $event.target.value" @input="toggleBtn"></InputText>
        <div id="invalidLoginText">Неверный пароль</div>
        <MyButton disabled id="subBtn" class="logBtn" @click="newLogin">Войти</MyButton>
      </div>
    </div>
  </div>
</template>

<script>
import InputText from "@/components/UI/InputText";
import MyButton from "@/components/UI/MyButton";
import router from "@/components/Router/router";
import axios from "axios";

export default {
  name: "MyAuth",
  components: {MyButton, InputText},
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    newLogin() {
      const formData = {
        username: this.username,
        password: this.password
      }

      axios.post('http://127.0.0.1:8000/api/v1/token/login', formData).then(response => {
        const token = response.data.auth_token
        this.$store.commit('setToken', token, this.username);
        axios.defaults.headers.common['Authorization'] = "Token " + token
        localStorage.setItem('token', token);
        localStorage.setItem('login', this.username);
        router.push('/sessions/');
      }).catch(error => {
        console.log(error)
        this.clearLoginInfo()
      })
    },
    clearLoginInfo() {
      let lg = document.getElementById('login');
      let pd = document.getElementById('passwd');
      lg.value = '';
      pd.value = '';
      lg.style.border = '1px solid #E93E3E';
      pd.style.border = '1px solid #E93E3E';
      document.getElementById('invalidLoginText').style.display = 'block';
      document.getElementById('invalidLoginText').style.display = 'block';
      document.getElementById('subBtn').disabled = true;
      let elms = document.querySelectorAll("[id='invalidLoginText']");
      for (let i = 0; i < elms.length; i++) {
        elms[i].style.display = 'block';
      }
    },
    toggleBtn() {
      document.getElementById('subBtn').disabled = (document.getElementById('login').value && document.getElementById('passwd').value) === '';
    }
  }
}
</script>

<style scoped>
.block {
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
  margin-top: 5%;
  width: 22em;
  height: 3em;
  margin-bottom: 10%;
}

.login {
  display: flex;
  flex-direction: column;
  margin-right: 1.5em;
  margin-left: 1.5em;
}

#invalidLoginText {
  font-style: normal;
  font-weight: 400;
  font-size: 0.75em;
  line-height: 135%;
  color: #E93E3E;
  text-align: left;
  display: none;
}

@media screen and (max-width: 770px) {
  .block {
    box-shadow: none;
  }

  .screen {
    overflow: hidden
  }
}
</style>