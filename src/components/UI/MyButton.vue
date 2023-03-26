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
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;
  align-content: center;
  transition: background 0.1s ease-in;
}

button:hover {
  background: #3BA189;
  transition: background 0.15s ease-out;
}

button:disabled {
  background: rgba(96, 194, 170, 0.3);
}

.Secondary {
  background: #F7F7F7;
  color: #373745;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.24px;
  font-style: normal;
}

.Secondary:hover {
  background: #DCDCDF;
  transition: 0.05s;
}

.Secondary:disabled {
  background: #F7F7F7;
  opacity: 0.3;
}

.MSmall {
  padding: 8px 16px;
  gap: 8px;
  border-radius: 8px;
}

.SSmall {
  padding: 8px 16px;
  gap: 8px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.25px;
}

@media screen and (max-width: 770px) {
  .MSmall {
    padding: 8px 16px;
    gap: 8px;
    border-radius: 8px;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
  }
}
</style>