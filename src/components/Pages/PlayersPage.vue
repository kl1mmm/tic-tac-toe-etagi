<template>
  <div class="wrapper">
    <MyNavbar style="width: 100%;"></MyNavbar>
    <div class="screen">
      <MyPopUp @addNewPlayer="addNewPlayerInConsole" class="Popup" @closePopup="closePopupInfo"
               v-if="isPopupVisible"></MyPopUp>
      <div class="block">
        <div class="top-of-table">
          <div class="table-naming">
            Список игроков
          </div>
          <MyButton @click="showPopupInfo()" @closePopup="closePopupInfo()">Добавить игрока</MyButton>
        </div>
        <div class="table">
          <MySpreadsheet class="spreadSheet">
            <thead>
            <tr>
              <th class="row">ФИО</th>
              <th class="row">Возраст</th>
              <th class="row">Пол</th>
              <th class="row">Статус</th>
              <th class="row">Создан</th>
              <th class="row">Изменён</th>
              <th class="row"></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="player in playersData" :key="player.ID">
              <td class="row">{{ player.PlayerName }}</td>
              <td class="row">{{ player.Age }}</td>
              <td class="row"><img alt="Мужской" class="sex" src="@/components/UI/pics/MaleSex.svg"
                                   v-if="player.Sex === 'Мужской'">
                <img alt="Женский" class="sex" src="@/components/UI/pics/FemaleSex.svg" v-if="player.Sex === 'Женский'">
              </td>
              <td class="row">
                <MyStatus class="M"
                          :class="{'Free': player.Status==='Активен', 'Blocked': player.Status ==='Заблокирован'}"
                          style="width: 70%; padding: 0.25em 0.75em">
                  {{ player.Status }}
                </MyStatus>
              </td>
              <td class="row">{{ player.DateOfCreate }}</td>
              <td class="row">{{ player.DateOfEdit }}</td>
              <td class="row">
                <MyButton class="Secondary MSmall" v-if="player.Status === 'Активен'">
                  <img alt="Ø" class="blockImg" src="@/components/UI/pics/Stop.svg"> Заблокировать
                </MyButton>
                <MyButton class="Secondary MSmall" v-if="player.Status === 'Заблокирован'">
                  Разблокировать
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
import MyStatus from "@/components/UI/MyStatus";
import MyButton from "@/components/UI/MyButton.vue";
import MyPopUp from "@/components/UI/MyPopUp.vue";

export default {
  name: "SessionsPage",
  components: {MyButton, MyStatus, MySpreadsheet, MyNavbar, MyPopUp},
  data() {
    return {
      isPopupVisible: false,
      playersData: [
        {
          ID: '1',
          PlayerName: 'Александров Игнат Анатолиевич',
          Age: '24',
          Sex: 'Женский',
          Status: 'Заблокирован',
          DateOfCreate: '12 октября 2021',
          DateOfEdit: '22 октября 2021'
        },
        {
          ID: '2',
          PlayerName: 'Мартынов Остап Фёдорович',
          Age: '12',
          Sex: 'Женский',
          Status: 'Активен',
          DateOfCreate: '12 октября 2021',
          DateOfEdit: '22 октября 2021'
        },
        {
          ID: '3',
          PlayerName: 'Комаров Цефас Александрович',
          Age: '83',
          Sex: 'Мужской',
          Status: 'Активен',
          DateOfCreate: '12 октября 2021',
          DateOfEdit: '22 октября 2021'
        }]
    }
  },
  methods: {
    showPopupInfo() {
      this.isPopupVisible = true;
    },
    closePopupInfo() {
      this.isPopupVisible = false;
    },
    addNewPlayerInConsole(userName, userAge, userSex) {
      this.playersData.push({
        ID: '4',
        PlayerName: userName,
        Age: userAge,
        Sex: userSex,
        Status: 'Активен',
        DateOfCreate: new Date().toLocaleDateString('RU', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }).split('г.')[0],
        DateOfEdit: new Date().toLocaleDateString('RU', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }).split('г.')[0]
      })
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

.top-of-table {
  display: flex;
  justify-content: space-between;
  margin-top: 4%;
}

.table-naming {
  line-height: 200%;
  font-weight: 700;
  font-size: 1.5em;
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

.Popup {
  padding: 1.5em;
  position: fixed;
  top: 35%;
  left: 37.5%;
  width: 20%;
}
</style>
