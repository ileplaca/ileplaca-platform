'use client'

import React, { FC } from 'react';
import SalaryList from '../salary-list';
import { Salary } from '../types';
import useSalarySection from './use-salary-section';
import Modal from '@/features/ui/modal/modal';
import CreateSalaryForm from '../create-salary-form';

export interface SalaryListProps {
  salaries: Salary[]
}

const SalarySection: FC<SalaryListProps> = ({ salaries }) => {
  const { isModalOpen, setIsModalOpen } = useSalarySection();

  return (
    <section className='flex flex-col justify-center items-center mt-8'>
      { isModalOpen && (
        <Modal>
          <div className='flex justify-center h-screen p-4 z-40'>
            <CreateSalaryForm setIsModalOpen={setIsModalOpen} />
          </div>
        </Modal>
      )}
      
      <h2 className='text-3xl font-medium mb-2'>Salaries</h2>
      <button onClick={() => setIsModalOpen(true)} className='mb-4'>
        Create Salary
      </button>
      <SalaryList salaries={salaries} />
    </section>
  )
}

export default SalarySection;