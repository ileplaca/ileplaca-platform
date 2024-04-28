'use client'

import SearchForm from '@/features/components/search-form';
import companiesService from '@/utils/api/companies.service';
import { useSearchParams } from 'next/navigation';
import useSWR from 'swr'
import React, { FC } from 'react';
import CompanyList from '@/features/companies/company-list';


const Companies: FC = () => {
  const { get } = useSearchParams()
  const { data, error, isLoading } = useSWR(
    `/api/companies/${get('company_name')}/${get('city')}`,
    () => companiesService.findByNameAndLocation(get('company_name'), get('city'))
  )

  if (isLoading || !data) return <>Loading...</>

  return (
    <main className="flex flex-col justify-center items-center py-10 mb-8">
      <SearchForm />
      <CompanyList companies={data} />
    </main>
  )
}

export default Companies;