'use client'

import { Company } from '@/features/companies/types';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useParams } from 'next/navigation';
import React, { FC } from 'react';

import { useRouter } from 'next/router';
import companiesService from '@/utils/api/companies.service';


// Pobieranie możliwych ścieżek dla firm
export async function getStaticPaths() {
  // Pobierz listę wszystkich firm
  const companies = await companiesService.findAll();

  // Wygeneruj ścieżki dla każdej firmy
  const paths = companies.map((company) => ({
    params: { company_name: company.name },
  }));

  return {
    paths,
    fallback: false, // Jeśli true, umożliwia dynamiczne generowanie stron dla ścieżek, których nie ma jeszcze w wygenerowanych statycznie
  };
}


const CompanyPage: FC = () => {
  const { company_name } = useParams();
  const companyData = await companiesService.findByName(company_name)

  return (
    <div>
      You find {company_name.toString()}
    </div>
  )
}

export default CompanyPage;