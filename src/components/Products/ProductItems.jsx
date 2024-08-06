import React from 'react'
import './productItems.css'
function ProductItems({product}) {
    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
          return text.substring(0, maxLength) + '...';
        }
        return text;
      };
    
  return (
    <div className='product-item'>
        <img className='product-image' src={product.image} width='100%' height='80%'/>
        <span className='product-title'>{truncateText(product.title, 20)}</span> <br />
        <span className='product-description'>{truncateText(product.description, 35)}</span>
    </div>
  )
}

export default ProductItems