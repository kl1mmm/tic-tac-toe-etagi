<template>
    <div class="v-popup">
        <img class="closeImg" @click="closePopup()" alt="X" style="float: right" src="@/components/UI/pics/exit.svg">
        <div class="firstStep">
            <div class="nameTag">Добавить игрока</div>
            <div class="nickname">
                <div class="text" style="text-align: left;">ФИО</div>
                <InputText id="name" :value="fullName"
                           @change="fullName = $event.target.value"
                           @input="toggleFirstBtn"
                           class="inp" type="text"
                           placeholder="Иванов Иван Иванович"></InputText>
            </div>
            <div class="lowBlock">
                <div class="age">
                    <div class="text">День рождения</div>
                    <InputText id="birthday" :value="birthday"
                               @change="birthday = $event.target.value"
                               @input="toggleFirstBtn"
                               class="inp" type="date"></InputText>
                </div>
                <div class="sex">
                    <div class="text">Пол</div>
                    <label>
                        <input id='femaleInp' class='inpSex' type='radio' value='Ж'
                               @change="userSex = $event.target.value"
                               @input="toggleFirstBtn"
                               name='sex'>
                        <span class='woman'><img alt='Ж' class='picSex' src="@/components/UI/pics/FemaleSex.svg"></span>
                    </label>
                    <label>
                        <input id='maleInp' class='inpSex' type='radio' value='М'
                               @change="userSex = $event.target.value"
                               @input="toggleFirstBtn"
                               name='sex'>
                        <span class='man'><img alt='М' class="picSex" src="@/components/UI/pics/MaleSex.svg"></span>
                    </label>
                </div>
            </div>
            <MyButton disabled id="nextBtn" class="btnAdd" @click="firstStep">Далее</MyButton>
        </div>
        <div class="secondStep">
            <div class="nameTag">Введите данные</div>
            <div class="nickname">
                <div class="text" style="text-align: left;">Логин</div>
                <InputText id="login" :value="login"
                           @change="login = $event.target.value"
                           @input="toggleSecondBtn"
                           class="inp" type="text"
                           placeholder="Username"></InputText>
            </div>
            <div class="age">
                <div class="text">Эл. почта</div>
                <InputText id="email" :value="inbox"
                           @change="inbox = $event.target.value"
                           @input="toggleSecondBtn"
                           class="inp" type="email"
                           placeholder="emaxple@email.ru"></InputText>
            </div>
            <div class="password">
                <div class="text">Пароль</div>
                <label>
                    <InputText id="pass" :value="userPass"
                               @change="userPass = $event.target.value"
                               @input="toggleSecondBtn"
                               class="inp" type="password"
                               placeholder="Пароль"></InputText>
                </label>
            </div>
            <MyButton disabled id='btnAdd' class="btnAdd" @click="secondStep">Добавить</MyButton>
        </div>
    </div>
</template>

<script>
import InputText from "@/components/UI/InputText.vue";
import MyButton from "@/components/UI/MyButton.vue";
import {mask} from 'vue-the-mask';

export default {
    name: "MyPopUp",
    components: {MyButton, InputText},
    data() {
        return {
            first_name: '',
            last_name: '',
            patronymic_name: '',
            sex: '',
            birth_date: '',
            email: '',
            username: '',
            password: ''
        }
    },
    methods: {
        firstStep() {
            const nameInp = document.getElementById('name');
            const birthInp = document.getElementById('birthday');
            const radioM = document.getElementById('maleInp');
            const radioF = document.getElementById('femaleInp');

            if ((!(nameInp.value === '')) && (nameInp.value.split(' ').length === 3)) {
                this.first_name = this.fullName.split(' ')[1]
                this.last_name = this.fullName.split(' ')[0]
                this.patronymic_name = this.fullName.split(' ')[2]
            } else {
                nameInp.value = ''
                nameInp.style.border = '1px solid #E93E3E';
            }

            if (!(birthInp.value === '')) {
                this.birth_date = this.birthday
            } else {
                birthInp.value = ''
                birthInp.style.border = '1px solid #E93E3E';
            }

            if (!radioM.checked && !radioF.checked) {
                birthInp.style.border = '1px solid #E93E3E';
            } else {
                this.sex = this.userSex
            }

            if ((this.last_name && this.first_name && this.patronymic_name && this.birth_date && this.sex) !== '') {
                this.secondStepDisplay()
            }
        },
        secondStepDisplay() {
            document.querySelector('.firstStep').style.display = 'none';
            document.querySelector('.secondStep').style.display = 'block';
        },
        secondStep() {
            const userLogin = document.getElementById('login');
            const userEmail = document.getElementById('email');
            const userPass = document.getElementById('pass');

            if (!(userLogin.value === '')) {
                this.username = this.login;
            } else {
                userLogin.value = ''
                userLogin.style.border = '1px solid #E93E3E';
            }

            if (!(userEmail.value === '')) {
                this.email = this.inbox;
            } else {
                userEmail.value = ''
                userEmail.style.border = '1px solid #E93E3E';
            }

            if (!(userPass.value === '')) {
                this.password = this.userPass;
            } else {
                userPass.value = ''
                userPass.style.border = '1px solid #E93E3E';
            }

            if ((this.username && this.email && this.password) !== '') {
                this.addNewPlayer()
            }
        },
        addNewPlayer() {
            this.$emit('addNewPlayer', this.username, this.first_name, this.last_name, this.email, this.password, this.patronymic_name, this.birth_date, this.sex)
            this.closePopup();
        },
        toggleFirstBtn() {
            const nameInp = document.getElementById('name');
            const birthInp = document.getElementById('birthday');
            const radioM = document.getElementById('maleInp');
            const radioF = document.getElementById('femaleInp');
            const nextBtn = document.getElementById('nextBtn')

            nextBtn.disabled = !(((nameInp.value && birthInp.value) !== '') && (radioM.checked || radioF.checked));
        },
        toggleSecondBtn() {
            const userLogin = document.getElementById('login');
            const userEmail = document.getElementById('email');
            const userPass = document.getElementById('pass');
            const btnAdd = document.getElementById('btnAdd')

            btnAdd.disabled = (userLogin.value && userEmail.value && userPass.value) === '';
        },
        closePopup() {
            this.$emit('closePopup');
        },
    },
    directives: {mask}
}
</script>

<style scoped>
.v-popup {
    background: #FFFFFF;
    box-shadow: 3px 6px 24px rgba(44, 57, 121, 0.09);
    border-radius: 1em;
    transform: translateX(calc(300%));
    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.35);
}

.v-popup.active {
    transform: translateX(0%);
}

.nameTag {
    font-weight: 700;
    font-size: 1.5em;
    line-height: 150%;
    margin-top: 2em;
}

.text {
    font-weight: 500;
    font-size: 1em;
    line-height: 1.5em;
    margin-bottom: 0.5em;
}

.nickname {
    display: flex;
    flex-direction: column;
}

.lowBlock {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 3%;
}

.age {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

.firstStep .sex {
    margin-right: 5%;
}

.age .text, .sex .text, .password .text {
    text-align: left;
}

.firstStep .sex .text {
    margin-left: 7.5%;
}

.inpSex {
    display: none;
}

span {
    display: inline-block;
    width: 48px;
    height: 48px;
    border: 1px solid #DCDCDF;
    margin: 5px;
    font-size: 40px;
    line-height: 50px;
    text-align: center;
    border-radius: 1000px;
    opacity: 0.7;
}

.sex input:hover ~ span {
    border: 1px solid #60C2AA;
    opacity: 1;
}

.sex input:checked ~ span {
    border: 1px solid #60C2AA;
    background-color: #60C2AA;
    opacity: 1;
}

.picSex {
    width: 2em;
    height: 2em;
}

.btnAdd {
    margin-top: 3%;
}

.firstStep {
    display: block;
}

.secondStep {
    display: none;
}

.secondStep .nameTag {
    margin-top: 0.5em;
}

.secondStep .text {
    margin-bottom: 0.15em;
}

.secondStep > div {
    margin-bottom: 0.5em;
}

.password .inp {
    width: 100%;
}
</style>