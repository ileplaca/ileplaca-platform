'use client'

import { useState } from "react";
import { RoutesEnum } from "@/utils/types/routes";
import { useRouter, useSearchParams } from "next/navigation";

export const useSearchForm = () => {
  const router = useRouter();
  const { get } = useSearchParams()

  const [companyName, setCompanyName] = useState('');
  const [city, setCity] = useState('');

  const search = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`${RoutesEnum.COMPANIES}/?company_name=${companyName}&city=${city}`)
  }

  return {
    search,
    setCity,
    setCompanyName,
    city,
    defaultCity: get('city'),
    defaultCompanyName: get('company_name')
  }
}