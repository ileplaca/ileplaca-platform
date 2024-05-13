'use client'

import React, { FC } from 'react';
import { useForm } from 'react-hook-form'
import { CreateSalaryFormInputs } from './create-salary-form.config';

export interface CreateSalaryProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}


const CreateSalaryForm: FC<CreateSalaryProps> = ({ setIsModalOpen }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CreateSalaryFormInputs>()
  
  const onSubmit = (data: CreateSalaryFormInputs) => {
    try {
      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <form className='bg-white p-6 overflow-y-scroll w-full md:3/4 lg:w-2/3 xl:w-1/2 flex flex-col gap-2' onSubmit={() => handleSubmit(onSubmit)}>
      <h1 className='text-3xl font-medium'>Create salary</h1>
      <div>
        <label htmlFor="">First salary</label>
        <input type="number" {...register('first', 
          {
            required: {
              value: true,
              message: 'First salary is required'
            },
            min: {
              value: 0,
              message: 'Minimum value of first salary is 0'
            },
            max: {
              value: 2147483647,
              message: 'Maximum value of first salary is 2147483647'
            },
          }
        )} />
      </div>
      <div>
        <label htmlFor="">Last salary</label>
        <input type="number" {...register('last', 
          {
            required: {
              value: true,
              message: 'Last salary is required'
            },
            min: {
              value: 0,
              message: 'Minimum value of last salary is 0'
            },
            max: {
              value: 2147483647,
              message: 'Maximum value of last salary is 2147483647'
            },
          }
        )} />
      </div>
      <div>
        <label htmlFor="">Speed of growth salary</label>
        <input type="number" {...register('speed_of_growth',
          {
            required: {
              value: true,
              message: 'Speed of growth salary is required'
            },
            min: {
              value: 0,
              message: 'Minimum value of speed of growth salary is 0'
            },
            max: {
              value: 2147483647,
              message: 'Maximum value of speed of growth salary is 2147483647'
            },
          }
        )} />
      </div>
      <div>
        <label htmlFor="">Role in company</label>
        <input type="text" {...register('role', 
          {
            required: {
              value: true,
              message: 'Role is required'
            },
            minLength: {
              value: 2,
              message: 'Minimum length of role is 2'
            },
            max: {
              value: 80,
              message: 'Maximum value of speed of growth salary is 80'
            },
          }
        )} />
      </div>
      <div>
        <label htmlFor="">Opinion</label>
        <textarea className='h-24' {...register('opinion',
          {
            required: {
              value: true,
              message: 'Opinion is required'
            },
            minLength: {
              value: 2,
              message: 'Minimum length of opinion is 2'
            },
            max: {
              value: 500,
              message: 'Maximum value of opinion is 500'
            },
          }
        )}></textarea>
      </div>
      <div className='flex flex-col'>
        <label htmlFor="">Employment type</label>
        <select className='w-48 capitalize' {...register('employment_type')}>
          <option value="B2B">B2B</option>
          <option value="permanent">permanent</option>
          <option value="intership">intership</option>
          <option value="mandate contract">mandate contract</option>
          <option value="specific-task contract">specific-task contract</option>
        </select>
      </div>
      <div className='flex flex-col'>
        <label htmlFor="">Operating mode</label>
        <select className='w-48 capitalize' {...register('operating_mode')}>
          <option value="stationary">stationary</option>
          <option value="hybrid">hybrid</option>
          <option value="remote">remote</option>
        </select>
      </div>
      <div className='flex flex-col'>
        <label htmlFor="">Salary currency</label>
        <select className='w-20' {...register("salary_currency")}>
          <option value="PLn">PLN</option>
          <option value="€">€</option>
          <option value="$">$</option>
        </select>
      </div>
      <div>
        <label htmlFor="">Experience in company (in months)</label>
        <input type="number" {...register('experience_in_company',
          {
            required: {
              value: true,
              message: 'Experience in company is required'
            },
            min: {
              value: 0,
              message: 'Minimum value of experience in company is 0'
            },
            max: {
              value: 2147483647,
              message: 'Maximum value of experience in company is 2147483647'
            }
          }
        )} />
      </div>
      <div>
        <label htmlFor="">Experience (in months)</label>
        <input type="number" {...register('experience',
          {
            required: {
              value: true,
              message: 'Experience is required'
            },
            min: {
              value: 0,
              message: 'Minimum value of experience is 0'
            },
            max: {
              value: 2147483647,
              message: 'Maximum value of experience is 2147483647'
            }
          }
        )} />
      </div>
      <div className='flex justify-between'>
        <button onClick={() => setIsModalOpen(false)} className='text-black bg-white py-2 px-6 focus:outline-none hover:bg-gray-100 duration-100 rounded text-lg border'>
          Close
        </button>
        <button type='submit'>
          Add salary
        </button>
      </div>
    </form>
  )
}

export default CreateSalaryForm;