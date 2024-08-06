
import ProductItems from './ProductItems';
import './productItems.css'
function Products({productsFromApi,setProductsFromApi}) {
      
  return (
    <>
    <div className='products-main-div'>
        {productsFromApi.map(product => (
          <ProductItems product={product} key={product.id} />
        ))}
    </div>
    </>
  )
}

export default Products