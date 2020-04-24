import React from "react";

import Card from "../../shared/components/UIElements/Card";
import PlaceItem from "./PlaceItem";
import Button from "../../shared/components/FormElements/Button";
import ProductList from "./ProductList";
import "./PlaceList.css";

const PlaceList = props => {
  const { items } = props;
  if (!items) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No supplier found. Maybe create one?</h2>
          <Button to="/auth">Create Account</Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="place-list">
      <PlaceItem
        key={items.id}
        id={items.id}
        image={items.imageUrl}
        title={items.title}
        description={items.description}
        address={items.address}
        creatorId={items.creator}
        coordinates={items.location}
        products={props.products}
      />
    </div>
  );
};

export default PlaceList;
