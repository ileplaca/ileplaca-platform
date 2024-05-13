import { CreateSalaryFormInputs } from '@/features/salaries/create-salary-form/create-salary-form.config'
import axios from 'axios'

const url = `${process.env.NEXT_PUBLIC_API_URL}/companies-salaries`

export type Res<T> = {
  data: T
} 

class SalariesService {
  async create (company: CreateSalaryFormInputs) {
    return await axios.post(`${url}`, company)
  }
}

export default new SalariesService()