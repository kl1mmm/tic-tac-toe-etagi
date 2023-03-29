<template>
    <table class="spread">
        <slot>

        </slot>
    </table>
</template>

<script>
export default {
    name: "MySpreadsheet"
}
</script>

<style scoped>
.spread {
    width: 100%;
    margin: 0 auto;
}
</style>