<script setup>
import { ref } from 'vue'

const API_BASE = "https://m3h-yukatazawa-containerapp2.whitestone-105fd339.japaneast.azurecontainerapps.io/api"

const name = ref('')
const stock = ref(0)

//POST /apiで追加
const addItem = async () => {
    if(!name.value || stock.value < 0) {
        alert("名前と在庫を正しく入力してください")
        return
    }

await fetch(API_BASE, {
    method: "POST",
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify({ 製品名: name.value, 在庫数: Number(stock.value) })
})

alert("追加しました！")
name.value = ''
stock.value = 0
}
</script>

<template>
    <h2>商品追加</h2>

    <div>
        <label>商品名</label>
        <input v-model="name" />
    </div>

    <div style="margin-top: 8px;">
     <label>在庫数：</label>
     <input type="number" v-model="stock" />
    </div>

    <button style="margin-top: 16px;" @click="addItem">追加</button>
</template>