import React from "react";
import { Link } from "react-router-dom";

import Avatar from "../../shared/components/UIElements/Avatar";
import Card from "../../shared/components/UIElements/Card";
import "./SupplyItem.css";
import { Container, Row, Col } from "react-bootstrap";

const SupplyItem = (props) => {
  return (
    <div className="user-item">
      <Link to={`/${props.id}`}>
        {/* <Container> */}
        <div className="user-item__image">
          <img src={props.image} alt={props.name} />
        </div>
        <div className="user-item__info">
          <h2>{props.name}</h2>
          <h3>{props.address}</h3>
          <span>Open now</span>
        </div>
        {/* </Container> */}
      </Link>
    </div>
  );
};

export default SupplyItem;
