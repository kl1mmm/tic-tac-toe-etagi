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