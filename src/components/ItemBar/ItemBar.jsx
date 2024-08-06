import React from 'react'
import './itembars.css'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";
function ItemBar({productsFromApi,setProductsFromApi,showFilter,setShowFilter}) {
  return (
    <>

        <div className='item-bar-main large-screen'>
            <div className="item-bar-left">
                <span className='number-of-item'>{productsFromApi.length} Items</span>
                <span className='filter-message' onClick={()=>setShowFilter(!showFilter)}> {showFilter?<MdKeyboardArrowLeft />:''} {showFilter?'HIDE FILTER':'SHOW FILTER'} {!showFilter?<MdKeyboardArrowRight />:''}</span>
            </div>
            <div className="item-bar-right">
                <span>RECOMMENDED <FaAngleDown /></span>
            </div>
        </div>
        <div className='item-bar-main small-screen'>
            <div className="item-bar-left">
                <span className='filter-message-sm' onClick={()=>setShowFilter(!showFilter)}>FITLER</span>
            </div>
            <div >
                <span>RECOMMENDED <FaAngleDown /></span>
            </div>
        </div>
    
    </>
  )
}

export default ItemBar