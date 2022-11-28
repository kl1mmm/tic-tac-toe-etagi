<template>
  <div class="wrapper">
    <MyNavbar style="width: 100%;"></MyNavbar>
    <div class="screen">
      <div class="block">
        <div class="table-naming">
          Рейтинг игроков
        </div>
        <div class="table">
          <MySpreadsheet class="spreadSheet">
            <thead>
            <tr>
              <th class="row">ФИО</th>
              <th class="row">Всего игр</th>
              <th class="row">Победы</th>
              <th class="row">Проигрыши</th>
              <th class="row">Процент побед</th>
            </tr>
            </thead>
            <tbody v-for="player in playersData" :key="player.ID">
            <tr>
              <td class="row">{{ player.PlayerName }}</td>
              <td class="row">{{ player.Games }}</td>
              <td class="row" style="color: #69B849;">{{ player.Wins }}</td>
              <td class="row" style="color: #E93E3E;">{{ player.Loses }}</td>
              <td class="row">{{ player.percentOfWins }}</td>
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
  name: "SessionsPage",
  components: {MySpreadsheet, MyNavbar},
  data() {
    return {
      playersData: [{
        ID: '1',
        PlayerName: 'Александров Игнат Анатолиевич',
        Games: '24534',
        Wins: '9824',
        Loses: '1222',
        percentOfWins: '87%'
      },
        {
          ID: '2',
          PlayerName: 'Шевченко Рафаил Михайлович',
          Games: '24534',
          Wins: '9824',
          Loses: '1222',
          percentOfWins: '87%'
        },
        {
          ID: '3',
          PlayerName: 'Мазайло Трофим Артёмович',
          Games: '24534',
          Wins: '9824',
          Loses: '1222',
          percentOfWins: '87%'
        },
        {
          ID: '4',
          PlayerName: 'Логинов Остин Данилович',
          Games: '24534',
          Wins: '9824',
          Loses: '1222',
          percentOfWins: '87%'
        },
        {
          ID: '5',
          PlayerName: 'Борисов Йошка Васильевич',
          Games: '24534',
          Wins: '9824',
          Loses: '1222',
          percentOfWins: '87%'
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
  line-height: 150%;
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
}

tr {
  box-shadow: inset 0 -1px 0 #EEEFF5;
}
</style>