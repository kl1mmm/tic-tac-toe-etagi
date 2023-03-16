<template>
  <div class="v-popup" v-if="gameStatus === 'Win'">
    <div v-if="gameStatus === 'Win'">
      <img alt="Победа!" class="winImg" src="@/components/UI/pics/winImg.svg">
      <div class="nameTag">Владлен Пупкин победил!</div>
    </div>
    <div v-if="gameStatus === 'Draw'">
      <img alt="Ничья" class="winImg" src="@/components/UI/pics/winImg.svg">
      <div class="nameTag">Победила дружба!</div>
    </div>
    <MyButton class="btnAdd" @click="newGame()">Новая игра</MyButton>
    <MyButton class="Secondary btnAdd" @click="$router.push('/sessions/')">Выйти в меню</MyButton>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton.vue";

export default {
  name: "MyPopUp",
  components: {MyButton},
  props: ['gameStatus'],
  methods: {
    closePopup() {
      this.$emit('closePopup');
    },
    newGame() {
      this.closePopup();
      location.reload();
    }
  }
}
</script>

<style scoped>
.v-popup {
  background: #FFFFFF;
  box-shadow: 3px 6px 24px rgba(44, 57, 121, 0.09);
  border-radius: 1em;
  display: flex;
  flex-direction: column;
}

.nameTag {
  font-weight: 700;
  font-size: 1.5em;
  line-height: 150%;
  margin-top: 2em;
}

.btnAdd {
  margin-top: 3%;
}

.winImg {
  width: 8.25em;
  margin: 0 auto 0;
  text-align: center;
}
</style>