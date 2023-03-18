<template>
  <div class="gameBlock">
    <MyTimer class="timer" ref="timer"></MyTimer>
    <table class="grid">
      <tbody>
      <tr>
        <td>
          <MyCell id="1" @click="changeGameStatus" :activePlayer='activePlayer'></MyCell>
        </td>
        <td>
          <MyCell id="2" @click="changeGameStatus" :activePlayer='activePlayer'></MyCell>
        </td>
        <td>
          <MyCell id="3" @click="changeGameStatus" :activePlayer='activePlayer'></MyCell>
        </td>
      </tr>
      <tr>
        <td>
          <MyCell id="4" @click="changeGameStatus" :activePlayer='activePlayer'></MyCell>
        </td>
        <td>
          <MyCell id="5" @click="changeGameStatus" :activePlayer='activePlayer'></MyCell>
        </td>
        <td>
          <MyCell id="6" @click="changeGameStatus" :activePlayer='activePlayer'></MyCell>
        </td>
      </tr>
      <tr>
        <td>
          <MyCell id="7" @click="changeGameStatus" :activePlayer='activePlayer'></MyCell>
        </td>
        <td>
          <MyCell id="8" @click="changeGameStatus" :activePlayer='activePlayer'></MyCell>
        </td>
        <td>
          <MyCell id="9" @click="changeGameStatus" :activePlayer='activePlayer'></MyCell>
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
  props: ['playersInfo', 'markOfCell', 'inGameStatus'],
  components: {MyStatus, MyCell, MyTimer},
  data() {
    return {
      activePlayer: 'O',
      gameStatus: 'Turn',
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
    areEqual() { // Вспомогательная функция для определения наличия победной комбинации.
      let len = arguments.length;
      for (let i = 1; i < len; i++) {
        if (arguments[i] === '' || arguments[i] !== arguments[i - 1])
          return false;
      }
      return true;
    },
    checkForWin() {
      for (let i = 0; i < this.winConditions.length; i++) {
        let wc = this.winConditions[i];
        let cells = this.cells;
        if (this.areEqual(cells[wc[0]], cells[wc[1]], cells[wc[2]])) {
          return wc;
        }
      }
      return null;
    },
    changeGameStatus(event) {
      this.moves++;
      this.cells[Number(event.target.id)] = this.activePlayer;
      this.gameStatus = 'Win';
      let wc = this.checkForWin();
      if (wc !== null) {
        this.$refs.timer.stopTheTimer();
        this.$emit('gameEnd', this.gameStatus);
        if (this.cells[wc[0]] === 'X') {
          for (let i = 0; i <= wc.length; i++) {
            document.getElementById(String(wc[i])).classList.add('winZero');
          }
        } else if (this.cells[wc[0]] === 'O') {
          for (let i = 0; i <= wc.length; i++) {
            document.getElementById(String(wc[i])).classList.add('winCross');
          }
        }
        return 'Win';
      } else if ((this.moves === 9) & (wc === null)) {
        this.$refs.timer.stopTheTimer();
        this.gameStatus = 'Draw';
        this.$emit('gameEnd', this.gameStatus);
        return 'Draw';
      } else {
        this.changePlayer();
        return 'Turn';
      }
    },
    changePlayer() {
      if (this.activePlayer === 'O') {
        this.activePlayer = 'X';
      } else {
        this.activePlayer = 'O';
      }
      this.$emit('activePlayer');
    }
  }
}
</script>

<style scoped>
.gameBlock {
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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