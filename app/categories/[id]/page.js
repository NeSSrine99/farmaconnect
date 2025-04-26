'use client'

import { useParams } from 'next/navigation';
import React from 'react'
import { products } from '../data';

const productDetails = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) return <p> nothing</p>
  return (
    <div>
      <h1>{product.nom} </h1>
      <img src={product.image} alt="Book 1"  className="self-stretch h-64 rounded-tl-2xl rounded-tr-2xl" />
      <p> {product.marque} </p>
      <p> {product.prix} </p>
    </div>
  )
}

export default productDetails;

