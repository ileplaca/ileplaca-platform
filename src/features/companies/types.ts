import { Salary } from "../salaries/types";

export interface Company {
  id: number;
  name: string;
  location: string
  icon: string;
  NIP: string
  sector: string
  created_at: Date
  salaries?: Salary[];
}