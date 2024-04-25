import axios from 'axios'

const url = `${process.env.NEXT_PUBLIC_API_URL}/companies`

class CompaniesService {
  async findAll () {
    return await axios.get(`${url}`)
  }

  async findByNameAndLocation (name: string | null, location: string | null) {
    return await axios.post(`${url}/search`, { name, location })
  }

  findOne () {

  }

  create () {

  }
}

export default new CompaniesService()