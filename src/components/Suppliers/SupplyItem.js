import React from "react";
import { Link } from "react-router-dom";

import "./SupplyItem.css";
import { Container, Row, Col } from "react-bootstrap";

const SupplyItem = (props) => {
  return (
    <div className="user-item">
      <Link to={`/${props.id}`}>
        {/* <Container> */}
        <Row>
          <Col xs={5} className="user-item__image no-padding">
            <img src={props.image} alt={props.name} />
          </Col>
          <Col xs={7} className="user-item__info no-padding">
            <h2>{props.name}</h2>
            <h3>{props.address}</h3>
            <span>Open now</span>
          </Col>
        </Row>

        {/* </Container> */}
      </Link>
    </div>
  );
};

export default SupplyItem;
