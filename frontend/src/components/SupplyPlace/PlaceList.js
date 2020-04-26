import React from "react";

import Card from "../../components/shared/UIElements/Card";
import PlaceItem from "./PlaceItem";
import Button from "../../components/shared/FormElements/Button";
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
        id={supplier.id}
        available={supplier.company_open}
        image="https://a.c-dn.net/b/4uot3B/headline_shutterstock_243762007.jpg"
        name={supplier.company_name}
        description={supplier.company_desc}
        address={supplier.company_address}
        coordinates={{ lat: supplier.company_lat, lng: supplier.company_long }}
        products={props.products}
      />
    </div>
  );
};

export default PlaceList;
