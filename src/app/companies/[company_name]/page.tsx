import { Company } from '@/features/companies/types';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useParams } from 'next/navigation';
import React, { FC } from 'react';

import { useRouter } from 'next/router';
import companiesService from '@/utils/api/companies.service';


const CompanyPage: FC = async () => {
  return (
    <div>
    </div>
  )
}

export default CompanyPage;