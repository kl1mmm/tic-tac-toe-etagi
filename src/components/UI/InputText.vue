<template>
  <input class="" type="text">
</template>

<script>
export default {
  name: "InputText"
}
</script>

<style scoped>
input {
  box-sizing: border-box;
  padding: 12px 20px;
  gap: 8px;
  background: #FFFFFF;
  border: #DCDCDF solid 1px;
  border-radius: 12px;
  resize: none;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #B1B1B7;
}

input:valid {
  color: #373745;
}
input:hover {
  border: #60C2AA solid 1px;
  transition: 0.2s;
}
input:focus {
  border: #3BA189 solid 1px;
  transition: 0.2s;
}
.Invalid-input {
  border: #E93E3E solid 1px;
  transition: 0.1s;
}

</style>