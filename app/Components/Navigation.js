'use client'

import { useState } from 'react';

import { IoSearchOutline } from "react-icons/io5";
import { TiFlash } from "react-icons/ti";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaUser, FaChevronDown ,FaAngleDown,FaSearch } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import DropdownCategories from './DropdownCategories';
import Button from './Button';

export default function Navbar() {
  const [openCategories, setOpenCategories] = useState(false);

  return (
    <nav className="flex items-center justify-between self-stretch">
      
        {/* Categories */}
        <div className="">
          <button
            onClick={() => setOpenCategories(!openCategories)}
            className="flex items-center gap-2 self-stretch justify-start text-primary text-xl font-semibold  leading-normal "
          >
            <RxHamburgerMenu />
            Catégories
            <FaAngleDown />
          </button>
          {openCategories && <DropdownCategories className=" absolute top-0 z-50" />}
        </div>
          
             {/* start  Search */}
        
      {/* Search parte  Desktop*/}

      <div className='items-center justify-between hidden border-2 border-gray-400 rounded-lg md:flex'>
        <input type='text' name='search' placeholder='Recherche des Produits..' className="justify-start px-2 text-base font-normal text-neutral-400" />
        <div className='p-[10px] bg-gray-400  rounded-r-md justify-end '>
        <FaSearch className='text-white'/>
        </div>
      </div>

       {/* Search parte  phone*/}

       
        <div className='md:hidden p-2 bg-gray-400  rounded-md justify-end '>
        <FaSearch className='text-white'/>
        </div>
      

           {/* End  Search */}



           {/* start  Button */}
           

           {/* Search parte  Desktop*/}

      <div className='items-center hidden gap-2 md:flex'>
        <Button className='flex items-center gap-1 text-'> <MdOutlineShoppingCart /> Panier <FaChevronDown /></Button>

        <Button variant='tertiary' className='flex items-center gap-1 '><FaUser /> Compte</Button>

        <Button variant='secondary'><TiFlash /></Button>
      </div>

           {/* Search parte  Phone*/}

      
        <div className='flex items-center gap-2 md:hidden'> 
            <Button > <MdOutlineShoppingCart /></Button>

            <Button className='flex items-center gap-2 md:hidden' variant='tertiary' ><FaUser /></Button>


            <Button variant='secondary' ><TiFlash /></Button>

        </div>

          {/* End  Button */}

    </nav>
  );
}
