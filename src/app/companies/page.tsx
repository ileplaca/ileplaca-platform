'use client'

import SearchForm from '@/features/components/search-form';
import companiesService from '@/utils/api/companies.service';
import { useParams, useSearchParams } from 'next/navigation';
import React, { FC, useEffect } from 'react';
const Companies: FC = () => {
  const { get } = useSearchParams()
  

  useEffect(() => {
    const getThat = async () => {
      const name = get('company_name') as string
      const location = get('city') as string
      return await companiesService.findByNameAndLocation(name, location);
    }
    console.log(getThat())


  })


  return (
    <main className="flex justify-center items-center py-10 mb-8">
      <SearchForm />
    </main>
  )
}

export default Companies;