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
  console.log(errors)
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 p-4 w-full md:w-3/4 lg:w-2/3 xl:w-1/2'>
      <h1 className='capitalize text-3xl font-medium'>Craete company profile</h1>
      <div>
        <label htmlFor="">Company name</label>
        <input 
          type="text" 
          {...register(
              'name', 
              {
                required: {
                  value: true,
                  message: 'Company name is  required'
                }, 
                minLength: {
                  value: 2,
                  message: 'Minimum length of company name is 2'
                }, 
                maxLength: {
                  value: 100,
                  message: 'Maximum length of company name is 100'
                } 
              })}
        />
        {errors.name && (
          <span className='text-sm text-red-500'>{errors.name.message}</span>
        )}
      </div>
      <div>
        <label htmlFor="">Location</label>
        <input type="text" {...register('location', 
          {
            required: {
              value: true,
              message: 'Location is required'
            }, 
            minLength: {
              value: 2,
              message: 'Minimum length of location is 2'
            }, 
            maxLength: {
              value: 100,
              message: 'Maximum length of location is 100'
            } 
          }
        )} />
        {errors.location && (
          <span className='text-sm text-red-500'>{errors.location.message}</span>
        )}
      </div>
      <div>
        <label htmlFor="">NIP</label>
        <input type="text" {...register('NIP', 
          {
            minLength: {
              value: 2,
              message: 'Minimum length of NIP is 10'
            }, 
            maxLength: {
              value: 100,
              message: 'Maximum length of NIP is 100'
            } 
          }
        )} />
        {errors.NIP && (
          <span className='text-sm text-red-500'>{errors.NIP.message}</span>
        )}
      </div>
      <div>
        <label htmlFor="">Sector</label>
        <input type="text" {...register('sector', 
          {
            required: {
              value: true,
              message: 'Sector is required'
            }, 
            minLength: {
              value: 2,
              message: 'Minimum length of sector is 2'
            }, 
            maxLength: {
              value: 100,
              message: 'Maximum length of sector is 100'
            }
          }
        )} />
      </div>
      <div>
        <label htmlFor="">Icon url</label>
        <input type="text" {...register('icon', 
          { 
            maxLength: {
              value: 10000,
              message: 'Maximum length of sector is 10000'
            }
          }
        )} />
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