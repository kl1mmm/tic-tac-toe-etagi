<template>
  <div class="wrapper">
    <MyNavbar style="width: 100%;"></MyNavbar>
    <div class="screen">
      <div class="block">
        <div class="table-naming">
          История игр
        </div>
        <div class="table">
          <MySpreadsheet class="spreadSheet">
            <thead>
            <tr>
              <th class="row">Игроки</th>
              <th class="row"></th>
              <th class="row">Дата</th>
              <th class="row">Время игры</th>
            </tr>
            </thead>
            <tbody v-for="game in gamesData" :key="game.ID">
            <tr>
              <td class="row"><img alt="0" class="gameImg"
                                   src="@/components/UI/pics/ZeroPlayer1.svg">{{ game.Player1Name }}
                <img class="winner" alt="Победитель"
                     src="@/components/UI/pics/GameWinner.svg" v-if="game.Winner === game.Player1Name">
              </td>
              <div class="versus row">против</div>
              <td class="row"><img alt="X" class="gameImg"
                                   src="@/components/UI/pics/CrossPlayer2.svg">{{ game.Player2Name }}
                <img class="winner" alt="Победитель"
                     src="@/components/UI/pics/GameWinner.svg" v-if="game.Winner === game.Player2Name">
              </td>
              <td class="row">{{ game.Date }}</td>
              <td class="row">{{ game.Time }}</td>
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

export default {
  name: "HistoryPage",
  components: {MySpreadsheet, MyNavbar},
  data() {
    return {
      gamesData: [{
        ID: '1',
        Player1Name: 'Терещенко У. Р.',
        Player2Name: 'Многогрешный П. В.',
        Winner: 'Терещенко У. Р.',
        Date: '12 февраля 2022',
        Time: '43 мин. 13 сек.'
      }, {
        ID: '2',
        Player1Name: 'Горбачёв А. Д.',
        Player2Name: 'Многогрешный П. В.',
        Winner: 'Многогрешный П. В.',
        Date: '12 февраля 2022',
        Time: '43 мин. 13 сек.'
      }
      ]
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
  padding-left: 2.5%;
  padding-right: 2.5%;
}

.table-naming {
  font-weight: 700;
  font-size: 1.5em;
  margin-top: 4%;
  text-align: left;
}

td, th {
  padding-top: 1.5%;
  padding-bottom: 1.5%;
}

th {
  padding-top: 2.5%;
}

.row {
  text-align: left;
  line-height: 1.5em;
}

tr {
  box-shadow: inset 0 -1px 0 #EEEFF5;
}

.gameImg {
  width: 1em;
  height: 1em;
  margin-right: 3%;
}

.versus {
  margin-top: 17%;
  text-shadow: 0 0 1px black;
}

.winner {
  width: 1.25em;
  height: 1.25em;
}
</style>