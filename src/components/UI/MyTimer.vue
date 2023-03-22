<template>
  <div id="clock">
    <span class="time" ref="watch">00:00</span>
  </div>
</template>

<script>
export default {
  name: "MyTimer",
  data() {
    return {
      timeMin: 0,
      timeSec: 0,
      milliseconds: 0,
      interval: null,
    }
  },
  mounted() {
    const watch = this.$refs.watch;
    clearInterval(this.interval);
    localStorage.removeItem('startTime');
    localStorage.setItem('startTime', (new Date().getTime()).toString());
    this.interval = setInterval(() => {
      this.milliseconds += 10;
      this.timeSec = (((new Date().getTime()) - localStorage.getItem('startTime')) / 1000);
      if (this.timeSec >= 60) {
        this.timeMin = Math.floor(this.timeSec / 60);
        let sec = Math.floor(this.timeSec - (this.timeMin * 60))
        watch.innerHTML = (('0' + this.timeMin).slice(-2)) + ":" + (('0' + sec).slice(-2));
      } else {
        watch.innerHTML = (('0' + this.timeMin).slice(-2)) + ":" + (('0' + Math.floor(this.timeSec)).slice(-2));
      }
      // let dateTimer = new Date(this.milliseconds);
      // watch.innerHTML = ('0' + dateTimer.getUTCMinutes()).slice(-2) + ':' + ('0' + dateTimer.getUTCSeconds()).slice(-2);
    }, 10)
  },
  methods: {
    stopTheTimer() {
      clearInterval(this.interval);
    }
  }
}
</script>

<style scoped>

#clock {
  background: #EDEDED;
  padding: 1%;
  border-radius: 12px;
  display: flex;
  justify-content: center;
}

.time {
  font-weight: 900;
  font-size: 2.125em;
  letter-spacing: 0.015625em;
  color: #373745;
  align-self: center;
}

@media screen and (max-width: 1600px) {
  .time {
    font-size: 1.7em;
  }

  #clock {
    padding: 0.25%;
  }
}
</style>