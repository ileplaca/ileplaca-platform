'use client'

import React, { FC } from 'react';
import cities from '@/utils/data/cities.json'
import { useSearchForm } from './use-search-form';

const SearchForm: FC = () => {
  const {
    search,
    setCity,
    setCompanyName,
    city,
    defaultCompanyName,
    defaultCity
  } = useSearchForm();

  return (
    <section className='flex flex-col p-2 flex-wrap gap-1 md:gap-2 xl:gap-3'>
      <h1 className='text-4xl font-semibold'>
        Ileplaca
      </h1>
      <h2>
        Search earnings for a given company for a given position
      </h2>
      <form onSubmit={e => search(e)} className='flex gap-4'>
        <input defaultValue={defaultCompanyName as string} type="text" onChange={(e) => setCompanyName(e.target.value)} placeholder="Company name" />
        <div>
          <input defaultValue={defaultCity as string} onChange={(e) => setCity(e.target.value)} type="text" placeholder="City" list="cities" />
          { city.length > 0 && 
            <datalist id="cities">
              {cities.map(_city => (
                <option key={_city} value={_city}>{_city}</option>
              ))}
            </datalist>
          }
        </div>
        <div>
          <button type='submit'>
            Search
          </button>
        </div>
      </form>
    </section>
  )
}

export default SearchForm;