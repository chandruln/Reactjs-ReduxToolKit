import React from 'react'
import './index.css'

const DisplayProduct = ({product}) => {
  return (
    <div className='product'>
        <p>ID: {product.id}</p>
        <p>Title: {product.title}</p>
        <p>Price: {product.price}</p>
        <p>Rating: {product.rating}</p>
    </div>
  )
}

export default DisplayProduct