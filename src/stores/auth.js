import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth' , () => {
    const user = ref(null)
    const isLoggedIn = ref(false)

    function login(username, password) {
        user.value = { name: username }
        isLoggedIn.value = true
    }

    function logout() {
        user.value = null
        isLoggedIn.value = false
    }
    return { user, isLoggedIn, login, logout }
})