<template>
    <div class="wrapper">
        <MyNavbar style="width: 100%;"></MyNavbar>
        <div class="screen">
            <div class="block">
                <div class="table-naming">
                    Рейтинг игроков
                </div>
                <div class="table">
                    <MySpreadsheet class="spreadSheet">
                        <thead>
                        <tr>
                            <th class="row">ФИО</th>
                            <th class="row">Всего игр</th>
                            <th class="row">Победы</th>
                            <th class="row">Проигрыши</th>
                            <th class="row">Процент побед</th>
                        </tr>
                        </thead>
                        <tbody v-for="player in playersData" :key="player.id">
                        <tr>
                            <td class="row namingPC">{{
                                [player.user.last_name, player.user.first_name, player.user.profile.patronymic_name].join(' ')
                                }}
                            </td>
                            <td class="row namingPhone" style="padding-right: 1em;">{{
                                [player.user.last_name, player.user.first_name].join(' ')
                                }}<br>{{
                                player.user.profile.patronymic_name
                                }}
                            </td>
                            <td class="row">{{ player.count_of_games }}</td>
                            <td class="row" style="color: #69B849;">{{ player.count_of_wins }}</td>
                            <td class="row" style="color: #E93E3E;">{{ player.count_of_loses }}</td>
                            <td class="row">
                                {{
                                Math.round(Number(player.count_of_wins) / Number(player.count_of_games)) * 100 + '%'
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

export default {
    name: "SessionsPage",
    components: {MySpreadsheet, MyNavbar},
    data() {
        return {
            playersData: []
        }
    },
    mounted() {
        axios.get('http://localhost:8000/api/v1/rating/').then((response) => {
            this.playersData = response.data.results;
        })
    }
}
</script>

<style scoped>
.wrapper {
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.screen {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.block {
    background: #ffffff;
    width: 50%;
    height: 90%;
    box-shadow: 0 4px 20px rgba(44, 57, 121, 0.09);
    border-radius: 40px;
    padding-left: 2.5%;
    padding-right: 2.5%;
}

.table-naming {
    font-weight: 700;
    font-size: 1.5em;
    line-height: 150%;
    margin-top: 4%;
    text-align: left;
}

.namingPhone {
    display: none;
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

@media screen and (max-width: 1600px) {
    .block {
        width: 70%;
    }
}

@media screen and (max-width: 1336px) {
    .block {
        width: 65%;
    }

    .table-naming {
        font-size: 1.35em;
    }
}

@media screen and (max-width: 905px) {
    MyNavbar {
        box-shadow: 0 2px 6px rgba(44, 57, 121, 0.1);
        border-radius: 0 0 16px 16px;
    }

    .block {
        width: 100%;
        height: 98%;
        box-shadow: none;
        border-radius: 0;
        margin-left: 1.75em;
    }

    .spreadSheet {
        display: block;
        overflow-x: auto;
        white-space: nowrap;
    }

    th {
        padding-right: 35px;
    }

    .namingPC {
        display: none;
    }

    .namingPhone {
        display: block;
    }
}

@media screen and (max-width: 455px) {
    th {
        padding-right: 1em;
    }
}
</style>