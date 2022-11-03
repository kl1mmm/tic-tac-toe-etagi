<template>
  <div class="bubble">
    <div class="upper_info">
    <div class="name"></div>
    <div class="time"></div>
    </div>
    <div class="msg"></div>
  </div>
</template>

<script>
export default {
  name: "ChatMsg"
}
</script>

<style scoped>
.bubble {
  border-radius: 16px 16px 16px 0;
  box-shadow: 0 2px 6px rgba(44, 57, 121, 0.1);
  background: #FFFFFF;
  font-size: 14px;
  font-style: normal;
  gap: 0.5em;
}

.name {
  color: #60C2AA;
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
  padding: 0.5em 0.75em 0 0.75em;
}

.upper_info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 0.75em;
}
</style>