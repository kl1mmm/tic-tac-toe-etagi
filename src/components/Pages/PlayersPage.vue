<template>
    <div class="wrapper">
        <MyNavbar style="width: 100%;"></MyNavbar>
        <div class="screen">
            <MyToast ref="toast">Изменения внесены</MyToast>
            <MyPopUp @addNewPlayer="addNewPlayer" class="Popup" @closePopup="closePopupInfo"></MyPopUp>
            <div class="block">
                <div class="top-of-table">
                    <div class="table-naming">
                        Список игроков
                    </div>
                    <MyButton class="btnAddPlayer" @click="showPopupInfo()" @closePopup="closePopupInfo()">Добавить
                        игрока
                    </MyButton>
                </div>
                <div class="table">
                    <MySpreadsheet class="spreadSheet">
                        <thead>
                        <tr>
                            <th class="row">ФИО</th>
                            <th class="row">Возраст</th>
                            <th class="row">Пол</th>
                            <th class="row">Статус</th>
                            <th class="row">Создан</th>
                            <th class="row">Изменён</th>
                            <th class="row"></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="player in playersData" :key="player.id">
                            <td class="row">
                                {{ [player.last_name, player.first_name, player.profile.patronymic_name].join(' ') }}
                            </td>
                            <td class="row">
                                {{
                                Math.abs(Math.round((((new Date() - new Date(player.profile.birth_date)) / 1000) / (60 * 60 * 24)) / 365.25))
                                }}
                            </td>
                            <td class="row">
                                <img alt="Мужской" class="sex" src="@/components/UI/pics/MaleSex.svg"
                                     v-if="player.profile.sex === 'М'">
                                <img alt="Женский" class="sex" src="@/components/UI/pics/FemaleSex.svg"
                                     v-if="player.profile.sex === 'Ж'">
                            </td>
                            <td class="row">
                                <MyStatus class="M Free" v-if="player.is_active"
                                          style="width: 75%; padding: 0.15em 0.2em; margin-right: 2em; text-align: center">
                                    Активен
                                </MyStatus>
                                <MyStatus class="M Blocked" v-if="!player.is_active"
                                          style="width: 75%; padding: 0.15em 0.2em; margin-right: 2em; text-align: center">
                                    Заблокирован
                                </MyStatus>
                            </td>
                            <td class="row">{{
                                (Intl.DateTimeFormat('ru', {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric"
                                }).format(new Date(player.date_joined))).split(' г.')[0]
                                }}
                            </td>
                            <td class="row">{{
                                (Intl.DateTimeFormat('ru', {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric"
                                }).format(new Date(player.profile.edited_date))).split(' г.')[0]
                                }}
                            </td>
                            <td class="row">
                                <MyButton class="Secondary MSmall btnBlock" v-if="player.is_active"
                                          @click="blockTheUser(player.id, player)">
                                    <img alt="Ø" class="blockImg" src="@/components/UI/pics/Stop.svg">Заблокировать
                                </MyButton>
                                <MyButton class="Secondary MSmall btnBlock" v-if="!player.is_active"
                                          @click="unblockTheUser(player.id, player)">Разблокировать
                                </MyButton>
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
import MyStatus from "@/components/UI/MyStatus";
import MyButton from "@/components/UI/MyButton.vue";
import MyPopUp from "@/components/UI/MyPopUp.vue";
import axios from "axios";
import store from "@/store";
import MyToast from "@/components/UI/MyToast.vue";
import moment from "moment";

export default {
    name: "SessionsPage",
    components: {MyToast, MyButton, MyStatus, MySpreadsheet, MyNavbar, MyPopUp},
    data() {
        return {
            userID: '',
            playersData: []
        }
    },
    methods: {
        showPopupInfo() {
            document.querySelector(".Popup").classList.add("active");
        },
        closePopupInfo() {
            document.querySelector(".Popup").classList.remove("active");
        },
        blockTheUser(id, player) {
            axios
                .patch('http://127.0.0.1:8000/api/v1/profile/' + id + '/', {
                        'is_active': false,
                        'profile':
                            {
                                'edited_date': moment().format()
                            }
                    },
                    {headers: {"Authorization": 'Token ' + store.getters.auth.token}})
                .then((response) => {
                    this.playersData[this.playersData.indexOf(player)] = response.data
                    this.$refs.toast.activateSuccess('Пользователь заблокирован')
                })
                .catch(error => {
                    console.log(error);
                    this.$refs.toast.activateFailed('Недостаточно прав')
                });

        },
        unblockTheUser(id, player) {
            axios
                .patch('http://127.0.0.1:8000/api/v1/profile/' + id + '/',
                    {
                        'is_active': true,
                        'profile':
                            {
                                'edited_date': moment().format(),
                            }
                    },
                    {headers: {"Authorization": 'Token ' + store.getters.auth.token}})
                .then((response) => {
                    this.playersData[this.playersData.indexOf(player)] = response.data
                    this.$refs.toast.activateSuccess('Пользователь разблокирован')
                })
                .catch(error => {
                    console.log(error);
                    this.$refs.toast.activateFailed(error.response.data.detail)
                });
        },
        addNewPlayer(username, first_name, last_name, email, password, patronymic_name, birth_date, sex) {
            axios
                .post('http://127.0.0.1:8000/api/v1/create_user/',
                    {
                        'username': username,
                        'first_name': first_name,
                        'last_name': last_name,
                        'email': email,
                        'password': password,
                        'date_joined': moment().format(),
                        'is_active': true,
                        'profile': {
                            'patronymic_name': patronymic_name,
                            'sex': sex,
                            'edited_date': moment().format(),
                            'birth_date': moment(birth_date).format(),
                        }
                    },
                    {headers: {"Authorization": 'Token ' + store.getters.auth.token}})
                .then((response) => {
                    console.log(response)
                    this.$refs.toast.activateSuccess('Учётная запись создана')
                    this.playersData.push({
                        'username': username,
                        'first_name': first_name,
                        'last_name': last_name,
                        'email': email,
                        'password': password,
                        'date_joined': moment().format(),
                        'is_active': true,
                        'profile': {
                            'patronymic_name': patronymic_name,
                            'sex': sex,
                            'edited_date': moment().format(),
                            'birth_date': moment(birth_date).format(),
                        }
                    })
                })
                .catch(error => {
                    console.log(error);
                    this.$refs.toast.activateFailed(error.response.data.detail)
                })
        }
    },
    mounted() {
        axios.get('http://127.0.0.1:8000/api/v1/profiles/', {headers: {"Authorization": 'Token ' + store.getters.auth.token}})
            .then((response) => {
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
    overflow: clip;
}

.screen {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.block {
    background: #ffffff;
    width: 65%;
    height: 90%;
    box-shadow: 0 4px 20px rgba(44, 57, 121, 0.09);
    border-radius: 40px;
    padding-left: 2.5%;
    padding-right: 2.5%;
}

.top-of-table {
    display: flex;
    justify-content: space-between;
    margin-top: 4%;
}

.table-naming {
    line-height: 200%;
    font-weight: 700;
    font-size: 1.5em;
    text-align: left;
}

.btnBlock {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 11em;
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

.Popup {
    padding: 1.5em;
    position: fixed;
    top: 35%;
    left: 37.5%;
    width: 20%;

}

@media screen and (max-width: 1600px) {
    .block {
        width: 75%;
    }

    .Popup {
        top: 25%;
        left: 32.5%;
        width: 30%;
    }
}

@media screen and (max-width: 1336px) {
    .block {
        width: 85%;
    }

    .table-naming {
        font-size: 1.3em;
    }

    .Popup {
        top: 25%;
        left: 32.5%;
        width: 40%;
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

    .top-of-table {
        margin-right: 1.75em;
    }

    .spreadSheet {
        display: block;
        overflow-x: auto;
        white-space: nowrap;
    }

    .Popup {
        top: 12.5%;
        left: 20%;
        width: 50%;
    }

    .btnAddPlayer {
        height: 2.75em;
        display: flex;
        align-items: center;
    }
}

@media screen and (max-width: 505px) {
    .Popup {
        top: 12.5%;
        left: 8.5%;
        width: 70%;
    }
}
</style>
