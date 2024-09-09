import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
    state: () => ({
        theme: false,
    }),

    actions: {
        changeTheme() {
            localStorage.setItem("theme", !this.theme);
            this.theme = !this.theme
        }
    },

})