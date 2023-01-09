<template v-model="markOfCell">
  <button ref="btn" class="default" v-on:click="Step(this.activePlayer)">
    <img alt="X" ref="cross" class="cross" width="185" height="197" src="@/components/UI/pics/cross.svg">
    <img alt="O" ref="zero" class="zero" width="185" height="197" src="@/components/UI/pics/zero.svg">
  </button>
</template>

<script>
export default {
  name: "MyCell",
  props: ['activePlayer'],
  data() {
    return {
      markOfCell: '',
    }
  },
  methods: {
    Step(player) {
      if (player === 'O') {
        this.$refs.cross.style.display = 'block';
        this.markOfCell = 'X';
      } else {
        this.$refs.zero.style.display = 'block';
        this.markOfCell = 'O';
      }
      this.$refs.btn.disabled = true;
      this.$emit('changePlayer', 'markOfCell');
    }
  }
}
</script>

<style scoped>
.default {
  gap: 10px;
  background: #FFFFFF;
  border-style: none;
  border-radius: 12px;
  width: 12.5em;
  height: 12.5em;
  margin: 0.1em;
}

.default:hover {
  background: #F7F7F7;
}

.cross {
  display: none;
  margin: auto;
}

.zero {
  display: none;
  margin: auto;
}
</style>