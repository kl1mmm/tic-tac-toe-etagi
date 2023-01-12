<template>
  <div class="gameBlock">
    <MyTimer class="timer"></MyTimer>
    <table class="grid">
      <tbody>
      <tr>
        <td>
          <MyCell name="1" @click="this.cells[1] = this.activePlayer" :activePlayer='this.activePlayer'
                  v-on:changePlayer="changePlayer"></MyCell>
        </td>
        <td>
          <MyCell name="2" @click="this.cells[2] = this.activePlayer" :activePlayer='this.activePlayer'
                  v-on:changePlayer="changePlayer"></MyCell>
        </td>
        <td>
          <MyCell name="3" @click="this.cells[3] = this.activePlayer" :activePlayer='this.activePlayer'
                  v-on:changePlayer="changePlayer"></MyCell>
        </td>
      </tr>
      <tr>
        <td>
          <MyCell name="4" @click="this.cells[4] = this.activePlayer" :activePlayer='this.activePlayer'
                  v-on:changePlayer="changePlayer"></MyCell>
        </td>
        <td>
          <MyCell name="5" @click="this.cells[5] = this.activePlayer" :activePlayer='this.activePlayer'
                  v-on:changePlayer="changePlayer"></MyCell>
        </td>
        <td>
          <MyCell name="6" @click="this.cells[6] = this.activePlayer" :activePlayer='this.activePlayer'
                  v-on:changePlayer="changePlayer"></MyCell>
        </td>
      </tr>
      <tr>
        <td>
          <MyCell name="7" @click="this.cells[7] = this.activePlayer" :activePlayer='this.activePlayer'
                  v-on:changePlayer="changePlayer"></MyCell>
        </td>
        <td>
          <MyCell name="8" @click="this.cells[8] = this.activePlayer" :activePlayer='this.activePlayer'
                  v-on:changePlayer="changePlayer"></MyCell>
        </td>
        <td>
          <MyCell name="9" @click="this.cells[9] = this.activePlayer" :activePlayer='this.activePlayer'
                  v-on:changePlayer="changePlayer"></MyCell>
        </td>
      </tr>
      </tbody>
    </table>
    <MyStatus class="TurnSide status">Ходит
      <img ref="turnImg" class="turnImg" alt="O" v-if="this.activePlayer==='X'"
           src="@/components/UI/pics/ZeroPlayer1.svg">
      <img ref="turnImg" class="turnImg" alt="X" v-if="this.activePlayer==='O'"
           src="@/components/UI/pics/CrossPlayer2.svg">
    </MyStatus>
  </div>
</template>

<script>
import MyCell from "@/components/UI/Cell.vue";
import MyStatus from "@/components/UI/MyStatus.vue";
import MyTimer from "@/components/UI/MyTimer.vue";

export default {
  name: "MyGrid",
  props: ['pushName', 'markOfCell'],
  components: {MyStatus, MyCell, MyTimer},
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
        this.activePlayer = 'X';
      } else {
        this.activePlayer = 'O';
      }
      this.moves++;
      this.$emit('activePlayer');
      this.changeGameStatus();
    },
    areEqual() { // Вспомогательная функция для определения наличия победной комбинации.
      let len = arguments.length;
      for (let i = 1; i < len; i++) {
        if (arguments[i] === '' || arguments[i] !== arguments[i - 1])
          return false;
      }
      return true;
    }
  },
  checkForWin() {
    for (let i = 0; i < this.winConditions.length; i++) {
      let wc = this.winConditions[i];
      let cells = this.cells;
      if (this.areEqual(cells[wc[0]], cells[wc[1]], cells[wc[2]])) {
        return true;
      }
    }
    return false;
  },
  changeGameStatus() {
    if (this.checkForWin()) {
      this.$emit('win', this.activePlayer);
      alert('Win!')
      return 'win';
    } else if (this.moves === 9) {
      return 'draw';
    } else {
      return 'turn';
    }
  }
}

</script>

<style scoped>
.gameBlock {
}

.grid {
  margin: 0 auto;
}

.timer {
  width: 8em;
  height: 3.5em;
  margin: 0 auto;
}

.status {
  height: 3em;
  width: 20em;
  margin: 0 auto;
}

.turnImg {
  height: 1.5em;
  width: 1.5em;
  margin-left: 0.75em;
}
</style>