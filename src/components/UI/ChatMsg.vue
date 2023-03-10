<template>
  <div class="bubble zero" v-if="msg.side === 'Zero'">
    <div class="upper_info">
      <div class="name">{{ msg.userName }}</div>
      <div class="time">{{ msg.timeArr }}</div>
    </div>
    <div class="msg">{{ msg.Text }}</div>
  </div>
  <div class="bubble cross" v-if="msg.side === 'Cross'">
    <div class="upper_info">
      <div class="name">{{ msg.userName }}</div>
      <div class="time">{{ msg.timeArr }}</div>
    </div>
    <div class="msg">{{ msg.Text }}</div>
  </div>
</template>

<script>
export default {
  name: "ChatMsg",
  props: ['msg']
}
</script>

<style scoped>
.bubble {
  width: 80%;
  box-shadow: 0 2px 6px rgba(44, 57, 121, 0.1);
  background: #FFFFFF;
  font-size: 14px;
  font-style: normal;
  padding-bottom: 3%;
  gap: 0.5em;
  margin-bottom: 15px;
}

.cross {
  margin-left: 0;
  margin-right: auto;
  border-radius: 16px 16px 16px 0;
}

.zero {
  margin-right: 0;
  margin-left: auto;
  border-radius: 16px 16px 0 16px;
}

.cross .name {
  color: #60C2AA;
}

.zero .name {
  color: #E38BAC;
}

.name {
  line-height: 20px;
  font-weight: 500;
  padding-left: 0.75em;
}

.time {
  color: #898993;
  line-height: 20px;
  padding-right: 0.75em;
}

.msg {
  font-size: 16px;
  line-height: 24px;
  text-align: left;
  padding: 0.5em 0.75em 0 0.75em;
}

.upper_info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 0.75em;
}
</style>