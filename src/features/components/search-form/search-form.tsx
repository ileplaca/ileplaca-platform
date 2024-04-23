'use client'

import React, { FC } from 'react';
import cities from '@/utils/data/cities.json'
import { useSearchForm } from './use-search-form';

const SearchForm: FC = () => {
  const {
    search,
    setCity,
    setCompanyName,
    city
  } = useSearchForm();

  return (
    <section className='flex flex-col gap-3'>
      <h1 className='text-4xl font-semibold'>
        Platform Ileplaca
      </h1>
      <h2>
        Search earnings for a given company for a given position
      </h2>
      <div className='flex gap-4'>
        <input type="text" onChange={(e) => setCompanyName(e.target.value)} placeholder="Company name" />
        <div>
          <input onChange={(e) => setCity(e.target.value)} type="text" placeholder="City" list="cities" />
          { city.length > 0 && 
            <datalist id="cities">
              {cities.map(_city => (
                <option key={_city} value={_city}>{_city}</option>
              ))}
            </datalist>
          }
        </div>
        <div>
          <button onClick={search}>
            Szukaj
          </button>
        </div>
      </div>
    </section>
  )
}

export default SearchForm;