'use client'

import SearchForm from '@/features/components/search-form';
import companiesService from '@/utils/api/companies.service';
import { useSearchParams } from 'next/navigation';
import useSWR from 'swr'
import React, { FC } from 'react';


const Companies: FC = () => {
  const { get } = useSearchParams()
  const { data, error, isLoading } = useSWR(
    `/api/companies/${get('company_name')}/${get('city')}`,
    () => companiesService.findByNameAndLocation(get('company_name'), get('city'))
  )

  return (
    <main className="flex justify-center items-center py-10 mb-8">
      <SearchForm />
    </main>
  )
}

export default Companies;