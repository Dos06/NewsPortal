import axios from "axios";

export const api = 'http://localhost:8080/';
export const auth = 'http://localhost:8080/auth';
export const TABLE_USERS = 'users';
export const TABLE_CATEGORIES = 'categories';

class DbService {
    async login(username, password) {
        return axios.post(auth, {username, password}).then(response => {
            let token = response.data
            if (token) {
                localStorage.setItem('token', JSON.stringify(token))
            }
            return response.data
        })
    }

    async logout() {
        localStorage.removeItem('token')
    }

    async register(username, password) {
        return axios.post(auth + '/register', {username, password})
    }

    getCurrentToken() {
        return JSON.parse(localStorage.getItem('token'))
    }

    async getAllByTable(table) {
        return axios.get(api + table)
    }
}

export default new DbService()
