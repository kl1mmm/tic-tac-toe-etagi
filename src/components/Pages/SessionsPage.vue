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
            <tbody class="sessionsList" v-for="player in playersData" :key="player.ID">
            <tr>
              <td>{{ player.PlayerName }}</td>
              <td>
                <MyStatus ref="status" v-model="player.Status" class="S" style="padding: 0.25em 0.75em">
                  {{ player.Status }}
                </MyStatus>
              </td>
              <td>
                <MyButton class="MSmall" :disabled="player.Status !== 'Свободен'">Позвать играть</MyButton>
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

export default {
  name: "SessionsPage",
  components: {MyStatus, MyButton, MySpreadsheet, MyNavbar},
  data() {
    return {
      playersData: [{ID: '1', PlayerName: 'Александров Игнат Анатолиевич', Status: 'Свободен'},
        {ID: '2', PlayerName: 'Василенко Эрик Платонович', Status: 'В игре'},
        {ID: '3', PlayerName: 'Быков Юрий Виталиевич', Status: 'Свободен'},
        {ID: '4', PlayerName: 'Галкин Феликс Платонович', Status: 'Свободен'},
        {ID: '5', PlayerName: 'Комаров Цефас Александрович', Status: 'Свободен'}]
    }
  },
  methods: {
    addClass() {
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

</style>