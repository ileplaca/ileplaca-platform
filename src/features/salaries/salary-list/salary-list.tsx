import React, { FC } from 'react';
import { Salary } from '../types';
import SalaryItem from '../salary-item';

export interface SalaryListProps {
  salaries: Salary[]
}

const SalaryList: FC<SalaryListProps> = ({ salaries }) => {
  return (
    <>
      {
        salaries.length === 0 ? (
          <div>
            There is no salaries
          </div>
        ) : (
          <div className='w-1/2 flex flex-col gap-4'>
            {
              salaries.map(salary => (
                <SalaryItem key={salary.id} salary={salary} />
              ))
            }
          </div>
        )
      }
    </>
  )
}

export default SalaryList;