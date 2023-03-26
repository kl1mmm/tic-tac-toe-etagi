<template>
  <div class="wrapper">
    <MyNavbar style="width: 100%;"></MyNavbar>
    <div class="screen">
      <MyModal class="Popup" :winner="winner" :gameStatus="Status" v-if="isModalVisible"></MyModal>
      <div class="playersTable" ref="table">
        <div class="topOfTable">
          <div class="tableName">Игроки</div>
          <div class="clickTop">
            <input class="checkbox" type="checkbox" @click="openTable" name="" id=""/>
            <a class="arrow-icon" ref="arr" @click="openTable">
              <span class="left-bar"></span>
              <span class="right-bar"></span>
            </a>
          </div>
        </div>
        <MySpreadsheet class="menu-items">
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
    },
    openTable() {
      this.$refs.arr.classList.toggle('open');
      this.$refs.table.classList.toggle('open');
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

.arrow-icon, .checkbox {
  display: none;
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

@media screen and (max-width: 905px) {
  .screen {
    flex-direction: column;
  }

  .wrapper {
    background: #E5E5E5;
    height: 100%;
  }

  .topOfTable {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    margin: 1em 0.85em 0 0.85em;
  }

  .clickTop {
    position: relative;
    margin-right: 1.75em;
  }

  .row {
    margin-bottom: 2%;
    margin-left: 0.7em;
  }

  .arrow-icon {
    height: 1em;
    width: 1em;
    display: block;
    padding: 0.5em;
    position: absolute;
    cursor: pointer;
    border-radius: 4px;
    margin-top: 10px;
  }

  .checkbox {
    display: block;
    position: absolute;
    z-index: 5;
    height: 1em;
    width: 1em;
    cursor: pointer;
    opacity: 0;
  }



  .left-bar {
    position: absolute;
    background-color: transparent;
    top: 0;
    right: 9px;
    width: 13px;
    height: 3px;
    display: block;
    transform: rotate(35deg);
    float: right;
    border-radius: 2px;
  }

  .left-bar:after {
    content: "";
    background-color: black;
    width: 13px;
    height: 3px;
    display: block;
    float: right;
    border-radius: 6px 10px 10px 6px;
    transition: all 0.5s cubic-bezier(0.25, 1.7, 0.35, 0.8);
    z-index: -1;
  }

  .right-bar {
    position: absolute;
    background-color: transparent;
    top: 0;
    left: 0;
    width: 13px;
    height: 3px;
    display: block;
    transform: rotate(-35deg);
    float: right;
    border-radius: 2px;
  }

  .right-bar:after {
    content: "";
    background-color: black;
    width: 13px;
    height: 3px;
    display: block;
    float: right;
    border-radius: 10px 6px 6px 10px;
    transition: all 0.5s cubic-bezier(0.25, 1.7, 0.35, 0.8);
    z-index: -1;
  }

  .open .left-bar:after {
    transform-origin: center center;
    transform: rotate(-70deg);
  }

  .open .right-bar:after {
    transform-origin: center center;
    transform: rotate(70deg);
  }

  .playersTable {
    height: 70px;
    width: 90%;
    overflow: hidden;
    transition: transform 0.5s ease-in-out;
  }

  .open {
    height: 100%;
    transform: translateY(0);
  }
}
</style>