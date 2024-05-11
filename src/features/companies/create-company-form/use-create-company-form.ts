import companiesService from "@/utils/api/companies.service"
import { CreateCompanyFormInputs } from "./create-company-form.config"
import { useState } from "react"
import { errorAlert, successAlert } from "@/utils/helpers/alerts";
import { useRouter } from "next/navigation";

export default () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: CreateCompanyFormInputs) => {
    setIsLoading(true)
    try {
      await companiesService.create(data);
      successAlert('Company was created successfully')
      router.push('/companies')
    } catch {
      errorAlert()
    }
    setIsLoading(false)
  }

  return {
    onSubmit,
    isLoading
  }
}