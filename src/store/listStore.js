import { defineStore } from 'pinia'
import listService from "../services/listService";

export const useListStore = defineStore('list', {
    state: () => ({
        list: [],
        filter: 'all',
        loading: true,
    }),

    getters: {
        allTasks() {
            return this.list.length
        },

        activeTasks() {
            return this.list.filter(el => !el.is_completed)
        },

        doneTasks() {
            return this.list.filter(el => el.is_completed)
        },
    },

    actions: {
        async getList() {
            await listService.getList().then((data) => {
                this.list = data.items
                this.loading = false
            });
        },

        async addToList(title) {
            this.loading = true
            await listService.addItem(title).then((data) => {
                this.getList()
            })
        },

        async removeItem(id) {
            this.loading = true
            await listService.deleteItem(id).then((el) => {
                this.list = this.list.filter(el => el._id !== id)
                this.loading = false
                if (this.filter === 'active' && this.activeTasks.length == 0) {
                    this.filter = 'all'
                }
                if (this.filter === 'completed' && this.doneTasks.length == 0) {
                    this.filter = 'all'
                }

            })
        },

        async doneTask(item) {
            await listService.doneTask(item)
        },

        async markAllDone() {
            this.loading = true
            await listService.markAllDone(this.list).then(() => {
                this.list.forEach(el => el.is_completed = true)
                this.filter = 'all'
                this.loading = false
            })

        },

        async deleteCompleted(doneTasks) {
            this.loading = true
            await listService.deleteCompleted(doneTasks).then((data) => {
                this.list = this.list.filter(el => !el.is_completed);
                this.filter = 'all'
                this.loading = false
            })
        },

        async updateItem(item, newTitle) {
            this.loading = true
            await listService.updateItem(item, newTitle).then((data) => {
                const taskIndex = this.list.findIndex((el) => el._id === data._id);
                this.list[taskIndex].title = data.title;
                this.loading = false
            })
        }
    },

})