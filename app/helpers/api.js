import axios from 'axios'

export const getUserInfo = () => {
  const url = `http://localhost:9090/api/sampleData`
  return axios.get(url)
    .then(response => response.data)
    .catch(error => error.status)
}
