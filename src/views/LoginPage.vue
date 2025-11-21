<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="4">
                <v-text-field v-model="username" label="ユーザー名"></v-text-field>
                <v-text-field v-model="password" label="パスワード" type="password"></v-text-field>
                <v-btn color="primary" @click="login">ログイン</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'

const auth = useAuthStore()
const router = useRouter()

const username = ref('')
const password = ref('')

function login() {
    if (!username.value, password.value)
    router.push('/inventory') 
}
</script>

