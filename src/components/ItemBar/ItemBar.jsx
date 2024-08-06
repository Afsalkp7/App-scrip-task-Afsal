import React from 'react';
import './itembars.css';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";

function ItemBar({ productsFromApi, setProductsFromApi, showFilter, setShowFilter, showRecommended, setShowRecommended }) {

    const sortByPrice = (order) => {
        const sortedProducts = [...productsFromApi].sort((a, b) => {
            if (order === 'high-to-low') {
                return b.price - a.price;
            } else if (order === 'low-to-high') {
                return a.price - b.price;
            }
            return 0;
        });
        setProductsFromApi(sortedProducts);
    };

    const handleSorting = (sortOrder) => {
        sortByPrice(sortOrder);
        setShowRecommended(false); // Hide the dropdown after sorting
    };

    return (
        <>
            <div className='item-bar-main large-screen'>
                <div className="item-bar-left">
                    <span className='number-of-item'>{productsFromApi.length} Items</span>
                    <span className='filter-message' onClick={() => setShowFilter(!showFilter)}>
                        {showFilter ? <MdKeyboardArrowLeft /> : ''} 
                        {showFilter ? 'HIDE FILTER' : 'SHOW FILTER'} 
                        {!showFilter ? <MdKeyboardArrowRight /> : ''}
                    </span>
                </div>
                <div className="item-bar-right">
                    <span className='recommended' onClick={() => setShowRecommended(!showRecommended)}>
                        RECOMMENDED <FaAngleDown />
                    </span>
                    <div className={`recommended-content ${showRecommended ? 'show' : ''}`}>
                        <span onClick={() => handleSorting('high-to-low')}>PRICE : HIGH TO LOW</span><br />
                        <span onClick={() => handleSorting('low-to-high')}>PRICE : LOW TO HIGH</span><br />
                        <span onClick={() => handleSorting('none')}>POPULAR</span><br />
                        <span onClick={() => handleSorting('none')}>NEWEST FIRST</span>
                    </div>
                </div>
            </div>
            <div className='item-bar-main small-screen'>
                <div className="item-bar-left">
                    <span className='filter-message-sm' onClick={() => setShowFilter(!showFilter)}>FILTER</span>
                </div>
                <div>
                    <span className='recommended' onClick={() => setShowRecommended(!showRecommended)}>
                        RECOMMENDED <FaAngleDown />
                    </span>
                    <div className={`recommended-content ${showRecommended ? 'show' : ''}`}>
                        <span onClick={() => handleSorting('high-to-low')}>PRICE : HIGH TO LOW</span><br />
                        <span onClick={() => handleSorting('low-to-high')}>PRICE : LOW TO HIGH</span><br />
                        <span onClick={() => handleSorting('none')}>POPULAR</span><br />
                        <span onClick={() => handleSorting('none')}>NEWEST FIRST</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ItemBar;
