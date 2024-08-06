import { useEffect, useState } from "react";
import ProductItems from "./ProductItems";
import "./productItems.css";
import CategoryButton from "./CategoryButton";

function Products({ productsFromApi, setProductsFromApi, showFilter }) {
  const [categoriesArray, setCategoriesArray] = useState([]);
  const [fullProductList, setFullProductList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  useEffect(() => {
    if (productsFromApi.length > 0) {
      if (fullProductList.length === 0) {
        setFullProductList(productsFromApi);
      }

      if (categoriesArray.length === 0) {
        const getUniqueCategories = (products) => {
          return [...new Set(products.map((product) => product.category))];
        };
        const uniqueCategories = getUniqueCategories(productsFromApi);
        uniqueCategories.push("All");
        setCategoriesArray(uniqueCategories);
      }
    }
  }, [productsFromApi]);

  useEffect(() => {
    if (selectedCategory === "All") {
      setProductsFromApi(fullProductList);
    } else {
      setProductsFromApi(
        fullProductList.filter(
          (product) => product.category === selectedCategory
        )
      );
    }
  }, [selectedCategory, fullProductList]);

  return (
    <>
      <div className="products-shop">
        <div
          className={`side-nav-for-filter ${showFilter ? "show" : "notShow"}`}
        >
          <h3>
            Filter by
            <br /> categories
          </h3>
          {categoriesArray.length > 0 ? (
            categoriesArray.map((category, index) => (
              <CategoryButton
                category={category}
                key={index}
                isSelected={selectedCategory === category}
                onSelect={() => setSelectedCategory(category)}
              />
            ))
          ) : (
            <p>Loading categories...</p>
          )}
        </div>
        <div className="products-main-div">
          {productsFromApi.map((product) => (
            <ProductItems product={product} key={product.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;
