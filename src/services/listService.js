import axios from "axios";

const API_URL = `http://api.nstack.in`;

export default {
    async getList() {
        try {
            const response = await axios.get(`${API_URL}/v1/todos?page=1&limit=10`);
            return response.data;
        } catch (error) {
            console.error("Failed to get list:");
            throw error;
        }
    },

    async addItem(title) {
        try {
            const response = await axios.post(`${API_URL}/v1/todos/`, { title });
            return response.data.data
        } catch (error) {
            console.error("Failed to  item:", itemId);
            throw error;
        }
    },

    async deleteItem(itemId) {
        try {
            await axios.delete(`${API_URL}/v1/todos/${itemId}`);
        } catch (error) {
            console.error("Failed to delete item:", itemId);
            throw error;
        }
    },

    async doneTask(item) {
        try {
            await axios.put(`${API_URL}/v1/todos/${item._id}`, { title: item.title, is_completed: !item.is_completed });
        } catch (error) {
            console.error("Failed to mark done:", item._id);
            throw error;
        }
    },

    async deleteCompleted(doneTasks) {
        try {
            for (const item of doneTasks) {
                await axios.delete(`${API_URL}/v1/todos/${item._id}`);
            }
        } catch (error) {
            console.error("Failed to delete item:", item._id);
            throw error;
        }
    },

    async markAllDone(activeTasks) {
        try {
            for (const item of activeTasks) {
                await axios.put(`${API_URL}/v1/todos/${item._id}`, { title: item.title, is_completed: true });
            }
        } catch (error) {
            console.error("Failed to mark all:", item._id);
            throw error;
        }
    },

    async updateItem(item, newTitle) {
        try {
            const response = await axios.put(`${API_URL}/v1/todos/${item._id}`, { title: newTitle });
            return response.data.data
        } catch (error) {
            console.error("Failed to update item:", item._id);
            throw error;
        }
    }

};