import React from 'react';

import companiesService from '@/utils/api/companies.service';
import { parseDateFns } from '@/utils/helpers/date-fns';
import { SalaryList } from '@/features/salaries';
import { Salary } from '@/features/salaries/types';
import SearchForm from '@/features/components/search-form';
import Img from 'next/image'
import { isValidHttpUrl } from '@/utils/helpers/validation';

export async function generateStaticParams() {
  const companies = await companiesService.findAll()

  return companies.data.map((companies) => ({
    slug: companies.name.split("%").join("-"),
  }))
}


export default async function Page({ params }: { params: { slug: string } }) {
  const { data } = await companiesService.findByName(params.slug.split('-').join(' '))
  const iconSrc = isValidHttpUrl(data.icon) ? data.icon : '/default-company-logo.png';
  const salaries = data.salaries as Salary[];

  const averageStats = {
    first: 0,
    last: 0,
    employment_type: 'none',
    expierence: 0,
    expierence_in_company: 0,
    operating_mode: 'none',
    speed_of_growth: 0
  }

  salaries.forEach(salary => {
    averageStats.first =+ salary.first;
    averageStats.last =+ salary.last;
    averageStats.expierence =+ salary.experience;
    averageStats.expierence_in_company =+ salary.experience_in_company;
    averageStats.speed_of_growth =+ salary.speed_of_growth;
  })

  return (
    <main>
      <section className='flex justify-center items-center mt-8'>
        <SearchForm />
      </section>
      <section className='flex justify-center mt-8'>
        <div className='border w-1/2 p-4 rounded'>
          <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-4'>
              <Img src={iconSrc} alt='none' width={48} height={48} />
              <h1 className='text-3xl font-medium'>
                {data.name}
              </h1>
            </div>
            <div className='text-sm font-semibold'>
              {data.NIP}
            </div>
            <div className='flex gap-2'>
              <div className='border rounded px-2 py-1'>
                {data.location}
              </div>
              <div className='border rounded px-2 py-1'>
                Sector {data.sector}
              </div>
            </div>
            <div>
              {parseDateFns(data.created_at)}
            </div>
          </div>
        </div>
      </section>
      <section className='flex flex-col justify-center items-center mt-8'>
        <h2 className='text-3xl font-medium mb-2'>Salaries</h2>
        <button className='mb-4'>
          Create Salary
        </button>
        <SalaryList salaries={salaries} />
      </section>
    </main>
  )
}

