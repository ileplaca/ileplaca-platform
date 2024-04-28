import { Company } from '@/features/companies/types'
import axios from 'axios'

const url = `${process.env.NEXT_PUBLIC_API_URL}/companies`

class CompaniesService {
  async findAll (): Promise<Company[]> {
    return await axios.get(`${url}`)
  }

  async findByNameAndLocation (name: string | null, location: string | null): Promise<Company[]> {
    return await axios.post(`${url}/search`, { name, location })
  }

  async findByName (name: string): Promise<Company> {
    return await axios.get(`${url}/name/${name}`)
  }

  findOne () {

  }

  create () {

  }
}

export default new CompaniesService()