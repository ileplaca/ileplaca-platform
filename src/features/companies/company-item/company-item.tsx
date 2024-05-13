'use client'

import React, { FC } from 'react';
import { Company } from '../types';
import Image from 'next/image';
import { parseDateFns } from '@/utils/helpers/date-fns';
import Link from 'next/link';
import { isValidHttpUrl } from '@/utils/helpers/validation';
import { motion } from 'framer-motion';

export interface CompanyItemProps {
  company: Company
}

const CompanyItem: FC<CompanyItemProps> = ({ company }) => {
  const iconSrc = isValidHttpUrl(company.icon) ? company.icon : '/default-company-logo.png';

  return (
    <motion.div 
      whileInView={{
        opacity: [0, 100],
      }} 
      className='border p-2 rounded shadow flex flex-col items-start gap-2'
    >
      <div className='flex items-center gap-2'>
        <Image className='rounded-full' src={iconSrc} width={36} height={36} alt="" />
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
      <Link href={`companies/${company.name.split(' ').join('-')}`}>
        <button className='text-sm'>Check out</button>
      </Link>
    </motion.div>
  )
}

export default CompanyItem;