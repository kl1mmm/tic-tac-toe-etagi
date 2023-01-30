<template>
  <div class="v-popup">
    <img class="closeImg" @click="closePopup()" alt="X" style="float: right" src="@/components/UI/pics/exit.svg">
    <div class="nameTag">Добавить игрока</div>
    <div class="nickname">
      <div class="text" style="text-align: left;">ФИО</div>
      <InputText :value="userName" @input="userName = $event.target.value" class="inp" type="text" placeholder="Иванов Иван Иванович"></InputText>
    </div>
    <div class="lowBlock">
      <div class="age">
        <div class="text">Возраст</div>
        <InputText :value="userAge" @input="userAge = $event.target.value" class="inp" type="text" placeholder="0"></InputText>
      </div>
      <div class="sex">
        <div class="text">Пол</div>
        <label>
          <input class="inpSex" type='radio' value="Женский" @input="userSex = $event.target.value" name='sex'>
          <span class='woman'><img alt="Ж" class="picSex" src="@/components/UI/pics/FemaleSex.svg"></span>
        </label>
        <label>
          <input class="inpSex" type='radio' value="Мужской" @input="userSex = $event.target.value" name='sex'>
          <span class='man'><img alt="М" class="picSex" src="@/components/UI/pics/MaleSex.svg"></span>
        </label>
      </div>
    </div>
    <MyButton class="btnAdd" @click="addNewPlayer">Добавить</MyButton>
  </div>
</template>

<script>
import InputText from "@/components/UI/InputText.vue";
import MyButton from "@/components/UI/MyButton.vue";

export default {
  name: "MyPopUp",
  components: {MyButton, InputText},
  methods: {
    closePopup() {
      this.$emit('closePopup');
    },
    addNewPlayer() {
      this.$emit('addNewPlayer', this.userName, this.userAge, this.userSex)
      this.closePopup();
    }
  }
}
</script>

<style scoped>
.v-popup {
  background: #FFFFFF;
  box-shadow: 3px 6px 24px rgba(44, 57, 121, 0.09);
  border-radius: 1em;
}

.nameTag {
  font-weight: 700;
  font-size: 1.5em;
  line-height: 150%;
  margin-top: 2em;
}

.text {
  font-weight: 500;
  font-size: 1em;
  line-height: 1.5em;
  margin-bottom: 0.5em;
}

.nickname {
  display: flex;
  flex-direction: column;
}

.lowBlock {
  display: flex;
  flex-direction: row;
  margin-top: 3%;
}

.age {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.age .text, .sex .text {
  text-align: left;
}

.sex .text {
  margin-left: 7.5%;
}

.age .inp {
  width: 35%;
}

.inpSex {
  display: none;
}

span {
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 1px solid #DCDCDF;
  margin: 5px;
  font-size: 40px;
  line-height: 50px;
  text-align: center;
  border-radius: 1000px;
  opacity: 0.7;
}

.sex input:hover ~ span {
  border: 1px solid #60C2AA;
  opacity: 1;
}

.sex input:checked ~ span {
  border: 1px solid #60C2AA;
  background-color: #60C2AA;
  opacity: 1;
}

.picSex {
  width: 2em;
  height: 2em;
}

.btnAdd {
  margin-top: 3%;
}
</style>