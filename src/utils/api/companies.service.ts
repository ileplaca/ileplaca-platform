import axios from 'axios'

const url = `${process.env.API_URL}/companies`

class CompaniesService {
  async findAll () {
    await axios.get(`${url}`)
  }

  findOne () {

  }

  create () {

  }
}