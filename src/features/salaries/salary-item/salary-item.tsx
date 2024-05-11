import React, { FC } from 'react';
import { Salary } from '../types';
import { parseDateFns } from '@/utils/helpers/date-fns';
import TextInfoElement from '@/features/components/text-info-element';

export interface SalaryItemProps {
  salary: Salary
}

const SalaryItem: FC<SalaryItemProps> = ({ salary }) => {
  return (
    <div className='border p-4 '>
      <div className='text-lg font-light'>
        {parseDateFns(salary.created_at)}
      </div>
      <div className='flex flex-row flex-wrap gap-2 mt-4'>
        <TextInfoElement text='First salary' textValue={`${salary.first} ${salary.salary_currency}`} />
        <TextInfoElement text='Last salary' textValue={`${salary.last} ${salary.salary_currency}`} />
        <TextInfoElement text='Employment type' textValue={salary.employment_type} />
        <TextInfoElement text='Experience overall' textValue={salary.experience} />
        <TextInfoElement text='Experience in company' textValue={salary.experience_in_company} />
        <TextInfoElement text='Operating mode' textValue={salary.operating_mode} />
        <TextInfoElement text='Role' textValue={salary.role} />
        <TextInfoElement text='Speed of growth' textValue={salary.speed_of_growth} />
      </div>
      <div className='mt-4'>
        <h2 className='text-lg font-medium'>Opinion</h2>
        <div>
          {salary.opinion}
        </div>
      </div>
    </div>
  )
}

export default SalaryItem;