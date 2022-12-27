<template>
  <div>
    <table class="grid">
      <tbody>
      <tr>
        <td>
          <MyCell name="1" :activePlayer='this.activePlayer' v-on:changePlayer="changePlayer"></MyCell>
        </td>
        <td>
          <MyCell name="2" :activePlayer='this.activePlayer' v-on:changePlayer="changePlayer"></MyCell>
        </td>
        <td>
          <MyCell name="3" :activePlayer='this.activePlayer' v-on:changePlayer="changePlayer"></MyCell>
        </td>
      </tr>
      <tr>
        <td>
          <MyCell name="4" :activePlayer='this.activePlayer' v-on:changePlayer="changePlayer"></MyCell>
        </td>
        <td>
          <MyCell name="5" :activePlayer='this.activePlayer' v-on:changePlayer="changePlayer"></MyCell>
        </td>
        <td>
          <MyCell name="6" :activePlayer='this.activePlayer' v-on:changePlayer="changePlayer"></MyCell>
        </td>
      </tr>
      <tr>
        <td>
          <MyCell name="7" :activePlayer='this.activePlayer' v-on:changePlayer="changePlayer"></MyCell>
        </td>
        <td>
          <MyCell name="8" :activePlayer='this.activePlayer' v-on:changePlayer="changePlayer"></MyCell>
        </td>
        <td>
          <MyCell name="9" :activePlayer='this.activePlayer' v-on:changePlayer="changePlayer"></MyCell>
        </td>
      </tr>
      </tbody>
    </table>
    <MyStatus class="TurnSide Status">{{  }}</MyStatus>
  </div>
</template>

<script>
import MyCell from "@/components/UI/Cell.vue";
import MyStatus from "@/components/UI/MyStatus.vue";

export default {
  name: "MyGrid",
  components: {MyStatus, MyCell},
  data() {
    return {
      activePlayer: 'O',
      gameStatus: 'Turn',
      turnSideText: '',
      moves: 0, // (max = 9)
      cells: {
        1: '', 2: '', 3: '',
        4: '', 5: '', 6: '',
        7: '', 8: '', 9: ''
      },
      winConditions: [
        [1, 2, 3], [4, 5, 6], [7, 8, 9], // строки
        [1, 4, 7], [2, 5, 8], [3, 6, 9], // столбцы
        [1, 5, 9], [3, 5, 7]             // диагонали
      ],
    }
  },
  methods: {
    changePlayer() {
      if (this.activePlayer === 'O') {
        this.activePlayer = 'X'
      } else {
        this.activePlayer = 'O'
      }
      this.moves++;
    }
  }
}
</script>

<style scoped>
.grid {
  width: 100%;
  height: 100%;
  border-collapse: collapse;
}

.Status {
  height: 3em;
  width: 200%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>