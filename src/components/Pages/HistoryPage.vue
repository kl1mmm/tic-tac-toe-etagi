<template>
    <div class="wrapper">
        <MyNavbar style="width: 100%;"></MyNavbar>
        <div class="screen">
            <div class="block">
                <div class="table-naming">
                    История игр
                </div>
                <div class="table">
                    <MySpreadsheet class="spreadSheet PC">
                        <thead>
                        <tr>
                            <th class="row">Игроки</th>
                            <th class="row"></th>
                            <th class="row"></th>
                            <th class="row">Дата</th>
                            <th class="row">Время игры</th>
                        </tr>
                        </thead>
                        <tbody v-for="game in gamesData" :key="game.id">
                        <tr>
                            <td class="row game"><img alt="0" class="gameImg"
                                                      src="@/components/UI/pics/ZeroPlayer1.svg">{{
                                [game.p1Info.last_name, game.p1Info.first_name, game.p1Info.profile.patronymic_name].join(' ')
                                }}
                                <img class="winner" alt="Победитель"
                                     src="@/components/UI/pics/GameWinner.svg"
                                     v-if="game.winner === 'O'">
                            </td>
                            <div class="versus row phoneDel">против</div>
                            <td class="row game"><img alt="X" class="gameImg"
                                                      src="@/components/UI/pics/CrossPlayer2.svg">{{
                                [game.p2Info.last_name, game.p2Info.first_name, game.p2Info.profile.patronymic_name].join(' ')
                                }}
                                <img class="winner" alt="Победитель"
                                     src="@/components/UI/pics/GameWinner.svg"
                                     v-if="game.winner === 'X'">
                            </td>
                            <td class="row">{{
                                (Intl.DateTimeFormat('ru', {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric"
                                }).format(new Date(game.date))).split(' г.')[0]
                                }}
                            </td>
                            <td class="row">
                                {{
                                (game.game_timing).split(':')[0] + ' мин. ' + (game.game_timing).split(':')[1] + ' сек.'
                                }}
                            </td>
                        </tr>
                        </tbody>
                    </MySpreadsheet>
                    <MySpreadsheet class="spreadSheet phone">
                        <thead>
                        <tr>
                            <th class="row">Игроки</th>
                            <th class="row phoneDel"></th>
                            <th class="row">Дата</th>
                            <th class="row">Время игры</th>
                        </tr>
                        </thead>
                        <tbody v-for="game in gamesData" :key="game.id">
                        <tr>
                            <div class="phoneColumn">
                                <td class="row"><img alt="0" class="gameImg"
                                                     src="@/components/UI/pics/ZeroPlayer1.svg">{{
                                    [game.p1Info.last_name, (game.p1Info.first_name[0] + '.'), (game.p1Info.profile.patronymic_name[0] + '.')].join(' ')
                                    }}
                                    <img class="winner" alt="Победитель"
                                         src="@/components/UI/pics/GameWinner.svg"
                                         v-if="game.winner === 'O'">
                                </td>
                                <div class="versus row phoneDel">против</div>
                                <td class="row"><img alt="X" class="gameImg"
                                                     src="@/components/UI/pics/CrossPlayer2.svg">{{
                                    [game.p2Info.last_name, (game.p2Info.first_name[0] + '.'), (game.p2Info.profile.patronymic_name[0] + '.')].join(' ')
                                    }}
                                    <img class="winner" alt="Победитель"
                                         src="@/components/UI/pics/GameWinner.svg"
                                         v-if="game.winner === 'X'">
                                </td>
                            </div>
                            <td class="row">{{
                                (Intl.DateTimeFormat('ru', {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric"
                                }).format(new Date(game.date))).split(' г.')[0]
                                }}
                            </td>
                            <td class="row">{{
                                (game.game_timing).split(':')[0] + ' мин. ' + (game.game_timing).split(':')[1] + ' сек.'
                                }}
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
import axios from "axios";
import store from "@/store";

export default {
    name: "HistoryPage",
    components: {MySpreadsheet, MyNavbar},
    data() {
        return {
            gamesData: [],
        }
    },
    mounted() {
        axios.get('http://127.0.0.1:8000/api/v1/lastgames/', {headers: {"Authorization": 'Token ' + store.getters.auth.token}}).then((response) => {
            this.gamesData = response.data.results;
        })
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

.phone {
    display: none;
}

.PC {
    display: table;
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
    line-height: 1.5em;
}

tr {
    box-shadow: inset 0 -1px 0 #EEEFF5;
}


.gameImg {
    width: 1em;
    height: 1em;
    margin-right: 3%;
    vertical-align: sub;
}

.versus {
    margin-top: 21%;
    text-shadow: 0 0 1px black;
}

.winner {
    width: 1.25em;
    height: 1.25em;
    vertical-align: text-bottom;
}

@media screen and (max-width: 1600px) {
    .block {
        width: 70%;
    }
}

@media screen and (max-width: 1336px) {
    .block {
        width: 75%;
    }

    .table-naming {
        font-size: 1.35em;
    }
}

@media screen and (max-width: 905px) {
    .phone {
        display: table;
    }

    .PC {
        display: none;
    }

    .block {
        width: 100%;
        height: 95%;
        box-shadow: none;
        border-radius: 0;
    }

    MyNavbar {
        box-shadow: 0 2px 6px rgba(44, 57, 121, 0.1);
        border-radius: 0 0 16px 16px;
    }

    .phoneDel {
        display: none;
    }

    .phoneColumn {
        display: flex;
        flex-direction: column;
    }

    .gameImg {
        width: 0.9em;
        height: 0.9em;
    }

    .winner {
        width: 1em;
        height: 1em;
    }

    .table-naming {
        font-size: 1.25em;
    }
}
</style>