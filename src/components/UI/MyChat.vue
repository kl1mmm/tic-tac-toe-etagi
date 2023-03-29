<template>
  <div class="chat PC">
    <div class="messagesArr">
      <div class="message">
        <ChatMsg v-for="msg in messagesData" :key="msg" :msg="msg"></ChatMsg>
      </div>
    </div>
    <div class="sendMsg">
      <InputText id="inp" class="msgInp" placeholder="Сообщение..." :value="msgText"
                 @input="msgText = $event.target.value"></InputText>
      <MyButton class="arriveImg" @click="sendMsg()">
        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M1.4 17.4L18.85 9.92C19.66 9.57 19.66 8.43 18.85 8.08L1.4 0.600002C0.74 0.310002 0.00999999 0.800002 0.00999999 1.51L0 6.12C0 6.62 0.37 7.05 0.87 7.11L15 9L0.87 10.88C0.37 10.95 0 11.38 0 11.88L0.00999999 16.49C0.00999999 17.2 0.74 17.69 1.4 17.4Z"
              fill="white"/>
        </svg>
      </MyButton>
    </div>
  </div>
  <div class="chat phone" v-click-away="closePhoneChat">
    <div class="messagesArr" ref="phoneChat">
      <div class="sendMsg-wrapper">
        <div class="sendMsg">
          <InputText id="inp" class="msgInp" placeholder="Сообщение..." :value="msgText"
                     @input="msgText = $event.target.value" @click="openPhoneChat"></InputText>
          <MyButton class="arriveImg" @click="sendMsg()">
            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M1.4 17.4L18.85 9.92C19.66 9.57 19.66 8.43 18.85 8.08L1.4 0.600002C0.74 0.310002 0.00999999 0.800002 0.00999999 1.51L0 6.12C0 6.62 0.37 7.05 0.87 7.11L15 9L0.87 10.88C0.37 10.95 0 11.38 0 11.88L0.00999999 16.49C0.00999999 17.2 0.74 17.69 1.4 17.4Z"
                  fill="white"/>
            </svg>
          </MyButton>
        </div>
      </div>
      <div class="message" ref="message">
        <ChatMsg v-for="msg in messagesData.slice().reverse()" :key="msg" :msg="msg"></ChatMsg>
      </div>
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
  props: ['playersInfo'],
  data() {
    return {
      msgText: '',
      messagesData: [
        {
          timeArr: '13:40',
          userName: this.playersInfo[0].PlayerName.slice(0, this.playersInfo[0].PlayerName.lastIndexOf(' ')),
          Text: 'Привет!',
          side: this.playersInfo[0].Team
        },
        {
          timeArr: '13:41',
          userName: this.playersInfo[1].PlayerName.slice(0, this.playersInfo[1].PlayerName.lastIndexOf(' ')),
          Text: 'Привет.',
          side: this.playersInfo[1].Team
        },
        {
          timeArr: '13:43',
          userName: this.playersInfo[1].PlayerName.slice(0, this.playersInfo[1].PlayerName.lastIndexOf(' ')),
          Text: 'Играем или как?',
          side: this.playersInfo[1].Team
        }
      ]
    }
  },
  methods: {
    sendMsg() {
      this.messagesData.push({
        timeArr: new Date().toLocaleDateString('RU', {
          hour: 'numeric',
          minute: 'numeric'
        }).split(',')[1],
        userName: 'Admin',
        Text: this.msgText,
        side: 'Zero'
      })
      this.msgText = '';
    },
    openPhoneChat() {
      this.$refs.message.classList.add('open');
      this.$refs.phoneChat.classList.add('open');
    },
    closePhoneChat() {
      this.$refs.message.classList.remove('open');
      this.$refs.phoneChat.classList.remove('open');
    }
  }
}
</script>

<style scoped>
.chat {
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  width: 50%;
  transition: all 1s ease-in-out;
}

.PC {
  display: flex;
  width: 25%;
}

.phone {
  display: none;
}

.message {
  width: 92.5%;
  margin: auto 0.75em 0.75em 0;
  padding: 0.75em;
}

.sendMsg {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.msgInp {
  width: 90%;
  height: 3em;
  margin: 0.75em 0;
  padding: 0.75em;
  border: 1px solid #DCDCDF;
  border-radius: 12px;
}

.PC .msgInp {
  margin-bottom: 25%;
}

.arriveImg {
  width: 2.75em;
  height: 2.75em;
  margin: 0.75em;
  padding: 0.75em;
  text-align: center;
}

.messagesArr {
  overflow-y: auto;
}

@media screen and (max-width: 1600px) {
  .PC .msgInp {
    margin-bottom: 7%;
  }
}

@media screen and (max-width: 905px) {
  .PC {
    display: none;
  }

  .messagesArr {
    overflow-y: unset;
  }

  .sendMsg-wrapper {
    position: relative;
    height: 70px;
  }

  .sendMsg {
    position: absolute;
    z-index: 5;
    width: 100%;
  }

  .phone {
    display: flex;
    align-self: center;
    width: 85%;
    height: 460px;
    background: rgba(255, 255, 255, 1);
    border-radius: 20px 20px 0 0;
    box-shadow: 0 -10px 20px 0 rgba(44, 57, 121, 0.1);
    transition: all 1s ease-in-out;
  }

  .phone .message {
    display: none;
    height: 350px;
    overflow-y: scroll;
  }

  .open .message {
    display: block;
    transform: translateY(0);
  }

  .msgInp {
    margin: 0.75em 0 0.75em 1em;
  }

  .arriveImg {
    margin: 0.75em 0.75em 0.75em 0.75em;
  }
}

@media screen and (max-width: 455px) {
  .phone {
    display: flex;
    align-self: center;
    width: 100%;
    background: #ffffff;
    border-radius: 20px 20px 0 0;
  }

  .msgInp {
    margin: 0.75em 0 0.75em 1em;
  }

  .arriveImg {
    margin: 0.75em 0.75em 0.75em 0.75em;
  }
}
</style>