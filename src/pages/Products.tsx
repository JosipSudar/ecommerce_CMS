import Headline from "@/components/Headline";
import ProductCard from "@/components/ProductCard";
import { ProductImport } from "@/utils/constants/ProductsImport";
import React from "react";

const Products: React.FC = () => {
  return (
    <div>
      <Headline title="Products" subtitle="List of products" />
      <div className="p-5 grid grid-cols-5 gap-4">
        {ProductImport.map((product) => (
          <ProductCard
            key={product.id}
            thumbnail={product.thumbnail}
            title={product.title}
            price={
              product.price - (product.price * product.discountPercentage) / 100
            }
            description={product.description}
            brand={product.brand}
            category={product.category}
            rating={product.rating}
            stock={product.stock}
            discountPercentage={product.discountPercentage}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
