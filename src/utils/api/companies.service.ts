import { CreateCompanyFormInputs } from '@/features/companies/create-company-form/create-company-form.config'
import { Company } from '@/features/companies/types'
import axios from 'axios'

const url = `${process.env.NEXT_PUBLIC_API_URL}/companies`

export type Res<T> = {
  data: T
} 

class CompaniesService {
  async findAll (): Promise<Res<Company[]>> {
    return await axios.get(`${url}`)
  }

  async findByNameAndLocation (name: string | null, location: string | null): Promise<Res<Company[]>> {
    return await axios.post(`${url}/search`, { name, location })
  }

  async findByName (name: string): Promise<Res<Company>> {
    return await axios.get(`${url}/name/${name}`)
  }

  findOne () {

  }

  async create (company: CreateCompanyFormInputs) {
    return await axios.post(`${url}`, company)
  }
}

export default new CompaniesService()