import { useParams } from 'next/navigation';
import React, { FC } from 'react';

const Company: FC = () => {
  const { company_id } = useParams();
  
  return (
    <div>
      You find {company_id}
    </div>
  )
}

export default Company;