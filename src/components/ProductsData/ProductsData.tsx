import React from "react";
import "./ProductsData.scss";

import { ProductType } from "../../services/fakerdata";
import ProductCard from "../ProductCard/ProductCard";

interface ProductsInterface {
  products: ProductType[];
}

const ProductsData = ({ products }: ProductsInterface) => {
  return (
    <>
      {products.length <= 0 ? (
        <div className="no_results">No Results Found !!!</div>
      ) : (
        <div className="product_results_container">
          {products.map((product, i) => {
            return <ProductCard key={i} product={product} />;
          })}
        </div>
      )}
    </>
  );
};

export default ProductsData;
