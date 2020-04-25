import React from "react";

import Card from "../../shared/components/UIElements/Card";
import PlaceItem from "./PlaceItem";
import Button from "../../shared/components/FormElements/Button";
import "./PlaceList.css";

const PlaceList = props => {
  const { supplier } = props;
  if (!supplier) {
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
        key={supplier.id}
        id={supplier.id}
        available={supplier.available}
        image={supplier.imageUrl}
        name={supplier.name}
        description={supplier.description}
        address={supplier.address}
        creatorId={supplier.creator}
        coordinates={supplier.location}
        products={props.products}
      />
    </div>
  );
};

export default PlaceList;
