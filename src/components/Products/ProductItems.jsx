import React from 'react'
import './productItems.css'
function ProductItems({product}) {
  return (
    <div className='product-item'>
        <img className='product-image' src={product.image} width='100%' height='80%'/>
        <span className='product-title'>{product.title}</span>
        <span className='product-description'>{product.description}</span>
    </div>
  )
}

export default ProductItems