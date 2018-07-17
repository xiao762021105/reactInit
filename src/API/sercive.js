import axios from 'axios'

class Api {
  get(url, params = {}) {
    return axios.get(url, params)
  }
  post(url, params = {}) {
    return axios.post(url, params)
  }
}

const sercive = new Api();
