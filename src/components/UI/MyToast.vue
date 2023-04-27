<template>
    <div class="success">
        <div class="toast">
            <div class="toast-content">
                <i class="check"><img class="checkImg" alt="✔" src="@/components/UI/pics/check-solid.svg"></i>

                <div class="message">
                    <span class="text text-1">Успешно!</span>
                    <span class="text text-2"><slot></slot></span>
                </div>
            </div>
            <i class="close" @click="closeToastSuccess()"><img alt="☓" src="@/components/UI/pics/xmark-solid.svg"></i>
            <div class="progress"></div>
        </div>
    </div>
    <div class="failed">
        <div class="toast">
            <div class="toast-content">
                <i class="check"><img class="checkImg" alt="☓" src="@/components/UI/pics/xmark-solid.svg"></i>

                <div class="message">
                    <span class="text text-1">Ошибка!</span>
                    <span class="text text-2">Недостаточно прав доступа</span>
                </div>
            </div>
            <i class="close" @click="closeToastFailed()"><img alt="☓" src="@/components/UI/pics/xmark-solid.svg"></i>
            <div class="progress"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MyToast",
    data() {
    },
    methods: {
        activateSuccess() {
            let timer1, timer2;
            document.querySelector(".success .toast").classList.add("active");
            document.querySelector(".success .progress").classList.add("active");

            timer1 = setTimeout(() => {
                this.closeToastSuccess(timer1, timer2)
            }, 5000); //1s = 1000 milliseconds
            timer2 = setTimeout(() => {
                this.closeToastSuccess(timer1, timer2)
            }, 5300);
        },
        closeToastSuccess(timer1, timer2) {
            document.querySelector(".success .toast").classList.remove("active");
            setTimeout(() => {
                document.querySelector(".success .progress").classList.remove("active");
            }, 300);

            clearTimeout(timer1);
            clearTimeout(timer2);
        },
        activateFailed() {
            let timer1, timer2;
            document.querySelector(".failed .toast").classList.add("active");
            document.querySelector(".failed .progress").classList.add("active");

            timer1 = setTimeout(() => {
                this.closeToastFailed(timer1, timer2)
            }, 5000); //1s = 1000 milliseconds
            timer2 = setTimeout(() => {
                this.closeToastFailed(timer1, timer2)
            }, 5300);
        },
        closeToastFailed(timer1, timer2) {
            document.querySelector(".failed .toast").classList.remove("active");
            setTimeout(() => {
                document.querySelector(".failed .progress").classList.remove("active");
            }, 300);

            clearTimeout(timer1);
            clearTimeout(timer2);
        }
    }
}
</script>

<style scoped>
.toast {
    position: fixed;
    top: 70px;
    right: 30px;
    border-radius: 12px;
    background: #fff;
    padding: 20px 35px 20px 25px;
    box-shadow: 0 6px 20px -5px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transform: translateX(calc(100% + 30px));
    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.35);
}

.toast.active {
    transform: translateX(0%);
}

.toast .toast-content {
    display: flex;
    align-items: center;
}

.toast-content .check {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 35px;
    min-width: 35px;
    background-color: #60C2AA;
    color: #fff;
    font-size: 20px;
    border-radius: 50%;
}

.checkImg {
    height: 80%;
    width: 80%;
}

.toast-content .message {
    display: flex;
    flex-direction: column;
    margin: 0 20px;
}

.message .text {
    font-size: 16px;
    font-weight: 400;
    color: #666666;
}

.message .text.text-1 {
    font-weight: 600;
    color: #333;
}

.toast .close {
    position: absolute;
    top: 10px;
    height: 20px;
    width: 20px;
    right: 15px;
    padding: 5px;
    cursor: pointer;
    opacity: 0.7;
}

.toast .close:hover {
    opacity: 1;
}

.toast .progress {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    width: 100%;

}

.toast .progress:before {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    height: 100%;
    width: 100%;
    background-color: #60C2AA;
}

.progress.active:before {
    animation: progress 5s linear forwards;
}

@keyframes progress {
    100% {
        right: 100%;
    }
}
</style>