import React from 'react'
import './itembars.css'
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";
function ItemBar({productsFromApi,setProductsFromApi}) {
  return (
    <>

        <div className='item-bar-main large-screen'>
            <div className="item-bar-left">
                <span className='number-of-item'>{productsFromApi.length} Items</span>
                <span className='filter-message'><MdKeyboardArrowRight /> SHOW FILTER</span>
            </div>
            <div className="item-bar-right">
                <span>RECOMMENDED <FaAngleDown /></span>
            </div>
        </div>
        <div className='item-bar-main small-screen'>
            <div className="item-bar-left">
                <span className='filter-message-sm'>FITLER</span>
            </div>
            <div >
                <span>RECOMMENDED <FaAngleDown /></span>
            </div>
        </div>
    
    </>
  )
}

export default ItemBar