<template>
  <div class="wrapper">
    <MyNavbar style="width: 100%;"></MyNavbar>
    <div class="screen">
      <MyModal class="Popup" :winner="winner" :gameStatus="Status" v-if="isModalVisible"></MyModal>
      <div class="playersTable">
        <div class="tableName">Игроки</div>
        <MySpreadsheet>
          <tbody>
          <tr v-for="player in playersData" :key="player.ID">
            <div class="row">
              <div class="column">
                <td><img alt="O" class="imgTeam" src="@/components/UI/pics/ZeroPlayer1.svg"
                         v-if="player.Team === 'Zero'">
                  <img alt="X" class="imgTeam" src="@/components/UI/pics/CrossPlayer2.svg"
                       v-if="player.Team === 'Cross'"></td>
                <td class="playerName">{{ player.PlayerName }}</td>
              </div>
              <td class="percent">{{ player.PercentOfWins }} побед</td>
            </div>
          </tr>
          </tbody>
        </MySpreadsheet>
      </div>
      <MyGrid :playersInfo="this.playersData" :inGameStatus="Status" @gameEnd="gameEnd" class="gameGrid"></MyGrid>
      <MyChat :playersInfo="this.playersData" class="usersChat"></MyChat>
    </div>
  </div>
</template>

<script>
import MyNavbar from "@/components/UI/MyNavbar";
import MySpreadsheet from "@/components/UI/MySpreadsheet.vue";
import MyGrid from "@/components/UI/Grid.vue";
import MyModal from "@/components/UI/MyModal.vue";
import MyChat from "@/components/UI/MyChat.vue";

export default {
  name: "HistoryPage",
  components: {MyChat, MyGrid, MyNavbar, MySpreadsheet, MyModal},
  data() {
    return {
      isModalVisible: false,
      Status: 'Turn',
      winner: null,
      playersData: [{
        ID: '1',
        PlayerName: 'Пупкин Владлен Игоревич',
        PercentOfWins: '63%',
        Team: 'Zero'
      },
        {
          ID: '2',
          PlayerName: 'Плюшкина Екатерина Викторовна',
          PercentOfWins: '23%',
          Team: 'Cross'
        }]
    }
  },
  methods: {
    gameEnd(someStatus, winPlayer) {
      this.Status = someStatus;
      if (this.Status === 'Win') {
        this.winner = winPlayer;
      }
      console.log(this.winner);
      this.isModalVisible = true;
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
  flex-direction: row;
}

.playersTable {
  background: #ffffff;
  box-shadow: 0 4px 20px rgba(44, 57, 121, 0.09);
  border-radius: 1.25em;
  padding: 1% 1% 0 1%;
  margin: 2%;
  height: 25%;
}

.tableName {
  font-style: normal;
  font-weight: 700;
  font-size: 1.5em;
  color: #373745;
  text-align: left;
  margin-bottom: 4%;
}

.row {
   margin-bottom: 3%;
}

.imgTeam {
  width: 1.5em;
  height: 1.5em;
}

.playerName {
  font-style: normal;
  font-weight: 400;
  font-size: 1.25em;
  text-align: left;
  letter-spacing: 0.01em;
  color: #373745;
  margin-left: 0.75em;
}

.percent {
  font-style: normal;
  font-weight: 400;
  font-size: 0.875em;
  letter-spacing: 0.0156em;
  color: #898993;
  margin-left: 3em;
}

.gameGrid {
  width: 40%;
  height: 85%;
  margin: 2% auto;
}

.Popup {
  padding: 1.5em;
  position: fixed;
  top: 30%;
  left: 39%;
  width: 17.5%;
}

.usersChat {
  height: 89%;
  width: 25%;
}

.row {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: auto;
}

.column {
  display: flex;
  flex-direction: row;
}

@media screen and (min-width: 1600px) {
  .Popup {
    top: 30%;
    left: 37%;
    width: 25%;
  }
}

@media screen and (max-width: 1600px) {
  .Popup {
    top: 25%;
    left: 37%;
    width: 25%;
  }

  .playersTable {
    height: 30%;
    width: 20%;
  }

  .row {
    margin-bottom: 5%;
  }

  .playerName {
    text-align: left;
    font-size: 1.1em;
  }

  .percent {
    margin-left: 2.75em;
  }

  .gameGrid {
    width: 40%;
    height: 95%;
    margin: 1% auto;
  }

  .usersChat {
    height: 98%;
    width: 25%;
  }
}
</style>