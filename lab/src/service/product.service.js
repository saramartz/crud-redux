import axios from 'axios'


const apiHandler = axios.create({
    baseURL: 'http://localhost:4000/'
})

export default apiHandler

// export default class AccountService {
//     constructor() {
//         this.apiHandler = axios.create({
//             baseURL: process.env.REACT_APP_API_URL,
//             withCredentials: true,
//         })
//     }

//     getUser = (userId) => this.apiHandler.get(`/account/${userId}`)
//     editUser = (userId, userInfo) => this.apiHandler.put(`/account/editUser/${userId}`, userInfo)
//     deleteUser = (userId) => this.apiHandler.delete(`/account/deleteUser/${userId}`)
// }
