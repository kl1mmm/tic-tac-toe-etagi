<template>
  <div class="wrapper">
    <MyNavbar style="width: 100%;"></MyNavbar>
    <div class="screen">
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
      <MyGrid class="gameGrid" style="width: 30%; height: 30%;"></MyGrid>
    </div>
  </div>
</template>

<script>
import MyNavbar from "@/components/UI/MyNavbar";
import MySpreadsheet from "@/components/UI/MySpreadsheet.vue";
import MyGrid from "@/components/UI/Grid.vue";

export default {
  name: "HistoryPage",
  components: {MyGrid, MyNavbar, MySpreadsheet},
  data() {
    return {
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

.imgTeam {
  width: 1.5em;
  height: 1.5em;
}

.playerName {
  font-style: normal;
  font-weight: 400;
  font-size: 1.25em;
  letter-spacing: 0.15px;
  color: #373745;
}

.percent {
  font-style: normal;
  font-weight: 400;
  font-size: 0.875em;
  letter-spacing: 0.25px;
  color: #898993;
}

.gameGrid {
  height: 100%;
  margin: 2% auto;
  width: 100%;
}
</style>