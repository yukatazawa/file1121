import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useInventoryStore = defineStore('inventory', () => {
    const items = ref([])
    const newItemId = ref('')
    const newItemName = ref('')
    const newItemQty = ref('')

    //update用
    const editItem = ref({
        在庫ID: '',
        製品名: '',
        在庫数: ''
    })

    const isEditDialogOpen = ref(false)

    //SELECT
    async function loadItems() {
        try {
            const res = await fetch('https://m3h-yukatazawa-contanierapp1121.orangerock-62b17558.japaneast.azurecontainerapps.io/api/SELECT')
            //console.log('loadItems status:' ,res.status)
            const data = await res.json()
            //console.log('loadItems data',data)
            if (data && Array.isArray(data.List)) {
                items.value = data.List
            } else {
                console.warn('API形式が違います:', data )
                items.value = []
            }
            
            console.log('items updated:', items.value)
        } catch (err) {
            console.error('loadItems error:', err)
        }
    } 
    //INSERT
    async function insertItem() {
        const body = {
            在庫ID: newItemId.value,
            製品名: newItemName.value,
            在庫数: newItemQty.value
        }

        console.log("Insert body:", body)

        const res = await fetch("https://m3h-yukatazawa-contanierapp1121.orangerock-62b17558.japaneast.azurecontainerapps.io/api/INSERT", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        })
        

        console.log('Insert status:', res.status)
        console.log('Insert response:', await res.text())

        newItemId.value = ''
        newItemName.value = ''
        newItemQty.value = ''
        await loadItems() 

    } 

    //UPDATE
    async function updateItem() {
        
        const body = {
            在庫ID : Number(editItem.value.在庫ID),
            製品名 : editItem.value.製品名,
            在庫数 : Number(editItem.value.在庫数)
        }
        await fetch('https://m3h-yukatazawa-contanierapp1121.orangerock-62b17558.japaneast.azurecontainerapps.io/api/UPDATE', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        })

        isEditDialogOpen.value = false
        await loadItems()
        }

    //DELETE
    async function deleteItem(id) {
        try {
        const body = { 在庫ID: Number(id) }
        await fetch('https://m3h-yukatazawa-contanierapp1121.orangerock-62b17558.japaneast.azurecontainerapps.io/api/DELETE', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        })
        await loadItems()
    } catch (err) {
            console.error('fetch error:', err)
        }
    } 

    return {
        items,
        newItemId, newItemName, newItemQty, editItem, isEditDialogOpen, loadItems, insertItem, deleteItem ,updateItem
    }
})