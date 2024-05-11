import { CreateCompanyForm } from '@/features/companies';
import React, { FC } from 'react';

const CreateCompany: FC = () => {
  return (
    <main className='flex flex-col justify-center items-center py-24 mb-8'>
      <CreateCompanyForm />
    </main>
  )
}

export default CreateCompany;