import React from "react";
import { useProductCategories } from "../../utils/hooks/useProductCategories";
import Card from "../Card/Card";

const ProductCategories = () => {
  const { data, isLoading } = useProductCategories();
  if (isLoading) {
    return <div>{"..."}</div>;
  }

  return (
    <section>
      <h4>Product Categories</h4>
      <div>
        {data.results.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            name={product.data.name}
            image={product.data.main_image.url}
            buttonText='Go to category'
          />
        ))}
      </div>
    </section>
  );
};

export default ProductCategories;
