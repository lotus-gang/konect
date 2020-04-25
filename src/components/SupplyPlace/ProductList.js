import React from "react";

import Card from "../../shared/components/UIElements/Card";
import ProductItem from "./ProductItem";
import Button from "../../shared/components/FormElements/Button";
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
          name={product.name}
          available={product.available}
          creatorId={product.creator}
        />
      ))}
    </ul>
  );
};

export default ProductList;
