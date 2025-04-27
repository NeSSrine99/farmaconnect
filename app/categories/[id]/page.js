'use client'

import { useParams } from 'next/navigation';
import React from 'react'
import { products } from '../data';

const productDetails = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) return <p> nothing</p>
  return (
    <div className='flex flex-col '>
      <div className='px-8 py-8'>
        <a href='/' className="text-primary hover:underline">Accueil /</a>  
        <span className="ml-1 text-textLight"> {product.marque} | {product.nom} </span>
            
      </div>
      <div>
      <img src={product.image} alt="Book 1"  className="self-stretch h- rounded-tl-2xl rounded-tr-2xl" />
      <div>
      <h1>{product.nom} </h1>
      <p> {product.marque} </p>
      <p> {product.prix} </p>
      </div>
      </div>
      
      
    </div>
  )
}

export default productDetails;

