<template v-model="markOfCell">
    <button ref="btn" class="default" v-on:click="Step(this.activePlayer)">
        <img alt="X" ref="cross" class="cross" src="@/components/UI/pics/cross.svg">
        <img alt="O" ref="zero" class="zero" src="@/components/UI/pics/zero.svg">
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

.cross, .zero {
    width: 100%;
    height: 100%;
}

.winCross, .winCross:hover {
    background: #CFEDE6;
}

.winZero, .winZero:hover {
    background: #F3BBD0;
}

@media screen and (max-width: 1600px) {
    .default {
        width: 10.5em;
        height: 10.5em;
    }
}

@media screen and (max-width: 1336px) {
    .default {
        width: 10em;
        height: 10em;
    }
}

@media screen and (max-width: 905px) {
    .default {
        box-shadow: 0 0 10px 3px rgba(44, 57, 121, 0.1);
    }
}
</style>