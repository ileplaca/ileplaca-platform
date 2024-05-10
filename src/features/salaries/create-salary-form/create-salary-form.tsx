'use client'

import React, { FC } from 'react';
import { useForm } from 'react-hook-form'
import { CreateSalaryFormInputs } from './create-salary-form.config';

const CreateSalaryForm: FC = () => {
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
    <div className='flex justify-center items-center'>
      <form className='bg-white p-6 w-1/2 overflow-scroll' onSubmit={() => handleSubmit(onSubmit)}>
        <h1 className='text-3xl font-medium'>Create salary</h1>
        <div>
          <label htmlFor="">First salary</label>
          <input type="text" {...register('first')} />
        </div>
        <div>
          <label htmlFor="">Last salary</label>
          <input type="text" {...register('last')} />
        </div>
        <div>
          <label htmlFor="">Speed of growth salary</label>
          <input type="text" {...register('speed_of_growth')} />
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
          <input type="text" {...register('opinion')} />
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
        <button>
          Add salary
        </button>
      </form>
    </div>
  )
}

export default CreateSalaryForm;