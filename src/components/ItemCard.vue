<script setup>
defineProps({
    item: Object
})

defineEmits(['inc', 'dec'])
</script>

<template>
    <div class="card">
        <strong>{{ item.製品名 }}</strong>
        <div>在庫：{{ item.在庫数 }}</div>

        <button @click="$emit('inc')">+</button>
        <button @click="$emit('dec')">-</button>
    </div>
</template>

<style>
.card {
    border: 1px solid #ccc;
    padding: 12px;
    color: #000;
    margin-bottom: 10px;
    border-radius: 6px;
    max-width: 300px;
}
button {
    margin-right: 6px;
}
</style>