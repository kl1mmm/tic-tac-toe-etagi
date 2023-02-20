<template>
  <div class="chat">
    <div class="message">
      <ChatMsg v-for="msg in messagesData" :key="msg" :msg="msg"></ChatMsg>
    </div>
    <div class="sendMsg">
      <InputText class="msgInp" placeholder="Сообщение..."></InputText>
      <MyButton class="arriveImg">
        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M1.4 17.4L18.85 9.92C19.66 9.57 19.66 8.43 18.85 8.08L1.4 0.600002C0.74 0.310002 0.00999999 0.800002 0.00999999 1.51L0 6.12C0 6.62 0.37 7.05 0.87 7.11L15 9L0.87 10.88C0.37 10.95 0 11.38 0 11.88L0.00999999 16.49C0.00999999 17.2 0.74 17.69 1.4 17.4Z"
              fill="white"/>
        </svg>
      </MyButton>
    </div>
  </div>
</template>

<script>
import InputText from "@/components/UI/InputText.vue";
import MyButton from "@/components/UI/MyButton.vue";
import ChatMsg from "@/components/UI/ChatMsg.vue";

export default {
  name: "MyChat",
  components: {ChatMsg, MyButton, InputText},
  data() {
    return {
      messagesData: [
        {
          timeArr: '13:40',
          userName: 'Плюшкина Екатерина',
          Text: 'Привет!',
          side: 'cross'
        },
        {
          timeArr: '13:41',
          userName: 'Пупкин Владлен',
          Text: 'Привет.',
          side: 'zero'
        },
        {
          timeArr: '13:43',
          userName: 'Пупкин Владлен',
          Text: 'Играем или как?',
          side: 'zero'
        }
      ]
    }
  }
}
</script>

<style scoped>
.chat {
  height: 100%;
  width: 50%;
}

.sendMsg {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.message {
  width: 80%;
  margin: 0.75em;
  padding: 0.75em;
}

.msgInp {
  width: 100%;
  height: 3em;
  margin: 0.75em;
  padding: 0.75em;
  border: 1px solid #DCDCDF;
  border-radius: 12px;
}

.arriveImg {
  width: 2.75em;
  height: 2.75em;
  margin: 0.75em;
  padding: 0.75em;
  text-align: center;
}
</style>