<template>
  <div class="wrapper">
    <MyNavbar style="width: 100%;"></MyNavbar>
    <div class="screen">
      <div class="block">
        <div class="table-naming">
          Активные игроки
        </div>
        <div class="table">
          <MySpreadsheet>
            <tbody class="sessionsList" v-for="player in playersData" :key="player.id">
            <tr class="row">
              <td class="nameOfPlayers">
                {{ [player.last_name, player.first_name, player.profile.patronymic_name].join(' ') }}
              </td>
              <td>
                <MyStatus v-if="player.profile.online_status === 'Offline'" class="S OutOfGame"
                          style="padding: 0.25em 0.75em">
                  Вне игры
                </MyStatus>
                <MyStatus v-if="player.profile.online_status === 'Online'" class="S Free"
                          style="padding: 0.25em 0.75em">
                  В сети
                </MyStatus>
              </td>
              <td>
                <MyButton class="MSmall" :disabled="player.is_online!==false">Позвать играть
                </MyButton>
              </td>
            </tr>
            </tbody>
          </MySpreadsheet>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyNavbar from "@/components/UI/MyNavbar";
import MySpreadsheet from "@/components/UI/MySpreadsheet";
import MyButton from "@/components/UI/MyButton";
import MyStatus from "@/components/UI/MyStatus";
import axios from "axios";
import store from "@/store";

export default {
  name: "SessionsPage",
  components: {MyStatus, MyButton, MySpreadsheet, MyNavbar},
  data() {
    return {
      playersData: [],
      user_login: '',
      statusSocket: '',
    }
  },
  created() {
    this.user_login = localStorage.getItem('login');
    this.connect();

    // this.statusSocket.onmessage = function (e) {
    //   let data = JSON.parse(e.data)
    //   if (data.username !== this.user_login) {
    //     var user_to_change = document.getElementById(`${data.username}_status`)
    //     var small_status_to_change = document.getElementById(`${data.username}_small`)
    //     if (data.online_status == true) {
    //       user_to_change.style.color = 'green'
    //       small_status_to_change.textContent = 'Online'
    //     } else {
    //       user_to_change.style.color = 'grey'
    //       small_status_to_change.textContent = 'Offline'
    //     }
    //   }
    // }

  },
  unmounted() {
    this.statusSocket.onclose = () => {
      console.log("DISCONNECTED FROM ONLINE CONSUMER.")
      this.$store.state.socketStatus = 'disconnected';
      sessionStorage.setItem('socketStatus', 'disconnected');
    }
    this.disconnect();
    this.user_login = '';
  },
  mounted() {
    axios.get('http://localhost:8000/api/v1/profiles/', {headers: {"Authorization": 'Token ' + store.getters.auth.token}})
        .then((response) => {
          this.playersData = response.data.results;
        })
    let statuses = document.querySelectorAll('.S')
    statuses.forEach((item) => {
          if (item.innerText === 'Свободен') {
            item.classList.add('Free')
          }
          if (item.innerText === 'В игре') {
            item.classList.add('InGame')
          }
          if (item.innerText === 'Вне игры') {
            item.classList.add('OutOfGame')
          }
          if (item.innerText === 'Заблокирован') {
            item.classList.add('Blocked')
          }
        }
    )
  },
  methods: {
    connect() {
      this.statusSocket = new WebSocket('ws:' + '127.0.0.1:8000/ws/online/?token=' + localStorage.getItem('token'));
      this.statusSocket.onopen = () => {
        console.log("CONNECTED TO ONLINE CONSUMER");
        this.statusSocket.send(JSON.stringify({
          'username': this.user_login,
          'type': 'open'
        }))
        sessionStorage.setItem('socketStatus', 'connected')
        this.$store.commit('setToken', sessionStorage.getItem('socketStatus'));
      }
    },
    disconnect() {
      this.statusSocket.send(JSON.stringify({
        'username': this.user_login,
        'type': 'offline'
      }))
      this.statusSocket.close();
    }
  }
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

MySpreadsheet {
  width: 100%;
  margin: 0 auto;
}

td {
  padding-top: 2%;
}

td:nth-child(1) {
  text-align: left;
  padding-left: 5%;
}

td:nth-child(2) {
  text-align: center;
}

td:nth-child(3) {
  text-align: center;
}

.nameOfPlayers {
  font-size: 1em;
}

@media screen and (max-width: 1600px) {
  .block {
    width: 70%;
  }
}

@media screen and (max-width: 1336px) {
  .block {
    width: 75%;
  }

  .table-naming {
    font-size: 1.35em;
  }
}

@media screen and (max-width: 905px) {
  .block {
    width: 100%;
    height: 95%;
    box-shadow: none;
    border-radius: 0;
  }

  MyNavbar {
    box-shadow: 0 2px 6px rgba(44, 57, 121, 0.1);
    border-radius: 0 0 16px 16px;
  }
}

@media screen and (max-width: 770px) {
  .table-naming {
    font-size: 1.25em;
  }

  .MSmall {
    width: 7em;
    height: 3em;
    display: flex;
    align-items: center;
    margin-left: 1em;
    margin-right: 0.5em;
  }

  .nameOfPlayers {
    font-size: 0.95em;
  }
}
</style>