import React from "react";

import Card from "../../components/shared/UIElements/Card";
import ProductItem from "./ProductItem";
import Button from "../../components/shared/FormElements/Button";
import "./ProductList.css";

const ProductList = props => {
  const { products } = props;
  if (!products) {
    return (
      <div className="product-list center">
        <Card>
          <h2>No product found. Maybe create one?</h2>
          <Button to="/supply/new">Share Product</Button>
        </Card>
      </div>
    );
  }
  return (
    <ul className="product-list">
      {props.products.map(product => (
        <ProductItem
          id={product.id}
          name={product.product_name}
          available={product.product_available}
          description={product.product_description}
        />
      ))}
    </ul>
  );
};

export default ProductList;
