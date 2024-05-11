import React, { FC } from 'react';
import { Company } from '../types';
import CompanyItem from '../company-item';

export interface CompanyItem {
  companies: Company[]
}

const CompanyList: FC<CompanyItem> = ({ companies }) => {
  return (
    <div className='p-2 w-full md:w-3/4 xl:w-1/2 flex flex-col gap-4'>
      {
        companies.map(company => (
          <CompanyItem key={company.NIP} company={company} />
        ))
      }
    </div>
  )
}

export default CompanyList;