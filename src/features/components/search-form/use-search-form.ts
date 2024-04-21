'use client'

import { useState } from "react";
import { RoutesEnum } from "@/utils/types/routes";
import { useRouter } from "next/navigation";

export const useSearchForm = () => {
  const router = useRouter();

  const [companyName, setCompanyName] = useState('');
  const [city, setCity] = useState('');

  const search = () => {
    router.push(`${RoutesEnum.COMPANIES}/?company_name=${companyName}&city=${city}`)
  }

  return {
    search,
    setCity,
    setCompanyName,
    city
  }
}