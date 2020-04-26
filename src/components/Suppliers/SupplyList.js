import React from "react";
import SupplyItem from "./SupplyItem";
import "./SupplyList.css";

const SupplyList = (props) => {
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
      {props.items.map((supplier) => (
        <SupplyItem
          key={supplier.id}
          id={supplier.id}
          address={supplier.company_address}
          name={supplier.company_name}
          image={
            "https://a.c-dn.net/b/4uot3B/headline_shutterstock_243762007.jpg"
          }
          available={supplier.company_open}
        />
      ))}
    </div>
  );
};

export default SupplyList;
