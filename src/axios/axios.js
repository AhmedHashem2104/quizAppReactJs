import axios from 'axios'

export const baseURL = 'http://127.0.0.1:3333/api/v1.1/backend'

export const imgURL = 'http://127.0.0.1:3333/uploads'

const apiClient = axios.create({
    baseURL: baseURL,
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})
const API = {
    async login(data) {
        return await apiClient.post('/login', data)
    },
    async register() {
        return await apiClient.post('/register')
    },
    async getStatistics() {
        return await apiClient.get('/statistic')
    },
    async getTeam() {
        return await apiClient.get('/team')
    },
    async getFeedback() {
        return await apiClient.get('/feedback')
    },
    async getInfo() {
        return await apiClient.get('/info')
    },
    async getBlogs() {
        return await apiClient.get('/blog')
    }
}
export default API