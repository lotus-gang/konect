<<<<<<< HEAD
import React, { useState } from "react";
import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UIElements/Card";
import Map from "../../shared/components/UIElements/Map";
import Modal from "../../shared/components/UIElements/Modal";
=======
import React, { useState, useContext } from "react";

>>>>>>> origin/styleDetails
import "./ProductItem.css";



const ProductItem = props => {
  return (
    <React.Fragment>
      <li>
        <ul className="display">
          <li>
            <div className="product-item__info">
              <h2>{props.name}</h2>
            </div>
          </li>
          <li>
            {props.available ? (
              <p className="available">Available</p>
            ) : (
              <p className="unavailable">Unavailable</p>
            )}
          </li>
        </ul>
        <hr />
      </li>
    </React.Fragment>
  );
};

export default ProductItem;
