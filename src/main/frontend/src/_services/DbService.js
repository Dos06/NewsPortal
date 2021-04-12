import axios from "axios";

const auth = 'http://localhost:8080/auth';

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

}

export default new DbService()
