import React, { FC } from 'react';
import { Company } from '../types';
import CompanyItem from '../company-item';

export interface CompanyItem {
  companies: Company[]
}

const CompanyList: FC<CompanyItem> = ({ companies }) => {
  return (
    <div className='p-2 responsibility_for_elements flex flex-col gap-4'>
      {
        companies.map(company => (
          <CompanyItem key={company.NIP} company={company} />
        ))
      }
    </div>
  )
}

export default CompanyList;