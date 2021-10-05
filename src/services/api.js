import axios from 'axios'

const api = axios.create({
    baseURL: 'https://homefinancesapi.herokuapp.com/api-hf/',
    
})

export default api