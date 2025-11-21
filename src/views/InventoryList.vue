<script setup>
import { ref, onMounted } from 'vue'
import ItemCard from '../components/ItemCard.vue'

const API_GET = "https://m3h-yukatazawa-containerapp2.whitestone-105fd339.japaneast.azurecontainerapps.io/api/SELECT"
const API_INSERT = "https://m3h-yukatazawa-containerapp2.whitestone-105fd339.japaneast.azurecontainerapps.io/api/INSERT"

//簡単にローカル在庫データ
const items = ref([])

//GET /apiで全権取得
const loadItems = async () => {
    const res = await fetch(API_GET, { method: "GET" })
    items.value = await res.json()
    console.log(items.value)
}

//  PUT /apiで在庫増減
const increase = async ( item ) => {
    await fetch(API_BASE, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id:item.在庫ID, change: 1})
    })
    await loadItems()
}
const decrease = async (item) => {
    await fetch(API_BASE, {
        method: "PUT",
        headers: {"Content-Type": "application/json" },
        body: JSON.stringify({ id: item.在庫ID, change: -1 })
    })
    await loadItems()
}

onMounted(() => {
    loadItems()
})
</script>

<template>
    <h2>在庫一覧</h2>

    <ItemCard
    v-for="item in items"
    :key="item.在庫ID"
    :item="item"
    @inc="increase(item)"
    @dec="decrease(utem)"
    />
</template>