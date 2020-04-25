import React from "react";

import SupplyItem from "./SupplyItem";
import Card from "../../shared/components/UIElements/Card";
import Search from "./Search";

import "./SupplyList.css";

const SupplyList = props => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <div>
          <h2>No suppliers found.</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="users-list">
      {props.items.map(suppliers => (
        <SupplyItem
          key={suppliers.id}
          id={suppliers.id}
          address={suppliers.address}
          name={suppliers.name}
          image={suppliers.imageUrl}
        />
      ))}
    </div>
  );
};

export default SupplyList;
