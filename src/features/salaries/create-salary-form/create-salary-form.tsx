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
    <form className='bg-white p-6 overflow-y-scroll w-1/2 flex flex-col gap-2' onSubmit={() => handleSubmit(onSubmit)}>
      <h1 className='text-3xl font-medium'>Create salary</h1>
      <div>
        <label htmlFor="">First salary</label>
        <input type="number" {...register('first', 
          {
            required: {
              value: true,
              message: 'First salary is required'
            },
          }
        )} />
      </div>
      <div>
        <label htmlFor="">Last salary</label>
        <input type="number" {...register('last')} />
      </div>
      <div>
        <label htmlFor="">Speed of growth salary</label>
        <input type="number" {...register('speed_of_growth')} />
      </div>
      <div>
        <label htmlFor="">Role in company</label>
        <input type="text" {...register('role')} />
      </div>
      <div>
        <label htmlFor="">Experience (in months)</label>
        <input type="number" {...register('experience')} />
      </div>
      <div>
        <label htmlFor="">Opinion</label>
        <textarea className='h-36' {...register('opinion')}></textarea>
      </div>
      <div>
        <label htmlFor="">Employment type</label>
        <input type="text" {...register('employment_type')} />
      </div>
      <div>
        <label htmlFor="">Operaintg mode</label>
        <input type="text" {...register('operating_mode')} />
      </div>
      <div>
        <label htmlFor="">Salary currency</label>
        <input type="text" {...register('salary_currency')} />
      </div>
      <div>
        <label htmlFor="">Experience in company (in months)</label>
        <input type="number" {...register('experience_in_company')} />
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