import React from "react";

import SupplyItem from "./SupplyItem";
import Card from "../../shared/components/UIElements/Card";
import Search from "./Search";

import "./SupplyList.css";

const SupplyList = props => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No suppliers found.</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="users-list">
      {props.items.map(suppliers => (
        <SupplyItem
          key={suppliers.id}
          id={suppliers.id}
          industry={suppliers.industry}
          name={suppliers.name}
          image={suppliers.imageUrl}
        />
      ))}
    </ul>
  );
};

export default SupplyList;
