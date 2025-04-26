'use client';
import React from 'react';
import Card from '../components/Card';
import { products } from '../categories/data';

const Categories = () => {
  return (
    <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 p-4 mt-[100px]'>
      {products.map((date) => (
        <div key={date.id}>
          <Card {...date} />
        </div>
      ))}
    </div>
  );
}

export default Categories;

