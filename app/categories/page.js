'use client';
import React from 'react';
import Card from '../components/Card';
import { products } from '../categories/data';
import DropdownCategories from '../components/DropdownCategories';
import { BsFillChatQuoteFill } from "react-icons/bs";

const Categories = () => {
  return (
    <div>
       

        <div className='flex '>
      <nav className='border-2 border-sky-950 relative w-[20%]'>
        {/* <DropdownCategories  className=' '/> */}
      </nav>
      <main className='border-2 border-red-700 w-[70%] flex items-center justify-between gap-2  flex-wrap sm:p-4 p-1'>
      {products.map((date) => (
        <div key={date.id}>
          <Card {...date} />
        </div>
      ))}
    
      </main>
      <sidebar className='w-[10%] border-2 border-amber-500  flex items-start'>
      <BsFillChatQuoteFill size={70} color='white' className='fixed  rounded-full p-3  bg-[conic-gradient(from_180deg_at_50.00%_50.00%,#4DDEE5_77deg,_#138086_334deg)]  shadow-defaultCard'/>

      </sidebar>

      </div>
    </div>
  );
}

export default Categories;

