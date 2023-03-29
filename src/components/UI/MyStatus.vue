<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "MyStatus"
}
</script>

<style scoped>
div {
    text-align: center;
    vertical-align: middle;
    font-weight: 400;
}

.M {
    padding: 4px 12px;
    gap: 4px;
    border-radius: 6px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
    color: #FFFFFF;
}

.S {
    padding: 4px;
    gap: 4px;
    border-radius: 4px;
    font-size: 12px;
    line-height: 24px;
    letter-spacing: 0.25px;
    color: #FFFFFF;
}

.Free {
    background: #A8D37F;
}

.Blocked {
    background: #EC7777;
}

.InGame {
    background: #87CAE8;
}

.OutOfGame {
    background: #EDEDED;
    color: #373745;
}

.TurnSide {
    background: #373745;
    box-shadow: 0 4px 20px rgba(44, 57, 121, 0.09);
    border-radius: 12px;
    color: #ffffff;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 1.5em;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>