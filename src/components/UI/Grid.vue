<template>
  <div>
    <table class="grid">
      <tbody>
      <tr>
        <td>
          <MyCell name="1"></MyCell>
        </td>
        <td>
          <MyCell name="2"></MyCell>
        </td>
        <td>
          <MyCell name="3"></MyCell>
        </td>
      </tr>
      <tr>
        <td>
          <MyCell name="4"></MyCell>
        </td>
        <td>
          <MyCell name="5"></MyCell>
        </td>
        <td>
          <MyCell name="6"></MyCell>
        </td>
      </tr>
      <tr>
        <td>
          <MyCell name="7"></MyCell>
        </td>
        <td>
          <MyCell name="8"></MyCell>
        </td>
        <td>
          <MyCell name="9"></MyCell>
        </td>
      </tr>
      </tbody>
    </table>
    <div class="status">В разработке!</div>
  </div>
</template>

<script>
import MyCell from "@/components/UI/Cell.vue";

export default {
  name: "MyGrid",
  components: {MyCell},
  data() {
    return {
      activePlayer: 'O',
      gameStatus: 'turn',
      gameStatusMessage: `O's turn`,
      gameStatusColor: 'statusTurn',
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
  watch: {
    gameStatus() {
      if (this.gameStatus === 'win') {
        this.gameStatusColor = 'statusWin'
        this.gameStatusMessage = `${this.activePlayer} Wins !`
        return
      } else if (this.gameStatus === 'draw') {
        this.gameStatusColor = 'statusDraw'
        this.gameStatusMessage = 'Draw !'
        return
      }
      this.gameStatusMessage = `${this.activePlayer}'s turn`
    }
  },
  methods: {
    computed: {
      changePlayer() {
        this.activePlayer = this.nonActivePlayer();
      },
      nonActivePlayer() {
        if (this.activePlayer === 'O') {
          return 'X'
        } else {
          return 'O'
        }
      },
      gameIsWon() {
        Event.$emit('win', this.activePlayer)
        this.gameStatusMessage = `${this.activePlayer} Wins !`
        Event.$emit('freeze')
        return 'win'
      },
      changeGameStatus() {
        if (this.checkForWin()) {
          return this.gameIsWon()
        } else if (this.moves === 9) {
          return 'draw'
        } else {
          return 'turn'
        }
      },
      areEqual() {      // Вспомогательная функция для сравнения значений ячейки
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
            return true
          }
        }
        return false
      }
    }
  },
  mounted() {
    Event.$on('strike', (cellNumber) => {
      this.cells[cellNumber] = this.activePlayer;
      this.moves++;
      this.gameStatus = this.changeGameStatus();
      this.changePlayer();
    })
    Event.$on('gridReset', () => {
      Object.assign(this.$data, this.$options.data());
    })
  }
}
</script>

<style scoped>
.grid {
  width: 100%;
  height: 100%;
  border-collapse: collapse;
}
</style>