import React, { FC } from 'react';
import { Company } from '../types';
import Image from 'next/image';
import { parseDateFns } from '@/utils/helpers/date-fns';
import Link from 'next/link';

export interface CompanyItemProps {
  company: Company
}

const CompanyItem: FC<CompanyItemProps> = ({ company }) => {
  return (
    <div className='border p-2 rounded shadow flex flex-col items-start gap-2'>
      <div className='flex items-center gap-2'>
        <Image className='rounded-full' src={'/images.jpg'} width={36} height={36} alt="" />
        <div className='text-xl font-medium'>
          {company.name}
        </div>
      </div>
      <div className='text-sm font-light'>
        {parseDateFns(company.created_at)}
      </div>
      <div className='flex gap-2'>
        <div className='text-lg border px-3 py-1 rounded text-gray-600'>
          {company.location}
        </div>
        <div className='text-lg border px-3 py-1 rounded text-gray-600'>
          Sector {company.sector}
        </div>
      </div>
      <Link href={`companies/${company.name}`}>
        <button className='text-sm'>Check out</button>
      </Link>
    </div>
  )
}

export default CompanyItem;