import React, { useEffect, useState } from 'react'
import Text from './Text/Text'
import ItemBar from './ItemBar/ItemBar'
import Products from './Products/Products'
import axios from 'axios'

function Shop() {
  const [productsFromApi,setProductsFromApi] = useState([])
  const [showFilter,setShowFilter] = useState(false)


    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const response = await axios.get('https://fakestoreapi.com/products');
            setProductsFromApi(response.data);
          } catch (error) {
            console.error('Error fetching products:', error);
          }
        };
    
        fetchProducts(); 
      }, []);
  return (
    <>

    <Text />
    <ItemBar  showFilter={showFilter} setShowFilter={setShowFilter} productsFromApi={productsFromApi} setProductsFromApi={setProductsFromApi}/>
    <Products showFilter={showFilter} productsFromApi={productsFromApi} setProductsFromApi={setProductsFromApi}/>
    </>
  )
}

export default Shop