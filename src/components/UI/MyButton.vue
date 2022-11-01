<template>
  <button type="submit">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "MyButton"
}
</script>

<style scoped>
button {
  background: #60C2AA;
  padding: 12px 20px;
  gap: 8px;
  border-color: transparent;
  border-radius: 12px;
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;
  align-content: center;
}

button:hover {
  background: #3BA189;
  transition: 0.05s;
}

button:disabled {
  background: rgba(96, 194, 170, 0.3);
}
</style>