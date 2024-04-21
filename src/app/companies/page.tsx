'use client'

import SearchForm from '@/features/components/search-form';
import { useParams, useSearchParams } from 'next/navigation';
import React, { FC, useEffect } from 'react';
const Companies: FC = () => {
  const { get } = useSearchParams()
  
  useEffect(() => {
  })


  return (
    <main className="flex justify-center items-center py-10 mb-8">
      <SearchForm />
    </main>
  )
}

export default Companies;