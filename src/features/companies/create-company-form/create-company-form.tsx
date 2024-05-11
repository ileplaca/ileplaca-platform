'use client'

import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import useCreateCompanyForm from './use-create-company-form';
import { CreateCompanyFormInputs } from './create-company-form.config';

const CreateCompanyForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateCompanyFormInputs>();

  const { isLoading, onSubmit } = useCreateCompanyForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 w-1/2'>
      <h1 className='capitalize text-3xl font-medium'>Craete company profile</h1>
      <div>
        <label htmlFor="">Company name</label>
        <input type="text" {...register('name', { required: true, minLength: 2, maxLength: 100 })} />
        <span className='text-sm text-red-500'>
          {/* {errors.name ? errors.name.message : ''} */}
        </span>
      </div>
      <div>
        <label htmlFor="">Location</label>
        <input type="text" {...register('location', { required: true, minLength: 2, maxLength: 100 })} />
      </div>
      <div>
        <label htmlFor="">NIP</label>
        <input type="text" {...register('NIP', { minLength: 10, maxLength: 10 })} />
      </div>
      <div>
        <label htmlFor="">Sector</label>
        <input type="text" {...register('sector', { required: true, minLength: 2, maxLength: 100 })} />
      </div>
      <div>
        <label htmlFor="">Icon url</label>
        <input type="text" {...register('icon', { maxLength: 10000 })} />
      </div>
      <div>
        <button disabled={isLoading} className={`${isLoading ? 'opacity-70' : ''}`}>
          Craete company profile
        </button>
      </div>
    </form>
  )
}

export default CreateCompanyForm;