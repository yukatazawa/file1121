

<template>
    <v-container>
        <h1>在庫管理</h1>

        <v-row>
            <v-col cols="2">
                <v-text-field v-model="inventory.newItemId" label="在庫ID" type="number" />
            </v-col>
            <v-col cols="4">
                <v-text-field v-model="inventory.newItemName" label="製品名" />
            </v-col>
            <v-col cols="2">
                <v-text-field v-model="inventory.newItemQty" label="在庫数" type="number" />
            </v-col>

            <v-col cols="4">
                <v-btn color="primary" @click="inventory.insertItem()">追加</v-btn>
                <v-btn color="secondary" @click="inventory.loadItems()">在庫取得</v-btn>
            </v-col>
        </v-row>

        <v-data-table
            :items="inventory.items"
            :headers="headers"
            class="mt-4"
        >
            <template v-slot:item.actions="{ item }">
                <v-btn small color="warning" @click="editItem(item)">編集</v-btn>
                <v-btn small color="error" @click="inventory.deleteItem(item.在庫ID)">削除</v-btn>
            </template>
        </v-data-table>

        <v-dialog v-model="inventory.isEditDialogOpen" max-width="500">
            <v-card>
                <v-card-title>在庫編集</v-card-title>
                <v-card-text>
                    <v-text-field v-model="inventory.editItem.在庫ID" label="在庫ID" type="number" disabled/>
                    <v-text-field v-model="inventory.editItem.製品名" label="製品名"/>
                    <v-text-field v-model="inventory.editItem.在庫数" label="在庫数" type="number"/>
                </v-card-text>
                <v-card-actions>
                    <v-btn color="primary" @click="inventory.updateItem()">保存</v-btn>
                    <v-btn color="secondary" @click="inventory.isEditDialogOpen=false">キャンセル</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script setup>
import { useInventoryStore } from '../stores/inventory'
import { ref, computed } from 'vue'

const inventory = useInventoryStore()

const headers = [
    { text: '在庫ID', value: '在庫ID'},
    { text: '製品名', value: '製品名'},
    { text: '在庫数', value:'在庫数'},
    { text: '操作', value:'actions', sortable: false }
]

function editItem(item) {
    inventory.editItem = { ...item}
    inventory.isEditDialogOpen = true
}
</script>

