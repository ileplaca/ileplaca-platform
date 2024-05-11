import { Company } from "../companies/types";

export interface Salary {
  id: number;
  first: number;
  last: number;
  speed_of_growth: number;
  role: string;
  experience: string;
  opinion: string;
  employment_type: string;
  operating_mode: string;
  salary_currency: string;
  experience_in_company: string;
  created_at: Date;
  company?: Company
}